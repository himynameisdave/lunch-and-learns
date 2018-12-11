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
    // renderMethodExample: require('../assets/001-render-method-example.png'),
    // staticClassProperties: require('../assets/002-static-class-prop-example.png'),
    // usingChildren: require('../assets/003-using-children-to-share-state.png'),
    // usingChildrenUsage: require('../assets/004-using-children-usage.png'),
    // neat: require('../assets/005-neat.gif'),
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
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        <Code>
                            React.memo
                        </Code>
                    </Heading>
                    <Heading
                        margin="0 0 6rem"
                        size={4}
                        textAlign="left"
                    >
                        ⚡️️️ ⚡️️️ ⚡️️️ talk
                    </Heading>
                </Slide>
                {/* Slide 2 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Recap: shouldComponentUpdate
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                shouldComponentUpdate is a lifecycle hook
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                When React is reconciling, it will call this with the next props and next state
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Without this check, React will call your component to see if the outputted JSX has changed
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <span style={{ fontWeight: 'bold' }}>Not recommended to do deep equality checks in shouldComponentUpdate</span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                These are expensive and will slow you down
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 3 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Recap: PureComponent
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Replaces need to manually check this in shouldComponentUpdate
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Shallow comparison of props and state
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                If these contain complex data structures, it may produce false-negatives for deeper diffs
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Ideally we are keeping props simple and are not passing down complex objects as props
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                If you are passing down large objects, it's a sign that you need to break components into smaller chunks, or use connect deeper down the tree
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Stateless functional components
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Stateless functions don't really get any of these benefits
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                It has no shouldComponentUpdate hook, and it can not extend PureComponent
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Due to this, React must always call your function component to determine the JSX output
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                While this is usually fine, it would be nice to have a way to tell React that these props will not change
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="center center"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Enter:
                    </Heading>
                    <Appear>
                        <Heading
                            margin="2rem 0 2rem"
                            size={3}
                            textAlign="left"
                        >
                            React v16.6.x
                        </Heading>
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        React.memo
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                React 16.6 ships with a utility called memo
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This provides a way to get the benefits of using PureComponent/shouldComponentUpdate
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Memoization: cache the results of calling a function with specific props
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                React caches the returned JSX object
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        React.memo
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                You can also specify a "should update" function
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Just pass it to the React.memo call
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                As the 2nd paramater
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Other optimizations
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                React.memo and PureComponent are not silver bullets
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Avoid creating new functions inside of render
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Don't do stupid stuff inside of shouldComponentUpdate (like deep equality checks)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                For large lists: use "windowing" and only render what's actually on the screen
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="center center"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        SO:
                    </Heading>
                    <Appear>
                        <Heading
                            margin="2rem 0 2rem"
                            size={3}
                            textAlign="left"
                        >
                            Can we start using React.memo?
                        </Heading>
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Not quite yet.
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                There is an issue with React.memo and react-redux
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Thankfully, Jeremy has a PR open to bump us to react-redux 6.x
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Unfortunately, it breaks react-konva
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                We are still waiting on them to update that package
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
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
