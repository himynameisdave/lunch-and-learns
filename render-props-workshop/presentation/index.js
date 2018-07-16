import React, { Component } from 'react';
import {
    Appear,
    Code,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    MarkdownSlides,
    Slide,
    S,
    Text,
    Link,
} from 'spectacle';
import theme from './theme/index.js';
import preloader from '../node_modules/spectacle/src/utils/preloader.js';

//  The list of images
const images = {
    notNo: require('../assets/001-not-no.gif'),
    reactIsDope: require('../assets/002-react-is-dope.png'),
    neat: require('../assets/003-neat.gif'),
    reactTooManyProps: require('../assets/004-react-too-many-props.png'),
    tooManyProps: require('../assets/005-too-many-props.jpg'),
    tooManyClasses: require('../assets/006-too-many-classes.png'),
    contextSwitcher: require('../assets/007-context-switcher-api.png'),
    thereHasToBeABetterWay: require('../assets/008-there-has-to-be-a-better-way.gif'),
    simpleHoc: require('../assets/009-simple-hoc.png'),
    hocProblems: require('../assets/010-hoc-problems.png'),
    gooseFactsRendered: require('../assets/010.1-goosefacts.png'),
    gooseFacts: require('../assets/011-simple-render-prop-goose-fact.png'),
    usingGooseFacts: require('../assets/012-using-goose-fact-render-prop.png'),
    rayRayExample: require('../assets/013-ray-ray-example.png'),
};
//  Preload images
preloader(images);
//  Simple CSS reset
require('normalize.css');


