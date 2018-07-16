import React, { Component } from 'react';
import {
    Appear,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Slide,
} from 'spectacle';
import theme from './theme/index.js';
import preloader from '../node_modules/spectacle/src/utils/preloader.js';

//  The list of images
const images = {
    whatsTheDeal: require('../assets/001-whats-the-deal.gif'),
    callbacksExample: require('../assets/002-callbacks-example.png'),
    promisesExample: require('../assets/003-promises-example.png'),
    asyncAwaitExample: require('../assets/004-async-await-example.png'),
    asyncAwaitChainExample: require('../assets/005-async-await-chain-example.png'),
    asyncAwaitErrors: require('../assets/006-async-await-error-handling.png'),
    concurrentBad: require('../assets/007-concurrent-bad.png'),
    concurrentBetter: require('../assets/008-concurrent-better.png'),
    concurrentBest: require('../assets/009-concurrent-best.png'),
    shallWeStart: require('../assets/010-shall-we-start.gif'),
    okayHand: require('../assets/011-okay-hand.png'),
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
                        Async/Await
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
                        size={4}
                        textAlign="left"
                    >
                        Handling async code in JavaScript
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Callbacks:
                            </ListItem>
                        </Appear>
                    </List>
                    <Appear>
                        <Image src={images.callbacksExample} />
                    </Appear>
                </Slide>
                {/* Slide 3 */}
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        textAlign="left"
                    >
                        Handling async code in JavaScript
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Promises:
                            </ListItem>
                        </Appear>
                    </List>
                    <Appear>
                        <Image src={images.promisesExample} />
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        textAlign="left"
                    >
                        Handling async code in JavaScript
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Async/await:
                            </ListItem>
                        </Appear>
                    </List>
                    <Appear>
                        <Image src={images.asyncAwaitExample} />
                    </Appear>
                </Slide>
                {/* Slide 4.5 */}
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        textAlign="left"
                    >
                        Benefits of async/await
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Allows you to write async code as if it were synchronous
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Can make it easier to think about each step of your program, in order
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Great for when you want to get a value from a promise, then use it in the same scope (instead of in a .then callback)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🔥 Is a hot new trend in JS
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Chaining Async/await
                    </Heading>
                    <Appear>
                        <Image src={images.asyncAwaitChainExample} />
                    </Appear>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Handling errors
                    </Heading>
                    <Appear>
                        <Image src={images.asyncAwaitErrors} />
                    </Appear>
                </Slide>
                {/* Slide 7 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Handling concurrent requests: Bad
                    </Heading>
                    <Appear>
                        <Image src={images.concurrentBad} />
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Handling concurrent requests: Better
                    </Heading>
                    <Appear>
                        <Image src={images.concurrentBetter} />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Handling concurrent requests: Best
                    </Heading>
                    <Appear>
                        <Image src={images.concurrentBest} />
                    </Appear>
                </Slide>
                {/* Slide 10 */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading
                            padding="0 0 3rem"
                            size={5}
                            textAlign="left"
                        >
                            Async/await is so cool Dave!
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image src={images.shallWeStart} />
                    </Appear>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        padding="0 0 3rem"
                        size={5}
                        textAlign="left"
                    >
                        Using async/await
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Currently a Stage-3 proposal (meaning it's pretty much for sure going to be part of JS, they're just working out the kinks)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Supported in Node v8+
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <a href="https://caniuse.com/#feat=async-functions" target="_blank">
                                    Great support in modern browsers
                                </a> (no IE11 support tho)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                You can compile with Babel for client-side code, <a href="https://babeljs.io/repl/#?babili=false&browsers=last%204%20versions%2C%20ie%20%3E%209%2C%20iOS%20%3E%3D%207%2C%20last%204%20Android%20versions&build=&builtIns=false&code_lz=FAYw9gdgzgLgBAEwKYBsCGBPOBeOAKGASwFskwBXGAShwD44IkB3OABQCcxjCok92kUMCgBuSOnADewOHACQvGABUSZSv0HCxAGjhFSFagG5gAXyongoSLDhooGCCABiEHHYdP8NbPWly0JjRCeGR0DDwARgAGWIszS3tHFwg8CyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=6.26.0&envVersion=1.6.2" target="_blank">buuuut......</a>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 12 */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading
                            padding="0 0 3rem"
                            size={5}
                            textAlign="left"
                        >
                            That's all folks!
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image src={images.okayHand} width="70vw" />
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
