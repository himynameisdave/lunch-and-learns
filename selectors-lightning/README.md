## Redux Selectors

Welcome to the ⚡️ talk about Redux selectors. I want the team to fully buy into them, because they're dope, so I want to explain why they are cool (and I would even say they are necessary in large Redux apps). Finally, we're gonna talk about how to use `reselect`.

### Purpose

- Selecting slices of state in your `mapStateToProps` for connected components, or anywhere in your app that you need to select state.
- Sometimes you're slicing simple stuff:
    ```jsx
    const mapStateToProps = (state) => ({
        isLoading: state.isLoading,
    });
    ```
- Sometimes you're deriving more complex data from the state:
    ```jsx
    const mapStateToProps = (state) => ({
        users: state.users.map(user => ({
            ...item,
            name: `${user.first_name} ${user.last_name}`
            fullAddress: `${user.street_address}, ${user.city}, ${user.country}`
        })),
    });
    ```
- Or perhaps you're looking up a single user based on an ID passed to `ownProps`:
    ```jsx
    const mapStateToProps = (state, ownProps) => {
        const user = state.users.find(user => user.id === ownProps.id);
        return {
            name: `${user.first_name} ${user.last_name}`,
            profileImage: user.profile_image,
            email: user.email,
            fullAddress: `${user.street_address}, ${user.city}, ${user.country}`,
            notes: user.notes,
        };
    };
    ```
- Maybe later, your GraphQL mutation needs to grab the state in a specific shape:
    ```jsx
    const state = getState();
    ApolloQuery.mutate({
        ...updateUserNotes
        variables: {
            //  Backend expects them to be in a certain shape:
            users: state.users.map(user => ({
                id: user.id,
                notes: user.notes,
            }))
        }
    })
    ```

### Problem: code reuse
- What if another component needs to select the `users` in the same way?
- Don't Repeat Yourself bro!
- What happens if the state changes?
- Example: what if `state.users` is changed to `state.userList`?
- You'd have to go through all of your connected components and make the change

### Problem: testing
- Currently, in the `state.users.find`, that code is not being covered by any unit tests.
- More importantly, we're obtaining _derived data_ from that user object.
    - Meaning that we getting data in a way that it is not stored in the state (like grabbing the user's full name instead of passing in their `first_name` and `last_name` separately).
- This can lead to bugs which are not covered.
- Bad news bears 🐻

### Problem: performance
- Redux calls `subscribe` _every dang time_ an action is dispatched
    - _even if the state is not updated_
- In older versions of `react-redux`, it would call ALL `mapStateToProps` every time the state is updated. This has since changed, and it now only calls `mapStateToProps` when _the state actually changes_.
- This is still going to be expensive if a part of the state is updating which is not related to components.
- `Array.map` is returning _a new array_ every time it's called.
- In older versions of React, might have trouble reconciling this ("is this a new array").
- `Array.find` needs to go and look up the user every single time, _for every single connected user component_.
- This can be expensive if you have an XXL list.

### Enter: Selectors

- Selectors aim to solve many/all of these problems.
- They are functions which "select" state for you.
- At first, it might seem like they are overkill.
- Remember the reasons we are doing this:
    1. Reduce code duplication/better code reuse.
    2. Ability to test state selectors (make sure we're getting the right state/shape).
    3. Performance (more on this in a minute).


### Simple Selectors

- You can write selectors without any library.
- Just write functions which "select" the state you want:
    ```jsx
    const getUsers = state => state.users;

    const getUserIds = state => state.users.map(({ id }) => id);
    ```
- We can actually compose these selectors together:
    ```jsx
    const getUsers = state => state.users;

    const getUserIds = state => getUsers(state).map(({ id }) => id);
    ```
- This is great, because then later if we want to rename the state from `state.users` to `state.userList` or something, we'd only need to change it one place.
- Using selectors in our connected components:
    ```jsx
    const mapStateToProps = (state) => ({
        userIds: getUserIds(state),
    });
    ```

### Testing

- Testing is as simple as asserting that the results of a given selector produce the expected results:
    ```jsx
    //  Selector:
    const getUserName = (state, id) => {
        const { first_name, last_name } = state.users.find(user => user.id === id);
        return `${first_name} ${last_name}`;
    };

    //  Test:
    const mockState = {
        users: [
            {
                id: 420,
                first_name: 'Dave',
                last_name: 'Loonie',
            }
        ]
    }
    expect(selectors.getUserName(mockState)).toBe(`Dave Loonie`);
    ```

### Enter: reselect

- The `reselect` library allows us to build _memoized_ selectors.
- The concept of memoization:
    > _In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again._
- Instead of re-calculating expensive calculations to obtain derived state, using reselect leverages memoization and only re-calculates _when things actually change_.
- It also encourages composition, ie: you build multiple selectors together.
- Let's write some selectors using `reselect`:
    ```jsx
    //  Note that createSelector is not the default export -- I've made this mistake!
    import { createSelector } from 'reselect';

    //  Reselect needs some kind of "base" selector to start with:
    const getUsers = state => state.users;

    const getUserIds = createSelector(
        //  You can pass as many selectors as you want here. You can also pass an array of selectors
        getUsers,
        //  The final function that you pass is what is actually returned from your selector.
        //  Each of it's arguments are the result of calling all the selectors you've added above.
        (users) => users.map(({ id }) => id)
    )
    ```


### Using ownProps with reselect

- You can use ownProps with `reselect`.
- Useful for doing a lookup based on an `id` passed directly to the component as a prop.
- The you can pass the ownProps you want to select "through" the selector, like so:
    ```jsx
    //  connected-component.js
    const mapStateToProps = (state, ownProps) => ({
        user: getUserById(state, ownProps)
    });

    //  selectors.js
    const getUsers = state => state.users;
    const getUserById = createSelector(
        getUsers,
        //  This 2nd function is what handles the ownProps
        (ownProps) => ownProps.id,
        //  Finally, our actual selector function will get users and id as its args
        (users, id) => users.find(user => user.id === id)
    );
    ```