export default class Presentation extends Component { // eslint-disable-line
    render() {
        return (
            <Deck theme={theme} transition={['slide']} transitionDuration={500}>
                {/* Slide 1 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        textAlign="left"
                    >
                        React Render Props
                    </Heading>
                    <Appear>
                        <Heading
                            margin="0 0 1rem"
                            size={5}
                            style={{ fontStyle: 'italic' }}
                            textAlign="left"
                        >
                            🤔🤔🤔 not no...
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.notNo}
                            width="40vw"
                            />
                    </Appear>
                    <Appear>
                        <Code style={{ fontSize: '1.6181rem' }}>git clone git@github.com:himynameisdave/render-props-workshop.git</Code>
                    </Appear>
                </Slide>

                {/* Slide 2 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Sharing code between components:
                    </Heading>
                    <Appear>
                        <Image
                            src={images.reactIsDope}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 3 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Sharing code between components:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Pass props to a component
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Renders stuff (or doesn't render stuff) based on those props
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Allows us to create reusable components that are customizable
                            </ListItem>
                        </Appear>
                    </List>
                    <Appear>
                        <Image
                            src={images.neat}
                            width="420px"
                        />
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Problem: Over-customization
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Things start off small, but then complexity creeps in
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Sometimes we pass down complex objects, or worse arrays of complex objects
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Other times, we are trying too hard to control the way the component should render/style things...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This makes our components overly complex/unmaintainable over time
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Image
                        src={images.reactTooManyProps}
                        width="50vw"
                    />
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.tooManyProps}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 7*/}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        “Render yourself like this” Props
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                A lot of our props are there only to tell our components how things should be rendered
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                example: <Code>showIcon</Code> to tell a <Code>Button</Code> if it should also render an icon
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                classNames props are another issue...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        classNames
                    </Heading>
                    <Appear>
                        <Image
                            src={images.tooManyClasses}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        "Smart" vs "Dumb" components
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Some components are “dumb”, ie: they just take props and show a <S type="italic">very simple</S> and <S type="italic">very small</S> piece of UI
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ie: <Code>{`<BruceBanner text=“Render this text plz and thnx” />`}</Code>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                            Other components actually contain some logic and/or update local state (or Redux state)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ie: <Code>{`<Picker />`}</Code> <S type="italic">(more on this later)</S>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                        >
                        "Smart" vs "Dumb" components
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Our team tends to blur the line here a lot...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                example: <Code>{`<ContextSwitcher />`}</Code>
                            </ListItem>
                        </Appear>
                    </List>
                    <Appear>
                        <Image
                            src={images.contextSwitcher}
                            width="50vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 10 */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.thereHasToBeABetterWay}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Higher-order components
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                ...are functions that take a component and return a "modified/extended" version of that component
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Basically decorators, but for React components
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This allows you to completely separate the "smart" logic from the "dumb" UI rendering
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Let's do an example!
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 12 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Higher-order components
                    </Heading>
                    <Appear>
                        <Image
                            src={images.simpleHoc}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 13 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Problems with HOCs
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                refs are not automatically passed, you need to use <Code>innerRef</Code>, etc. to make refs work
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                can be hard to know where props are coming from if you wrap too many HOCs
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                prop naming collisions
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                can involve a lot of boilerplate
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 14 */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.hocProblems}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 15 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Render props
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                "take a function as a prop, pass data/state into it and use it to render stuff"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                a lot like HOCs, but they give <S type="italic">full control over rendering</S> to the parent component
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Example: let's convert 7Geese's award-winning and much-loved <Code>{`<GooseFacts />`}</Code> component to use render props...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 15.5 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        <Code>{`<GooseFacts />`}</Code>
                    </Heading>
                    <Appear>
                        <Image
                            src={images.gooseFactsRendered}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 16 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Setup GooseFacts to use render props
                    </Heading>
                    <Appear>
                        <Image
                            src={images.gooseFacts}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 16 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Using new GooseFacts
                    </Heading>
                    <Appear>
                        <Image
                            src={images.usingGooseFacts}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 16 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Problems solved by render props:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                ✅ separation of concerns (smart vs dumb)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ✅ avoids className lock-in
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ✅ makes testing easier (testing dumb components is easy as 🥧)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ✅ you can re-use the core logic without having to buy into the render logic
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 16.5 */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.rayRayExample}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 17 */}
                <Slide align="center center">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Example: <Code>Search</Code>
                    </Heading>
                    <Link href="https://codesandbox.io/s/wor91mx7w8" target="_blank">
                        Code Sandbox
                    </Link>
                </Slide>
                {/* Slide 18 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Criticisms of Render Props: Too Complex
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                🗯️ whaaaat the whaat is going on?
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🙂 False! They only seem complicated at first
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🕰️ Once you spend some time with them, you realize they are actually pretty simple. It's just functions!
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 19 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Criticisms of Render Props: Re-use of UI code
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                🗯️ you have to re-write render logic a bunch of times
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ♻️ False! You can still reuse the small parts of the UI that compose the render prop
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                📥 eg: the input in the <Code>{`<Search />`}</Code> example could be broken off
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🍤 This allows us to have a bunch of small, dumb components being powered by smarter ones like <Code>{`<Search />`}</Code>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 21 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        Criticisms of Render Props: Performance
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                🗯️ new fat arrow function created on every parent re-render (bad for perf)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🏪 False! You can store your render props as component methods, or better yet as their own components
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ⚖️ Remember: Don't optimize until you have measured and know that you have a problem!
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 20 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="left"
                    >
                        In conclusion:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                ↔️ Render props are a great way to separate concerns
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🌎 Prop-getters are a great way to simplify the API exposed to the outside-world
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🧒 "Function-as-children" is the "preferred" way to render, however you can just pass <Code>render</Code> as a prop as well
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👻 "Shadow components" are what I'm calling components that your enhanced render-prop components implies via it's API...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🔍 ...like in the <Code>{`<Search />`}</Code> example before, the clear button is <S type="italic">implied</S>, however the parent component can choose what to do
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 22 */}
                <Slide align="center center">
                    <Heading
                        margin="0 0 2rem"
                        size={1}
                        textAlign="center"
                    >
                        <Code>{`.finally(<Picker />)`}</Code>
                    </Heading>
                    <Appear>
                        <Text>
                            I've been re-working our <Code>{`<Picker />`}</Code> component to use render props
                        </Text>
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
