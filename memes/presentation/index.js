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
    renderMethodExample: require('../assets/001-render-method-example.png'),
    staticClassProperties: require('../assets/002-static-class-prop-example.png'),
    usingChildren: require('../assets/003-using-children-to-share-state.png'),
    usingChildrenUsage: require('../assets/004-using-children-usage.png'),
    neat: require('../assets/005-neat.gif'),
    brains: require('../assets/006-finale-brains.gif'),
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
                <Slide
                    align="flex-start"
                    notes="Here are links to examples if you really wanna be keen. "
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Compound Component Pattern in React
                    </Heading>
                    <Heading
                        margin="0 0 6rem"
                        size={4}
                        textAlign="left"
                    >
                        🌩 ⚡️ ⛈ talk
                    </Heading>
                    <Appear>
                        <Code lineHeight="1" style={{ fontSize: '1.25rem' }}>
                            https://github.com/himynameisdave/lunch-and-learns/tree/master/compound-components-lightning/examples
                        </Code>
                    </Appear>
                    <Appear>
                        <Text margin="1rem 0" style={{ fontSize: '2rem' }}>or</Text>
                    </Appear>
                    <Appear>
                        <Code style={{ fontSize: '1.75rem' }}>
                            bit.ly/boys-are-back-in-town
                        </Code>
                    </Appear>
                </Slide>
                {/* Slide 2 */}
                <Slide
                    align="flex-start"
                    notes="Two key ideas:<br /><br />
                    - Static, sub-components, which are a great way to break up larger components (monoliths)<br /><br />
                    - Using React.children for sharing state, which is interesting but kind maybe a little weird.<br /><br />
                    I'm not sure if I would reccomend this pattern over render props, but I still want everyone to at least be aware of it, especially the first point"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Really two key ideas:
                    </Heading>
                    <List ordered>
                        <Appear>
                            <ListItem>
                                Static "sub-component" properties.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Using React.Children to share state with these sub-components.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 3 */}
                <Slide
                    align="flex-start"
                    notes="Here is a our Collapsible component, implemented poorly. It locks you into a specific rendering AND manages the state (2 jobs)<br />
                    There are a few things that this is doing well:<br />
                    - using render methods to break up larger components<br />"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        How often do we write stuff like this?
                    </Heading>
                    <Appear>
                        <Image
                            src={images.renderMethodExample}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Advantages
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                👌 Cleaner/simpler render method
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Breaking things up
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <span>
                                    👌 Render-methods can (ahem, should) be unit tested:
                                </span>
                                <Appear>
                                    <div>
                                        <Code>wrapper.instance().renderSomething()</Code>
                                    </div>
                                </Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Static sub-components
                    </Heading>
                    <Appear>
                        <Image
                            src={images.staticClassProperties}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Advantages
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                👌 Breaking things up
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Even more readable render method (arguably)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 No access to <Code>this</Code>/props and state, essentially making them into self-contained pure functions
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Also nice to unit test/for Jest snapshotting
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Allows users of component to use these sub-components directly and independently
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 7 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Using React.Children for sharing state: Collapsible
                    </Heading>
                    <Appear>
                        <Image
                            src={images.usingChildren}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Using React.Children for sharing state: Parent/consumer
                    </Heading>
                    <Appear>
                        <Image
                            src={images.usingChildrenUsage}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Advantages
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                👌 Breaking things up
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Gives more control to parent component over how to render
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👌 Is kind of neat I guess 🤷‍♂️
                                <Appear>
                                    <div>
                                        <Image
                                            src={images.neat}
                                        />
                                    </div>
                                </Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 10 */}
                <Slide align="center center">
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        So is this pattern better than render props?
                    </Heading>
                    <Appear>
                        <Heading
                            margin="2rem 0 4rem"
                            size={4}
                            textAlign="left"
                        >
                            no, but it's still pretty interesting.
                        </Heading>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem 0 6rem"
                            textAlign="left"
                        >
                            (especially static "sub-components" thing)
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        margin="2rem 0 4rem"
                        size={4}
                        textAlign="center"
                    >
                        🧠 👌 Thanks 4 listening ✌️ 🧠
                    </Heading>
                    <Appear>
                        <Image
                            src={images.brains}
                        />
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
