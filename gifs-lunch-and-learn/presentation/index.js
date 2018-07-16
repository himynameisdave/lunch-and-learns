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
    'emoji_ok': require('../assets/emoji__ok-hand.png'),
    'emoji_noGood': require('../assets/emoji__no-good.png'),
    'emoji_thinking': require('../assets/emoji__thinking.png'),

    '90s_modem': require('../assets/90s_modem.gif'),
    '90s_web': require('../assets/90s_web.gif'),

    'geo_01': require('../assets/geocities_01.png'),
    'geo_02': require('../assets/geocities_02.png'),
    'geo_03': require('../assets/geocities_03.jpg'),
    'geo_04': require('../assets/geocities_04.jpg'),
    'geo_05': require('../assets/geocities_05.png'),
    'geo_06': require('../assets/geocities_06.png'),

    'blownAway': require('../assets/blown_away.gif'),
    'carlton': require('../assets/random_carlton.gif'),
    'compuserve': require('../assets/compuserve.gif'),
    'compuserve02': require('../assets/compuserve_02.jpg'),
    'datBoi': require('../assets/random_dat-boi.gif'),
    'dos': require('../assets/dos.jpg'),
    'fail': require('../assets/fail.gif'),
    'gin': require('../assets/gin.gif'),
    'pixels': require('../assets/pixels.jpg'),
    'history': require('../assets/history.gif'),
    'horseAnimation': require('../assets/horse-animation.jpg'),
    'larryDavid': require('../assets/larry_david.gif'),
    'mindBlown': require('../assets/mind_blown.gif'),

    'fakeNews': require('../assets/fake_news.gif'),
    'randomBrain': require('../assets/random_brain.gif'),
    'randomGoose': require('../assets/random_goose.gif'),
    'randomInternet': require('../assets/random_internet.gif'),
    'randomSkeleton': require('../assets/random_skeleton.gif'),
    'randomShark': require('../assets/random_shark.gif'),
    'randomSadDoggo': require('../assets/random_sad-dog.gif'),

    'gifJif01': require('../assets/gif-vs-jif_01.gif'),
    'gifJif02': require('../assets/gif-vs-jif_02.gif'),

    'steve': require('../assets/steve_wilhite.jpg'),

    'simple01': require('../assets/simple_01.gif'),
    'simple02': require('../assets/simple_02.gif'),

    'webGif_murca': require('../assets/webgif_01.gif'),
    'webGif_flames': require('../assets/webgif_02.gif'),
    'webGif_construction': require('../assets/webgif_03.gif'),
    'webGif_flaming_construction': require('../assets/webgif_04.gif'),
    'webGif_homepage': require('../assets/webgif_05.gif'),

};
//  Preload images
preloader(images);
//  Simple CSS reset
require('normalize.css');


