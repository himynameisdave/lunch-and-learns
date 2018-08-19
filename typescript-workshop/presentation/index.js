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
    dynamicTypingExample: require('../assets/002-dynamic-typing-example.png'),
    sentryError: require('../assets/003-sentry-error.png'),
    billGates: require('../assets/003-bill-gates.gif'),
    syntaxSimple: require('../assets/004-ts-syntax-simple.png'),
    syntaxInterface: require('../assets/005-ts-interface.png'),
    tsconfig: require('../assets/006-tsconfig.png'),
    tsxBefore: require('../assets/007-tsx-before.png'),
    tsxAfter: require('../assets/008-tsx-after.png'),
    tsxBetter: require('../assets/009-tsx-better.png'),
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
                        Typescript
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
                {/* Slide 2 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Dynamic typing
                    </Heading>
                    <Appear>
                        <Image
                            src={images.dynamicTypingExample}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 3 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Dynamic Typing: Benefits
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                variables can be whatever you want, and you can change it
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                no annoying errors up front/during development (no compiling)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                this generally speeds up development velocity, but...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Dynamic Typing: Problems
                    </Heading>
                    <Appear>
                        <Text
                            textAlign="left"
                            margin="0 0 2rem"
                        >
                            Errors happen in userland:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.sentryError}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Strong Typing
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                compile step to ensure you didn't do something dumb
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                detect errors earlier
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                type definitions can help document code
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Flow &amp; Typescript
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                javascript is not strongly typed
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                but it's 2018 and a lot of folks are writing a lot of javascript at scale
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                so people wanted to add typing to javascript...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 6.5 */}
                <Slide align="flex-start">
                    <Text>
                        One of these companies is Microsoft
                    </Text>
                    <Appear>
                        <Image
                            src={images.billGates}
                            width="30vw"
                        />
                    </Appear>
                    <Appear>
                        <Text>
                            So they created Typescript
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 7 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Typescript: Syntax
                    </Heading>
                    <Appear>
                        <Text textAlign="left">
                            Add type annotations for function arguments
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.syntaxSimple}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Typescript: Syntax
                    </Heading>
                    <Appear>
                        <Text textAlign="left">
                            Type interfaces allow you to define "shapes"
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.syntaxInterface}
                            width="50vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Typescript: Usage
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>
                                    npm i -g typescript
                                </Text>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>
                                    tsc example.ts
                                </Text>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This will spit out a JS file called
                                {' '}<Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>example.js</Text>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Bam boom bam! 💥
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 10 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Typescript: Usage
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Configure your output with (yet another) JSON config file, called
                                {' '}<Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>tsconfig.json</Text>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                specifies the root files and the compiler options required to compile the project
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                looks something like this...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Typescript: tsconfig
                    </Heading>
                    <Appear>
                        <Image
                            src={images.tsconfig}
                            width="60vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 12 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Typescript: Migrating from JS
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Migrating a codebase from classic JavaScript to Typescript consists of two key phases:
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Adding the Typescript compiler to the build pipeline (ie: ts-loader for webpack)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Converting existing files from JavaScript to Typescript (as well as using Typescript for all new code being written)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 14 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Typescript: Migrating from JS
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Rename <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>.js</Text> files to <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>.ts</Text>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Rename <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>.jsx</Text> files to <Text style={{ display: 'inline-block', fontFamily: 'monospace' }}>.tsx</Text>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 15 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Typescript: Migrating from JS
                    </Heading>
                    <Appear>
                        <Text>
                            This is what a React component might look like BEFORE "converted" to TS:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.tsxBefore}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 16 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Typescript: Migrating from JS
                    </Heading>
                    <Appear>
                        <Text>
                            This is what a React component might look like AFTER "converted" to TS:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.tsxAfter}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 17 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Typescript: Migrating from JS
                    </Heading>
                    <Appear>
                        <Text>
                            This is what a React component might look like with typing:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.tsxBetter}
                            width="70vw"
                        />
                    </Appear>
                </Slide>
                {/* Slide 18 */}
                <Slide align="center center">
                    <Heading
                        margin="0 auto 1rem"
                        size={1}
                    >
                        wow
                    </Heading>
                    <Appear>
                        <Image
                            src="https://s3-us-west-2.amazonaws.com/maximewow/assets/maxwow.png"
                            width="30vw"
                        />
                    </Appear>
                    <Appear>
                        <Heading
                            size={3}
                        >
                            thanks for listening!
                        </Heading>
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
