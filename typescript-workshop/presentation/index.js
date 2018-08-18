import React, { Component } from 'react';
import {
    Appear,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    MarkdownSlides,
    Slide,
    Text,
} from 'spectacle';
import theme from './theme/index.js';
import preloader from '../node_modules/spectacle/src/utils/preloader.js';

//  The list of images
const images = {
    whatsTheDeal: require('../assets/001-whats-the-deal.gif'),
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
                        Project Title
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            style={{ fontStyle: 'italic' }}
                            textAlign="left"
                        >
                            what's the deal with that?
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.whatsTheDeal}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
