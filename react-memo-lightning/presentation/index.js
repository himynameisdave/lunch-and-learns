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
    // brains: require('../assets/006-finale-brains.gif'),
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
                        size={3}
                        textAlign="left"
                    >
                        Recap: PureComponent
                    </Heading>
                    <List>
                    </List>
                    <Appear>
                    </Appear>
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
