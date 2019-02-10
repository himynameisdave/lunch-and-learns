# React Hooks

What are they, what do they do, why is everyone talking about them, and how can I use them?

Link to all examples on CodeSandbox:

[![Edit all examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/dashboard/sandboxes/whats-the-deal-with-hooks)

## Recall

There are two ways to write a React component: **class components** or **function components**

**Class components**
- Can have state
- Can use React's lifecycle methods (ie: `componentDidMount`, `componentDidUpdate`, `componentDidFart`, `componentWillNotWorkAndItWillNotBeObviousWhy` etc...)
- Can store properties/methods
- Lots of confusion for junior developers
- Useful for larger, stateful components (ie: "smart" or "container" components)
- More annoying to write (too much typing, but you should be using a snippet for this anyway)
- Classes are also hard/impossible for minifiers/tree-shakers to find. So if you have an unused method on your class, it will not be stripped out.

```jsx
import React, { Component } from 'react';

class Booton extends Component {
    state = {
        count: 1,
    }

    handleClick = () => this.setState(({ count }) => ({
        count: count + 1,
    }));

    render() {
        return (
            <button onClick={this.handleClick}>
                The count is {this.state.count}
            </button>
        );
    }
}

export default Booton;
```

**Function components**
- Cannot have state
- Cannot access React's lifecycle methods (although apparently they all still happen under the hood)
- Cannot _really_ store properties/methods
- Useful for small bits of UI (ie: "dumb" or "presentational" components)
- Easier to write than a class component (ie: less typing, you don't have to worry about dumb shit like binding `this` to methods, etc...)

```jsx
import React from 'react';

const Booton = ({ count, onClick }) => (
    <button onClick={onClick}>
        The count is {count}
    </button>
);

export default Booton;
```

[![Edit Hooks - Lesson 0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vvx3qv75y)


## Separation of concerns

The intended way of mixing these two types of components is to have function components only responsible for rendering UI, and then use them in your stateful/class components. This creates a nice separation of concerns between what is a "smart" and what is a "dumb" component.

```jsx
import React, { Component } from 'react';
import Booton from './booton.jsx'

class CounterBooton extends Component {
    //  The class manages the state...
    state = {
        count: 1,
    }

    //  ...and also the lifecycle methods
    componentDidMount() {
        document.title = `COUNT === ${this.state.count}`;
    }
    componentDidUpdate() {
        document.title = `COUNT === ${this.state.count}`;
    }

    handleClick = () => this.setState(({ count }) => ({
        count: count + 1,
    }));

    render() {
        return (
            // Note: CounterBooton doesn't apply any styles, it's just in charge of managing the count
            <Booton
                count={this.state.count}
                onClick={this.handleClick}
            />
        );
    }
}
```

This is why patterns like render props and Higher-order components have taken off: they allow you to break off the core logic (ie: `count`) into a reusable format, without prescribing any specific rendering. This allows you to only worry about writing simple stateless function components and moving all the heavy-lifting into your HOC/render-prop component.


## Enter: Hooks

- The React team has seen the rise of HOC/render-props 👀
- They realize that most developers would rather just write a simple function component instead of an annoying class component
- So as an answer to this, they created a thing called **HOOKS** 🎣✨🎉🧠
- Hooks allow your function component to use state, hook (😏) into lifecycle methods, and basically do almost anything that a class component can do
- Beta version of this feature has been in React since like 16.6-ish (I think)

_**Das ist verrückt! Can you show us some examples?**_

Yes.

There are some hooks provided directly by React, but they also allow you to write your own custom hooks. There are also a shitload of open-source/3rd party ones, which we will also explore.

### useState

- This is the primo hook, the one you'll be reaching for the most 👌
- Allows a function component to... wait for it... _USE STATE_.

```jsx
import React, { useState } from 'react';

const Booton = () => {
    const initalCount = 10;
    const [count, updateCount] = useState(initalCount);
    const onClick = () => updateCount(count + 1);
    return (
        <button onClick={onClick}>
            The count is {count}
        </button>
    );
}

export default Booton;
```

WOW! React will now manage the `count` for you! Let's take a look at how it works line-by-line.

```jsx
const initalCount = 10;
```

- So you can set an initial state value.
- You don't need to store this as a variable, I'm just doing it here to be more obvious.
- You pass it to `useState`

```jsx
const [count, updateCount] = useState(initalCount);
```

- Woah! That's wild!
- Calling `useState` _returns an array_ with two values
- Using ES6+, you can destructure that array and give them whatever names you want
- _The first value_ is your state, so in our case `count`
- _The second value_ is a function to update the state

```jsx
const onClick = () => updateCount(count + 1);
```

- Whatever you pass to this setter function will become the next state

[![Edit Hooks - Lesson 1 - useState](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1qzqwn960q)


## useEffect

What about lifecycle methods? How do we do those with Hooks? How can we replicate the effect of changing the `document.title` when the count is updated?

```jsx
import React, { useState, useEffect } from 'react';

const Booton = () => {
    const [count, updateCount] = useState(0);
    const onClick = () => updateCount(count + 1);

    //  Bonjour, useEffect hook:
    useEffect(() => {
        document.title = `COUNT === ${count}`;
    });

    return (
        <button onClick={onClick}>
            The count is {count}
        </button>
    );
}

export default Booton;
```

- Woah! That's wild!
- `useEffect` is the same as a `componentDidMount` && `componentDidUpdate` && `componentWillUnmount` **combined**
- this is just the default behaviour, you can actually opt-out of this if you want
- For example, if count doesn't change, we wouldn't want the hook to run. Traditionally that's done like this:
```jsx
componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        document.title = `COUNT === ${this.state.count}`;
    }
}
```
- But in `useEffect` hook land, it looks something like this:
```jsx
useEffect(() => {
    document.title = `COUNT === ${count}`;
}, [count]); // <- Only runs the effect if `count` hasn't changed
```

[![Edit Hooks - Lesson 2 - useEffect](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/z376qw3lrl)

### useEffect - Cleanup
- What about doing cleanup? Such as something that you would do inside a `componentWillUnmount`?
- Let's look at an example of a simple interval/timer component:

```jsx
class Timer extends Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.interval = setInterval(this.increaseCount, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    increaseCount = () => this.setState(({ count }) => ({
        count: count + 1
    }));

    render() {
        const { count } = this.state;
        return (
            <div>
                ⏲ {count} seconds have elapsed!
            </div>
        );
    }
}
```
- How might we write this with Hooks?

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, updateCount] = useState(0);
    const increaseCount = () => updateCount(count + 1);

    useEffect(() => {
        let interval = setInterval(increaseCount, 1000);
        //  This returned function is your `componentWillUnmount`
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            ⏲ {count} seconds have elapsed!
        </div>
    );
};
```

[![Edit Hooks - Lesson 3 - useEffect](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6r4lk6x3)


### useReducer

- The `useState` hook is pretty nifty, BUT WHAT IF it could be even better?
- Enter: `useReducer`
- This hook allows you to create Redux-style reducers for your components
- Why are reducers dope again?
    - They encapsulate all state changes _into a single place_.
    - This makes it easier to track down bugs.
    - Because they are pure functions, this makes them easier to test.
- _So how does `useReducer` work?_

```jsx
import React, { useReducer } from 'react';

const actionTypes = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT'
};

//  This Redux-y stuff could/should all be broken off into it's own files for testing
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.increment:
            return { ...state, count: state.count + 1 };
        case actionTypes.decrement:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const initalState = { count: 0 };

const County = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <div>
            <h3>The count is {state.count}</h3>
            <button onClick={() => dispatch({ type: actionTypes.increment })}>
                ☝️ Up
            </button>
            <button onClick={() => dispatch({ type: actionTypes.decrement })}>
                👇 Down
            </button>
        </div>
    );
};

export default County;

```

- Kind of like multiple `useState` calls, merged into one.
- We provide `useReducer` with a reducer function
- It gives us the `state` and a `dispatch` function
- The rest works pretty much exactly like Redux, which you should already understand

[![Edit Hooks - Lesson 4 - useReducer](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jvqmqzlz0y)


### Custom hooks

- React provides a bunch of hooks:
- **Basic Hooks**
    - `useState`
    - `useEffect`
    - `useContext`
- **Additional Hooks**
    - `useReducer`
    - `useCallback`
    - `useMemo`
    - `useRef`
    - `useImperativeHandle`
    - `useLayoutEffect`
    - `useDebugValue`
- These provide you with the building blocks you need to create your own hooks
- Custom hooks _should_ be prefixed with `use` so that it is clear they are hooks.


```jsx
//  window-size.hook.jsx
//  Based on: https://github.com/rehooks/window-size/blob/master/index.js
import { useState, useEffect } from "react";

const getSize = () => {
    const { innerHeight, innerWidth, outerHeight, outerWidth } = window;
    return {
        innerHeight,
        innerWidth,
        outerHeight,
        outerWidth
    };
};

const useWindowSize = () => {
    let [windowSize, setWindowSize] = useState(getSize());

    const handleResize = () => setWindowSize(getSize());

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // ☝️ Leaving this array empty tells React "Hey, only run this hook on mount/unmount"

    return windowSize;
};

export default useWindowSize;

//  window-size.component.jsx

const WindowSize = () => {
    const size = useWindowSize();
    return (
        <h3>
            The window size is {size.innerHeight} by {size.innerWidth}
        </h3>
    );
};

```
- This is _a very very very_ smart way to split up logic.
- This makes HOCs and render props look like old geezers.
- ![custom hooks expanding brains meme](https://i.imgur.com/uGkACpW.jpg)
- By mixing and matching the core hooks provided by React, you can create all sorts of custom hooks

[![Edit Hooks - Lesson 5 - Custom Hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xl5jv7o0x4)

**3rd Party Custom Hooks**

- Obviously, the community has already created a shitload of custom hooks:
- https://github.com/rehooks/awesome-react-hooks#packages
- Before implementing your own, checkout that list to see if someone has already created it


## [Rules of hooks](https://reactjs.org/docs/hooks-rules.html)

While Hooks are a super powerful thing, it's important to remember that...

> ## _"With great power, comes great responsibility."_
> ### _- Tony Angerilli_

As such, if you want to use Hooks, you must remember some rules. Repeat after me: _I do solemnly swear that..._

1. **I will not attempt to use a hook in a class component**.
    - This will not work, and React will throw an error in development mode.
    - You can only use them in function components OR in your own custom hook.
2. **I will not call a hook inside a conditional or loop.**
    - Hooks must be called from the top level of the function component.
    - This is because React relies on call order, meaning that it keeps track of all the calls to `useState` (or whatever hook you are using), and therefore all hooks must always be called in that order.
3. **I will love using Hooks throughout our codebase, and will ask Dave if I have any questions.**
    - I am here to help, as me if something doesn't make sense.

There is also a [linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) which we will soon be including in [our ESLint config](https://github.com/7Geese/eslint-config-7geese#readme) to enforce good coding practices around Hooks.

## So how _do_ Hooks work?

- You don't really need to know about how they work under the hood to use them, so don't worry about it.
- BUT if you are a _real_ curious cat, you can [read this blog post](https://overreacted.io/why-do-hooks-rely-on-call-order/) by React Jesus Dan Abramov, where he explains the whole "call order" thing.
- ![](https://i.imgur.com/lzAVZbk.png)
- [Here is also a really good intro/demo video of him explaining Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM)
- [Here is yet another nifty blog post he wrote about writing a custom `useInterval` hook.](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) Super interesting.
- There's more info over here: https://github.com/rehooks/awesome-react-hooks
