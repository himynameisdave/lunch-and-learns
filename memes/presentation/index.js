import React, { Component } from 'react';
import {
    Appear,
    Anim,
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
    fireDave: require('../assets/001-fire-dave.gif'),
    richardDawkins: require('../assets/002-richard-dawkins.jpg'),
    baddaBing: require('../assets/003-badda-bing.jpg'),
    kilroy: require('../assets/004-kilroy.jpg'),
    jesus: require('../assets/005-jesus.jpg'),
    macros: require('../assets/006-image-macros.png'),
    cheeseburger: require('../assets/007-i-can-haz-cheeseburger.jpg'),
    advice: require('../assets/008-advice-animals.gif'),
    allYourBase: require('../assets/009-all-your-base.png'),
    allYourSimpsons: require('../assets/009-all-your-simpsons.jpg'),
    allYourTrump: require('../assets/009-all-your-trump.png'),
    doge: require('../assets/010-doge-meme.jpg'),
    planking: require('../assets/011-planking.jpg'),
    distractedOne: require('../assets/012-distracted-boyfriend-og.jpg'),
    distractedTwo: require('../assets/012-distracted-boyfriend-02.png'),
    distractedThree: require('../assets/012-distracted-boyfriend-03.png'),
    lampsOg: require('../assets/012-lamps-og.jpg'),
    lampsDistracted: require('../assets/012-lamps-meme.jpg'),


    knowYrMeme: require('../assets/013-know-your-meme.png'),
    finale: require('../assets/014-finale.png'),
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
                        Lunch and Learn
                    </Heading>
                    <Heading
                        margin="0 0 6rem"
                        size={4}
                        textAlign="left"
                    >
                        December 5th, 2018
                    </Heading>
                </Slide>
                {/* Slide 2 */}
                <Slide
                    align="center center"
                    notes=""
                >
                    <Appear>
                        <div
                            style={{
                                fontSize: '3rem',
                                position: 'absolute',
                                top: '20%',
                                left: '20%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '4rem',
                                position: 'absolute',
                                top: '-10%',
                                left: '70%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '8rem',
                                position: 'absolute',
                                top: '70%',
                                left: '25%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '5rem',
                                position: 'absolute',
                                top: '-52%',
                                left: '35%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '4rem',
                                position: 'absolute',
                                top: '82%',
                                left: '70%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '5rem',
                                position: 'absolute',
                                top: '-65%',
                                left: '55%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Appear>
                        <div
                            style={{
                                fontSize: '5rem',
                                position: 'absolute',
                                top: '90%',
                                left: '52%',
                            }}
                        >
                            👌
                        </div>
                    </Appear>
                    <Anim
                        fromStyle={{
                            transform: 'scale(0) rotate(-540deg)',
                        }}
                        toStyle={[
                            {
                                transform: 'scale(1.75) rotate(25deg)',
                            },
                            {
                                transform: 'scale(1) rotate(-45deg)',
                            },
                            {
                                transform: 'scale(1.2) rotate(10deg)',
                            },
                            {
                                transform: 'scale(1) rotate(0)',
                            },
                            {
                                transform: 'scale(1) rotate(0)',
                            },
                        ]}
                        transitionDuration={300}
                    >
                        <div>
                            <Text style={{ fontSize: '4rem' }}>
                                memes
                            </Text>
                        </div>
                    </Anim>
                </Slide>
                {/* Slide 3 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 8rem"
                        size={3}
                        textAlign="left"
                    >
                        pronunciation:
                    </Heading>
                    <Text style={{ fontSize: '5rem', textAlign: 'left' }}>
                        {'It\'s '}
                        <Appear><span style={{ fontStyle: 'italic' }}>MEEM</span></Appear>
                        <Appear><span>, not </span></Appear>
                        <Appear><span style={{ fontStyle: 'italic' }}>ME-ME</span></Appear>
                    </Text>

                    <Text style={{ fontSize: '3rem', textAlign: 'left' }}>
                        <Appear>
                            <span>{'(now listen to me mess it up,'}</span>
                        </Appear>
                        <Appear>
                            <span>{' just like with "JIFs" last time)'}</span>
                        </Appear>
                    </Text>
                </Slide>
                <Slide>
                    <iframe
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        height="472"
                        src="https://www.youtube.com/embed/zYPhXA2zHCU?rel=0&amp;controls=0&amp;showinfo=0"
                        width="840"
                    />
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
                        wat is a meme?
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                💡 an idea...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🕺 a behavior...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👩‍🎤 a style...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🌁 a concept...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                🔣 a symbol...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👽 a happening or phenomenon...
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
                        size={3}
                        textAlign="left"
                    >
                        wat is a meme?
                    </Heading>
                    <Text textAlign="left">
                        ...which is spread, by means of:
                    </Text>
                    <List>
                        <Appear>
                            <ListItem>
                                🗣 Speaking...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ✍️ Writing...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👩‍💻 Posting...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👹 Rituals...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                etc...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5 */}
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        wat is a meme?
                    </Heading>
                    <Text textAlign="left">
                        ...and is spread across:
                    </Text>
                    <List>
                        <Appear>
                            <ListItem>
                                👨‍👩‍👧‍👦 Friends/family...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                👥 Entire cultures/populations...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                💻 The Internet...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide
                    align="center center"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={1}
                        textAlign="left"
                    >
                        Let me give you an example...
                    </Heading>
                </Slide>
                <Slide
                    align="flex-start"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Are you familiar with this meme?
                    </Heading>
                    <Appear>
                        <Image
                            src={images.fireDave}
                            width="40vw"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        🔥 Fire Dave
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                It's 💡 an idea...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...which is spread by means of 🗣 speaking...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...among 🦆 geese...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...which means it's a meme<Appear><span>, ya dip 😜</span></Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        🔥 Fire Dave
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                It's evolved over time <Appear><span>(eg: people say different variations).</span></Appear>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Lives in our minds.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                In this way, it's kind of a living organism.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This is kind of weird to think about!
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>


                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme history: Dawkins
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                The term "meme" was coined in 1976...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...by noted evolutionary biologist and athiest Richard Dawkins...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...in his book "The Selfish Gene".
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme history: Dawkins
                    </Heading>
                    <Appear>
                        <Image
                            src={images.richardDawkins}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme history: Dawkins
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Dawkins theory can be summarized like this:
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                genes ▶️ biological evolution
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                memes ▶️ cultural evolution
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                memes are a self-replicating unit of culural evolution
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme example: Germs
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Let's say someone at work gets sick.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Let's say it's Topp.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                The germs that live inside Topp want to spread and reproduce.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Topp then decides to bring those germs to the office.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Topp then touches the handle on the coffeemaker and...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme example: Germs
                    </Heading>
                    <Appear>
                        <Image
                            src={images.baddaBing}
                        />
                    </Appear>
                    <Text style={{ fontSize: '5rem' }}>
                        <Appear><span>Germ city</span></Appear>
                        <Appear><span>, all geese down 🤒 🤧 🤮</span></Appear>
                    </Text>
                </Slide>

                {/* <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme example: Germs
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Some people have their flu vaccine and are immune to Topp's germs.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Every year, slightly mutated forms of the virus are born.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                If they did not mutate, they would eventually die off.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Mutation and self-replication are crucial to the virus' long-term survival.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide> */}

                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme history: early examples
                    </Heading>
                    <Appear>
                        <Text style={{ fontSize: '3rem', textAlign: 'left', margin: '0 0 2rem' }}>
                            "Kilroy was here"
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            margin="0 auto 2rem 0"
                            src={images.kilroy}
                            width="30vw"
                        />
                    </Appear>
                    <Appear>
                        <Text style={{ fontSize: '3rem', textAlign: 'left', margin: '0 0 2rem' }}>
                            WWII graffiti, which took on many different formats
                        </Text>
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme example: Religion
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Someone hears/tells a story.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                It passes on through spoken word and traditions.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Then, hundreds of years later, it's written down, and eventually translated.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Continues to spread, starts to fragment and traditions evolve.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Eventually you end up with many different "versions" of what were once similar religions.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Meme example: Religion
                    </Heading>
                    <Image
                        src={images.jesus}
                    />
                </Slide>
                <Slide
                    align="center center"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={1}
                        textAlign="left"
                    >
                        {'Okay we get it... '}
                        <Appear><span>but what about the funny stuff...</span></Appear>
                    </Heading>
                </Slide>
                <Slide
                    align="center center"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={1}
                        textAlign="left"
                    >
                        I think what you're thinking about are...
                    </Heading>
                </Slide>
                <Slide
                    align="center center"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={1}
                        textAlign="left"
                    >
                        <Appear>
                            <div>
                                <div>🎉 👌 💻 🎉 👌 💻 </div>
                                <div>Internet memes!</div>
                                <div>🎉 👌 💻 🎉 👌 💻 </div>
                            </div>
                        </Appear>
                    </Heading>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                The internet allows memes to spread extremely rapidly.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Because of the nature of the medium, internet memes often take the form of images or videos.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                They spread via direct communication, message boards and social media.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Improved access to editing tools (such as PhotoShop), allows memes to mutate just as rapidly as they are spread.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="center center"
                    notes=""
                >
                    <Text style={{ fontSize: '6rem', textAlign: 'left', margin: '0 0 2rem' }}>
                        BASICALLY...
                    </Text>
                    <Appear>
                        <Text style={{ fontSize: '4rem', textAlign: 'left' }}>
                            The internet is to memes...
                        </Text>
                    </Appear>
                    <Appear>
                        <Text style={{ fontSize: '4rem', textAlign: 'left', margin: '0 0 2rem' }}>
                            ...what pubic bathrooms are to germs... 🚻 🤢 😷
                        </Text>
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: image macros
                    </Heading>
                    <Appear>
                        <Image
                            src={images.macros}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: image macros
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                A very common internet meme format.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Consists of an image with text/caption superimposed on top.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Usually uses the <span style={{ fontFamily: 'Impact' }}>Impact</span> typeface.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Generally white text with black stroke.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Image Macros: Advice Animals
                    </Heading>
                    <Appear>
                        <Image
                            src={images.advice}
                        />
                    </Appear>
                    <Appear>
                        <Text style={{ textAlign: 'left', fontSize: '2rem' }}>
                            (These are the first memes I remember actually remixing myself)
                        </Text>
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Image Macros: LOLCats
                    </Heading>
                    <Appear>
                        <Image
                            src={images.cheeseburger}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Shitty grammar: doge 🐶
                    </Heading>
                    <Appear>
                        <Image
                            src={images.doge}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: shitty grammar
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                It's very common for memes to employ poor spelling and grammer.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Partially just because people are dumb.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Other times it's due to language barriers.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Generally when things are accidentally misspelled or mispronounced, the community latches onto it even more.
                            </ListItem>
                        </Appear>
                        {/* <Appear>
                            <ListItem>
                                These misspellings are often funnier and become the new branch for the
                            </ListItem>
                        </Appear> */}
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Shitty grammar: All your base
                    </Heading>
                    <Appear>
                        <Image
                            src={images.allYourBase}
                            width="50vw"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        all your base are belong to us
                    </Heading>
                    <Appear>
                        <Image
                            src={images.allYourSimpsons}
                            width="50vw"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        all your base are belong to us
                    </Heading>
                    <Appear>
                        <Image
                            src={images.allYourTrump}
                            width="50vw"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        all your base are belong to us
                    </Heading>
                    <iframe
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        height="472"
                        src="https://www.youtube.com/embed/cQnDkgdIn_A?rel=0&amp;controls=0&amp;showinfo=0"
                        width="840"
                    />
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: Non-images
                    </Heading>
                    <Appear>
                        <Image
                            src={images.planking}
                            width="30vw"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: Non-images
                    </Heading>
                    <Appear>
                        <iframe
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            height="472"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;controls=0&amp;showinfo=0"
                            width="840"
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Internet memes: dank memes
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                There is a sub-genre of memes culture called "dank memes".
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Often "so bad it's good", or extremely dumb to the point of being funny again.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                These memes are often a combination of many different meme formats.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This results in a multi-layered meme, which takes a knowledge about other memes to even be funny or relevant.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Extremely difficult (or in some cases impossible) to show or explain to your parents.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Dank memes: distracted bf
                    </Heading>
                    <Appear>
                        <Image
                            src={images.distractedOne}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Dank memes: distracted bf
                    </Heading>
                    <Appear>
                        <Image
                            src={images.distractedTwo}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Dank memes: distracted bf
                    </Heading>
                    <Appear>
                        <Image
                            src={images.distractedThree}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Dank memes: Sean's fav
                    </Heading>
                    <Appear>
                        <Image
                            src={images.lampsOg}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                    notes=""
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        Dank memes: lamps
                    </Heading>
                    <Appear>
                        <Image
                            src={images.lampsDistracted}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="center center"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={2}
                        textAlign="left"
                    >
                        {'Dave... '}
                        <Appear><span>I saw a dank meme on the 'gram, what does it mean!?</span></Appear>
                    </Heading>
                </Slide>
                <Slide
                    align="flex-start"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={3}
                        textAlign="left"
                    >
                        Know your meme
                    </Heading>
                    <Appear>
                        <Image
                            src={images.knowYrMeme}
                        />
                    </Appear>
                </Slide>
                <Slide
                    align="flex-start"
                >
                    <Heading
                        margin="2rem 0 2rem"
                        size={4}
                        textAlign="left"
                    >
                        <Appear><span>👌 That's all</span></Appear>
                        <Appear><span>, thanks for listening!</span></Appear>
                    </Heading>
                    <Appear>
                        <Image
                            src={images.finale}
                        />
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