export default class Presentation extends Component {
    render() {
        return (
            <Deck transition={['slide']} transitionDuration={500} theme={theme}>
                {
                    /*     SLIDE 1     */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        textAlign="left"
                    >
                        Lunch and Learn
                    </Heading>
                    <Heading
                        size={5}
                        fontStyle="italic"
                        textAlign="left"
                    >
                        Nov 22nd, 2017
                    </Heading>
                </Slide>
                {
                    /*     SLIDE 2     */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.emoji_ok.replace('/', '')}
                            width="100"
                            style={{
                                position: 'absolute',
                                top: '10%',
                                left: '10%',
                            }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_ok.replace('/', '')}
                            width="200"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                            }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_ok.replace('/', '')}
                            width="190"
                            style={{
                                position: 'absolute',
                                top: '10%',
                                left: '90%',
                            }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_ok.replace('/', '')}
                            width="235"
                            style={{
                                position: 'absolute',
                                top: '5%',
                                left: '45%',
                            }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_ok.replace('/', '')}
                            width="167"
                            style={{
                                position: 'absolute',
                                top: '67%',
                                left: '7%',
                            }}
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 3     */}
                {/* {MarkdownSlides`
                # Emojis: Part II: The Emojing
                `} */}
                {
                    /*     SLIDE 3     */}
                {MarkdownSlides`

# Getting Women To Smoke
### Part II: Up in smoke 🚬 👩

                `}
                {
                    /*     SLIDE 4     */}
                <Slide align="center">
                    <Appear>
                        <Heading size={1} fit>
                            GIFs
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomBrain.replace('/', '')}
                            style={{ position: 'absolute', top: '0%', left: '-15%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomSkeleton.replace('/', '')}
                            style={{ position: 'absolute', top: '29%', left: '29%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.carlton.replace('/', '')}
                            style={{ position: 'absolute', top: '17%', left: '74%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.datBoi.replace('/', '')}
                            style={{ position: 'absolute', top: '56%', left: '-1%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomShark.replace('/', '')}
                            style={{ position: 'absolute', top: '10%', left: '40%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomGoose.replace('/', '')}
                            style={{ position: 'absolute', top: '7%', left: '15%' }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomInternet.replace('/', '')}
                            style={{ position: 'absolute', top: '3%', left: '50%', transform: 'translateX(-50%)', }}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 5     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={3} margin="1rem">
                            Proper pronunciation
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.gifJif01.replace('/', '')}
                            margin="1rem auto"
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 6     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={3}>
                            Pronunciation: "Incorrect"
                        </Heading>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            The "proper" way to say it is "Jif", like the peanut butter
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            This is obviously wrong...
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            ...and if you say it this way your friends will make fun of you...
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                            >
                            ...and your doggo will be mad at you.
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.randomSadDoggo.replace('/', '')}
                            style={{ position: 'absolute', top: '3%', left: '50%', transform: 'translateX(-50%)', }}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 7     */}
                {MarkdownSlides`
                ## How to actually pronunce it
                `}
                {
                    /*     SLIDE 8     */}
                <Slide align="flex-start">
                    <Heading size={4}>
                        Pronunciation: "Correct"
                    </Heading>
                    <Appear>
                        <Text>
                            With a hard "G"
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.gifJif02.replace('/', '')}
                            margin="1rem auto"
                            width="60%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 9     */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.emoji_thinking.replace('/', '')}
                            margin="1rem auto"
                            width="100px"
                            style={{ display: 'inline-block', }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_thinking.replace('/', '')}
                            margin="1rem auto"
                            width="100px"
                            style={{ display: 'inline-block', }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.emoji_thinking.replace('/', '')}
                            margin="1rem auto"
                            width="100px"
                            style={{ display: 'inline-block', }}
                        />
                    </Appear>
                    <Appear>
                        <Heading size={4} margin="0 0 2rem">
                            What about the word "Gin" then?
                        </Heading>
                    </Appear>
                    <Appear>
                        <Heading size={4}>
                            It has a "soft G"!
                        </Heading>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 10     */}
                <Slide align="flex-start">
                    <Image
                        src={images.fakeNews.replace('/', '')}
                        margin="1rem auto"
                        width="100%"
                    />
                </Slide>
                {
                    /*     SLIDE 11     */}
                <Slide align="center center">
                    <Heading size={4} margin="0 auto 1rem">
                        Fun fact:
                    </Heading>
                    <Appear>
                        <Text margin="0 auto 1rem">
                            "Gin" is actually pronounced with a "hard G"
                        </Text>
                    </Appear>
                    <Appear>
                        <Text margin="0 auto 1rem">
                            Feel free to try this next time you're at the bar
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.gin.replace('/', '')}
                            margin="1rem auto"
                            width="500px"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 12     */}
                <Slide align="center center">
                    <Heading size={4} margin="0 0 2rem">
                        History of the Gif
                    </Heading>
                    <Appear>
                        <Image
                            src={images.history.replace('/', '')}
                            margin="1rem auto"
                            width="70%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 12     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={4}>
                            👨‍🎤 back in the 80s... 👩‍🎤
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem>
                                PC's were starting to get hot 🔥 🔥 🔥
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                the internet existed, it was still pretty sucky
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                lots of text, lots of manually typing in commands like some kind of chump
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                the world wide web that we ❤️ today did not come along until the early 90s
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 13     */}
                <Slide align="flex-start">
                    <Image
                        src={images.dos.replace('/', '')}
                        margin="1rem auto"
                        width="100%"
                    />
                </Slide>
                {
                    /*     SLIDE 14     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={4}>
                            Images + Computers
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem>
                                there were some significant advancements in computer graphics in the 80's...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...but it was hard to send these across the primative internet of the time
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                the prevailing image format at that time was .rle (run-length encoding)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                black and white only, which as we all know is boring and no fun
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 15     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={3}>
                            CompuServe
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem>
                                In the late 80's, online-service providers started to emerge
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                CompuServe, Quantum Link (later AoL), AppleLink
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                The pre-WWW way of connecting to people/info via the internet
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                "walled garden" with "apps" and games; mostly people chatted using instant messaging
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 16     */}
                <Slide align="flex-start">
                    <Image
                        src={images.compuserve.replace('/', '')}
                        width="100%"
                    />
                </Slide>
                {
                    /*     SLIDE 17     */}
                <Slide transition={['fade']} align="flex-start">
                    <Image
                        src={images.emoji_thinking.replace('/', '')}
                        margin="1rem auto"
                        width="100%"
                    />
                </Slide>
                {
                    /*     SLIDE 18     */}
                <Slide transition={['fade']} align="flex-start">
                    <Image
                        src={images.steve.replace('/', '')}
                        margin="1rem auto"
                        width="100%"
                        style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}
                    />
                </Slide>
                {
                    /*     SLIDE 19     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        Steve Wilhite
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                is kind of a goof because he pronounces it like "Jif"...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...which as we've already learned is grossly incorrect...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...and sounds dumb...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 20     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        Steve Wilhite
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                but he's also kind of a 🆒 guy...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ...because on June 15 1987, while working at CompuServe, he created the Gif
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                this new format made it possible to send colour images across the internet
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                later, GIFs also became capable of sending simple animations via time delays
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 20.2     */}
                <Slide align="flex-start">
                    <Heading size={5} fit>
                        and things went well for CompuServe for awhile...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.compuserve02.replace('/', '')}
                            margin="1rem auto"
                            width="100%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 21     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        ...until the mid-90's
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                psych!! turns out the compression technique had already been patented in 1985
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Unisys was the company that owned the patent, and boy were they pissed 😡 😤 👿
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                just kidding, they mostly just wanted to be essentially patent trolls, charging companies like CompuServe a licencing fee
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                this leads to the development of the .PNG image file format
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 22     */}
                {MarkdownSlides`
                ## ...but it was too late...
                `}
                {
                    /*     SLIDE 23     */}
                <Slide align="flex-start">
                    <Image
                        src={images['90s_web'].replace('/', '')}
                        width="600px"
                    />
                </Slide>
                {
                    /*     SLIDE 24     */}
                <Slide align="flex-start">
                    <Image
                        src={images['90s_modem'].replace('/', '')}
                        width="600px"
                    />
                </Slide>
                {
                    /*     SLIDE 25     */}
                <Slide align="flex-start">
                    <Heading size={4}>
                        GIFin' up the web 🏄‍♂️
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                By the mid to late 90s, the format had become ubiquitous on the World Wide Web
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                With the release of Netscape Navigator v2 in 1995, animated GIFs (and JavaScript) supported
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Because the web was a brand new medium, there were no established design rules
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                meaning that people felt free to use whatever spicyy gifs they could find...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 26     */}
                <Slide align="flex-start">
                    <Heading size={4}>
                        some of the spicier gifs that they found included:
                    </Heading>
                    <Appear>
                        <Image
                            src={images.webGif_murca.replace('/', '')}
                            style={{ position: 'absolute', top: '5%', left: '0%' }}
                            width="600px"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.webGif_homepage.replace('/', '')}
                            style={{ position: 'absolute', top: '51%', left: '20%' }}
                            width="600px"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.webGif_flames.replace('/', '')}
                            style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}
                            width="90%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.webGif_construction.replace('/', '')}
                            style={{ position: 'absolute', top: '25%', left: '30%' }}
                            width="600px"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.webGif_flaming_construction.replace('/', '')}
                            style={{ position: 'absolute', top: '5%', left: '5%' }}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 27     */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.geo_01.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.geo_02.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.geo_04.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.geo_05.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.geo_06.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.geo_03.replace('/', '')}
                            style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 28     */}
                {MarkdownSlides`
                ### Yo, quit it with the nostalgia, Dave...
                `}
                {
                    /*     SLIDE 29     */}
                {MarkdownSlides`
                ### ...so how do gifs work, anyway?
                `}
                {
                    /*     SLIDE 30     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={3}>
                            what is an image?
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem>
                                a representation of a visual 2D image in numbers, stored on a computer
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                generally made up of a finite number of "picture elements" (or "pixels" if you want to use the hacker lingo)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                each pixel on a screen is made up of a red, green and blue light
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {
                    /*     SLIDE 31     */}
                <Slide align="flex-start">
                    <Image
                        src={images.pixels.replace('/', '')}
                        width="100%"
                    />
                </Slide>
                {
                    /*     SLIDE 32     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        colours 🎨
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Each pixel has a value between 0 and 255 for each of the 3 RGB colours
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            How many colours are available in this RGB colour space?
                        </Text>
                    </Appear>
                    <Appear>
                        <Heading
                            margin="2rem"
                            textAlign="left"
                            size={4}
                        >
                            256 × 256 × 256
                        </Heading>
                    </Appear>
                    <Appear>
                        <Heading
                            margin="2rem"
                            textAlign="left"
                            size={4}
                        >
                            = 16,777,216
                        </Heading>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 33     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        colours 🎨
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            So when they were designing the Gif format, they decided "yeah that's too many"
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Gifs are limited to a palette of 256 colours, that's it, for the whole animation.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Modern Gif makers are capable of getting around this limitation, but not back then.
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 33.5     */}
                <Slide align="flex-start">
                    <Image
                        src={images.fail.replace('/', '')}
                        width="80%"
                    />
                </Slide>
                {
                    /*     SLIDE 34     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={5}>
                            checklist for sending colour animations over the internet, 1987 edition:
                        </Heading>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            ✅ Limit the number of colours
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 34.5     */}
                <Slide align="flex-start">
                    <Heading size={5}>
                        what is animation?
                    </Heading>
                    <Appear>
                        <Image
                            src={images.horseAnimation.replace('/', '')}
                            width="500px"
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 35     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        framerate 🖼️
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            This refers to the number of frames or images that are displayed in an animation sequence within a set amount of time
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Usually measured in Frames Per Second, commonly abbreviated "FPS"
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            The new standard for high-quality video seems to be 60fps, but around 24fps is pretty standard
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 36     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        framerate 🖼️
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Gifs back in the day were rarely above 10-15fps, to cut down on filesize.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            This is why some Gifs with fast motion will appear shakey/jumpy
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Again, modern technology makes it possible to push past this
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 37     */}
                <Slide align="flex-start">
                    <Heading size={5}>
                        checklist for sending colour animations over the internet, 1987 edition:
                    </Heading>
                    <Text
                        margin="2rem"
                        textAlign="left"
                    >
                        ✅ Limit the number of colours
                    </Text>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            ✅ Limit the framerate
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 38     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        compression 🐘
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Even in the 80s and 90s there were different ways of compressing video/animation
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Two common methods are what's known as "Interframe Compression" and "Intraframe Compression"
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 39     */}
                <Slide align="flex-start">
                    <Heading size={4}>
                        Interframe Compression 🐘
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Widely used by video formats today (such as .mp4 and on DVDs)
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Works by only storing the first of (lets say) 24 frames (called a "keyframe")
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Then, calculations are done to figure out what changed in between those frames and "fakes" the frames between
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Saves a bunch of space because you're not storing every frame
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 40ish     */}
                <Slide align="flex-start">
                    <Heading size={4}>
                        Intraframe Compression 🐘
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Unlike Interframe Compression, intraframe stores each frame
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Much easier for browsers to just show one frame after another
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            This is what the Gif format mainly uses
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 40ish     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        Space vs Time ⏰
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Common problem in Computer Science
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Storing each frame = big file size
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Storing each frame = the client (browser) doesn't have to do any work decoding and playing it
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 40ish     */}
                <Slide align="flex-start">
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Gif was designed for SIMPLE animations
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.simple01.replace('/', '')}
                            width="500px"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </Appear>
                    <Appear>
                        <Image
                            src={images.simple02.replace('/', '')}
                            width="600px"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 41ish     */}
                <Slide align="flex-start">
                    <Heading size={5}>
                        checklist for sending colour animations over the internet, 1987 edition:
                    </Heading>
                    <Text
                        margin="2rem"
                        textAlign="left"
                    >
                        ✅ Limit the number of colours
                    </Text>
                    <Text
                        margin="2rem"
                        textAlign="left"
                    >
                        ✅ Limit the framerate
                    </Text>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            ✅ Intraframe compression
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 41ish     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        Fun fact:
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            The way that GIFs infinitly loop is not part of the GIF specification at all
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            This is an implementation detail by the client (browser), and was originally done in Netscape Navigator
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            It's become so ubiquitous that most apps/browsers/etc. just display them as infinitly looping by default
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 42ish     */}
                {MarkdownSlides`
                ## Cultural Impact
                `}
                {
                    /*     SLIDE 43ish     */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading size={3}>
                            GIFs everywhere 🌎
                        </Heading>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            The mid-2000s saw the rise of "Web2.0", where website design was drastically cleaned up
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Compare MySpace vs Facebook:
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            MySpace: "Bring yr sweet GIFs, and make sure you background-repeat that shit"
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Facebook: "No user-driven design, everyone's profile looks the same"
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 43ish     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        GIFs everywhere 🌎
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Pushing the format forward, modern Gif makers make it possible to create higher quality GIFs
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            They've found a home on personal blogs (especially on sites like Tumblr)
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Now GIFs are being integrated into communications technologies such as Slack and iMessage
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 44ish     */}
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.blownAway.replace('/', '')}
                            width="600px"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 43ish     */}
                <Slide align="flex-start">
                    <Heading size={3}>
                        GIF economy 💸
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            GIFs have actually been big business since the 90s
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Companies (like Animation Factory) would produce clipart-y GIFs and then charge a subscription fee
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="2rem"
                            textAlign="left"
                        >
                            Giphy currently has over 200m daily users, and is currently valued at ~$600 billion
                        </Text>
                    </Appear>
                </Slide>
                {
                    /*     SLIDE 43ish     */}
                <Slide align="flex-start">
                    <Image
                        src={images.mindBlown.replace('/', '')}
                        width="700px"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </Slide>
                {
                    /*     FINALE     */}
                <Slide align="flex-start">
                    <Heading size={3} fit>
                        Thanks for listening 👌
                    </Heading>
                    <Appear>
                        <Text
                            margin="2rem"
                        >
                            Hope you had fun, I hope it was...
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.larryDavid.replace('/', '')}
                            width="600px"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
