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
    dancingHwatDwag: require('../assets/001-hot-dwag.gif'),
    // greatOutdoors: require('../assets/002-great-outdoors-lips-assholes.mp4'),
    hotDogDefinition01: require('../assets/003-hot-dog-definition-01.png'),
    hotDogDefinition02: require('../assets/004-hot-dog-definition-02.png'),

    sandwichDefinition01: require('../assets/005-sandwich-definition-01.png'),
    sandwichDefinition02: require('../assets/006-sandwich-definition-02.png'),
    sandwichDefinition03: require('../assets/007-sandwich-definition-03.png'),

    // hotDogHowItsMade: require('../assets/008-how-its-made.gif'),
    nhdsc: require('../assets/009-nhdsc.png'),
    nasa: require('../assets/010-nasa.jpg'),
    nycTaxation: require('../assets/010-nyc-taxation.png'),
    websterTweet: require('../assets/010-webster-tweet.png'),

    ripJohnCandy: require('../assets/009-rip-john-candy.gif'),

    tinaUhh: require('../assets/010-tina-uhhhh.gif'),

    subSandwich: require('../assets/011-submarine-sandwich.gif'),
    openFaced01: require('../assets/011-open-faced-sandwich-01.jpg'),
    openFaced02: require('../assets/012-open-faced-sandwich-02.jpg'),
    weiners: require('../assets/013-weiners.gif'),
    oreos: require('../assets/014-oreos.gif'),
    atlantic: require('../assets/015-atlantic-oreos.png'),
    chiliCheeseDogs: require('../assets/016-chili-cheese-dogs.gif'),

    scooby: require('../assets/017-scooby-hot-dogs.gif'),
    sandwichGrid: require('../assets/018-grid.jpg'),
    whatsThePoint: require('../assets/100-whats-the-point.gif'),
    dogWearPants01: require('../assets/101-dog-wear-pants.jpg'),
    dogWearPants02: require('../assets/102-dog-wear-pants.jpg'),
    flatEarth: require('../assets/103-flat-earth.jpg'),
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
                        margin="0 0 1rem"
                        textAlign="left"
                    >
                        <Appear>
                            <Text style={{ fontStyle: 'italic' }}>The dumbest</Text>
                        </Appear> Lunch and learn <Appear>
                            <Text style={{ fontStyle: 'italic' }}>ever made.</Text>
                        </Appear>
                    </Heading>
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        July 18th/2018
                    </Heading>
                </Slide>
                {/* Slide 2 */}
                <Slide align="flex-start">
                    <Appear>
                        <Heading
                            size={5}
                            textAlign="left"
                        >
                            I wasn't sure what to talk about for my Lunch and Learn
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                6️⃣ Could have talked about me/my background <Appear><span>- too boring</span></Appear>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                💀 Was going to talk about death, and how science is trying to cheat it <Appear><span>- too dark</span></Appear>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🍹 Was going to talk about cocktails/mixology/my favourite summer drinks <Appear><span>- too drunk</span></Appear>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🦈 Was going to talk about Jaws, which is my favourite summertime movie <Appear><span>- too shark</span></Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 3 */}
                <Slide align="center center">
                    <Heading
                        size={2}
                        margin="0 0 2rem"
                    >
                        ...BUT INSTEAD...
                    </Heading>
                    <Appear>
                        <Text margin="0 0 6rem">
                            🤔 I thought to myself "what burning question about the state of the universe do I want answered, that could only be answered with the time and effort it takes to research a Lunch and learn presentation?"
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide align="center center">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        ...and the question (of course), is...
                    </Heading>
                    <Appear>
                        <Text
                            margin="0 0 10rem"
                            style={{ fontSize: "2.5em" }}
                        >
                            ...is a hot dog considered a sandwich?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.dancingHwatDwag.replace('/', '')}
                            style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}
                            width="75%"
                        />
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: "1.5em", position: 'absolute', bottom: '17%', left: '50%', transform: 'translateX(-50%)' }}
                        >
                            That's right friends, strap in... because over the next 30+ mins, you better believe we are going to get to the bottom of this!
                        </Text>
                    </Appear>
                </Slide>
                {/* SLIDE X */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        This is an important question for me...
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Great first-date question
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Makes an interesting interview question
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Very polarizing, which is why I love digging into this so much
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Like right now you probably already think you know the correct answer
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide align="center center">
                    <Heading
                        size={1}
                        margin="0 0 2rem"
                    >
                        ...SO...
                    </Heading>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        margin="0 0 2rem"
                    >
                        🌭 == 🥪?
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Let's come up with a plan in order get some kind of definitive answer:
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Define what a hot dog is.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Define what a sandwich is.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Compare/contrast these definitions.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                See what the professional and experts say.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Easy, right? <Appear><span>Nope nope nope.</span></Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 7 */}
                <Slide align="center center">
                    <Heading
                        size={3}
                        margin="0 0 6rem"
                    >
                        🌭 What is a hot dog...?
                    </Heading>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-25%', left: '-5%' }}
                        >
                            Sausage/meat-in-casing, wrapped in a bun
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-10%', left: '75%' }}
                        >
                            Usually served with condiments, like ketchup and mustard
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '60%', left: '2.5%' }}
                        >
                            Great at BBQs
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '0', left: '12%' }}
                        >
                            Kids love them
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '60%', left: '55%' }}
                        >
                            Has crazy condiments as well, like onions, relish, and sauerkraut
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '5%', left: '47%' }}
                        >
                            Long horizontal shape
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '82%', left: '18%' }}
                        >
                            Bun is sliced lengthwise, but not all the way through
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        🤓 Let's see what the Oxford nerds say...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.hotDogDefinition01.replace('/', '')}
                        />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        🤓 Let's see what the wiki nerds say...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.hotDogDefinition02.replace('/', '')}
                            width="75%"
                        />
                    </Appear>
                </Slide>
{/*  OPTIONAL GREAT OUTDOORS JOKE
                {/* Slide 9 */}
                {/* <Slide align="center center">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        No one really knows what's in a hot dog
                    </Heading>
                    <Appear>
                        <Image
                            src={images.hotDogHowItsMade.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                {/* Slide like 8 or 9 */}
                {/* <Slide align="flex-start">
                    <Heading
                        size={3}
                        margin="0 0 2rem"
                    >
                        🌭 What is a hot dog....?
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Must be some form of long sausage as the primary component.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Can be made of any kind of meat, including veggie components, and still be considered a "hot dog"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Must be wrapped in a bun, which is about as long as the sausage.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Buns generally come with the two pieces connected, but they can fall apart
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Almost always has condiments on it, such as ketchup and mustard (but does not require them to be called a "hot dog")
                            </ListItem>
                        </Appear>
                    </List>
                </Slide> */}
                {/* Slide like 8 or 9 */}
                <Slide align="center center">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        ...so now that we've got a good idea of what a hot dog is...
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            margin="0 0 8rem"
                        >
                            ...let's talk about sammies...
                        </Heading>
                    </Appear>
                </Slide>

                {/* Slide whatever we're onto sammies now */}
                <Slide align="center center">
                    <Heading
                        size={3}
                        margin="0 0 6rem"
                    >
                        🥪 What is a sandwich...?
                    </Heading>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-25%', left: '-5%' }}
                        >
                            A good lunch
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-30%', left: '77%' }}
                        >
                            Meat and bread
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '60%', left: '2.5%' }}
                        >
                            Some kind of food wrapped in bread
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '60%', left: '55%' }}
                        >
                            Don't "need" to have meat, but they need some kind primary component
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-12%', left: '55%' }}
                        >
                            Fairly portable, unless they are messy like a spicy meatball sandwich
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '82%', left: '18%' }}
                        >
                            Can be made with all different kinds of breads
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            style={{ fontSize: '1.25rem', position: 'absolute', top: '-4%', left: '1%' }}
                        >
                            I bet Tony could probably whip up a good sandwich...
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        🤓 Let's see what the Oxford nerds say...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.sandwichDefinition01.replace('/', '')}
                            width="75%"
                        />
                    </Appear>
                    {/* <Appear>
                        <Image
                            src={images.sandwichDefinition02.replace('/', '')}
                            width="75%"
                        />
                    </Appear> */}
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        🤓 Let's see what the wiki nerds say...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.sandwichDefinition03.replace('/', '')}
                            width="75%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="center center">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        ...so now that we've got a good idea of what a sandwich is...
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            margin="0 0 8rem"
                        >
                            ...do people think hot dogs are sandwiches?
                        </Heading>
                    </Appear>
                </Slide>
                {/* POPULAR OPINIONS */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        margin="0 0 1.5rem"
                    >
                        🌭 == 🥪?
                    </Heading>
                    <Appear>
                        <Text margin="0 0 1.5rem" style={{ fontSize: '2rem' }}>
                            Structure vs ingredients:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            margin="0 auto 2rem"
                            src={images.sandwichGrid.replace('/', '')}
                            width="70%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🥪 Pro-sandwich argument
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Hot dogs obviously fall into the most basic "stuff between two things of bread" definition of a sandwich.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                A hot dog bun is a kind of bread, sliced lengthwise most of the way through.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Burgers (another BBQ favourite) would also be sandwiches by this definition.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Oh yeah I guess so are wraps/pitas/donairs, aren't they...
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Wait so are burritos sandwiches too? <Appear><span>And tacos...?</span></Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 9 */}
                <Slide align="center center">
                    <Image
                        src={images.tinaUhh.replace('/', '')}
                        width="100%"
                    />
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🌭 Pro-hot dog argument
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                "Duuuuuude, a hot dog, is like, soooo much more than a sandwich maaan!"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Due to their "odd horizontal shape", hot dogs are not sandwiches.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Traditionally, sandwiches use two separate slices of bread. Hot dogs use only one, so they are not a sandwich.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                In most restaraunts, are hot dogs listed under the Sandwiches section of the menu? I think not!
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🌭 Pro-hot dog: expert opinions
                    </Heading>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            National Hot Dog and Sausage Council (a subsidiary of the American Meat Institute):
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.nhdsc.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>

                <Slide align="center center">
                    <Heading
                        size={4}
                        margin="0 0 10rem"
                    >
                        (that's basically the only "expert" opinion I could find that was pro-hot dog)
                    </Heading>
                </Slide>

                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🥪 Pro-sandwich: expert opinions
                    </Heading>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            A NASA transcript from the 1970 Apollo 13 mission clearly shows hot dogs being referred to as sandwiches.
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.nasa.replace('/', '')}
                            width="75%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🥪 Pro-sandwich: expert opinions
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            US Supreme Court Justice Ruth Bader Ginsburg
                        </Text>
                    </Appear>
                    <Appear>
                        <iframe
                            allowfullscreen
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/0oBodJHX1Vg?rel=0&amp;showinfo=0&amp;start=153"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🥪 Pro-sandwich: expert opinions
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            New York State's Department of Taxation and Finance
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.nycTaxation.replace('/', '')}
                            width="70%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        🥪 Pro-sandwich: expert opinions
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            @MerriamWebster, earlier today:
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.websterTweet.replace('/', '')}
                            width="60%"
                        />
                    </Appear>
                </Slide>

                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            Is a submarine sandwich actually a sandwich?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.subSandwich.replace('/', '')}
                            margin="0 auto 2rem"
                            width="75%"
                        />
                    </Appear>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            Yes, it is.
                        </Text>
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Appear>
                        <Text margin="0 auto 2rem" style={{ fontSize: '2rem' }}>
                            Is an open-faced sandwich a real sandwich?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.openFaced01.replace('/', '')}
                            margin="0 auto 2rem"
                            width="50%"
                        />
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Because of it's single-layer of bread, I wholeheartedly believe that open-faced sandwiches do not count as sandwiches.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            Even if they are adorable...
                        </Text>
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Image
                        src={images.openFaced02.replace('/', '')}
                        width="500px"
                    />
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Is a hot dog without a bun still a hot dog?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.weiners.replace('/', '')}
                            margin="0 auto 2rem"
                            width="700px"
                        />
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            No, it's just a wiener?
                        </Text>
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Wait though, is it still a hot dog?
                        </Text>
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Is an Oreo a sandwich?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.oreos.replace('/', '')}
                            margin="0 auto 2rem"
                            width="700px"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                        Is an Oreo a sandwich?
                    </Text>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Some folks, like the dingbats over at The Atlantic, consider Oreos sandwiches (but not hot dogs for some reason?)
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.atlantic.replace('/', '')}
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Edge cases
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Is a chili cheese dog a sandwich?
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            margin="0 auto 2rem"
                            src={images.chiliCheeseDogs.replace('/', '')}
                            width="70%"
                        />
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            If a hot dog is considered a sandwich, then yes it is.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text style={{ fontSize: '2rem' }}>
                            If a hot dog is considered it's own thing, then presumably chili cheese dogs are just a variant?
                        </Text>
                    </Appear>
                </Slide>
                <Slide align="center center">
                    <Heading
                        size={1}
                        margin="0 0 2rem"
                    >
                        ...SO...
                    </Heading>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={2}
                        margin="0 0 2rem"
                    >
                        🌭 == 🥪?
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" style={{ fontSize: '2rem' }}>
                            Despite great arguments on both sides, (but mostly from the pro-sandwich side) I think the sandwich umbrella is large enough to include hot dogs.
                        </Text>
                    </Appear>
                    <Appear>
                        <Image
                            margin="0 auto 2rem"
                            src={images.scooby.replace('/', '')}
                            width="70%"
                        />
                    </Appear>
                </Slide>







{/*

    CONCLUSION AREA
    CONCLUSIONS ONLY PAST THIS POINT PLEASE

*/}

                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 4rem"
                    >
                        At this point you might be thinking...
                    </Heading>
                    <Appear>
                        <Image
                            src={images.whatsThePoint.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        margin="0 0 2rem"
                    >
                        Why I really did this lunch and learn
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                To show how our biases and life perspectives change how we think about problems.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                No matter how sure you are of something, there is always someone who will disagree with you.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Labels are stupid, and wildly unhelpful.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Be open to new ways of thinking and allow your ideas to be challenged.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Always start with the assumption that you are wrong, then work from there.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                Facts don't actually matter to some people<Appear><span>, and that's okay.</span></Appear>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.dogWearPants01.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Image
                        src={images.dogWearPants02.replace('/', '')}
                        width="100%"
                    />
                </Slide>
                <Slide align="flex-start">
                    <Appear>
                        <Image
                            src={images.flatEarth.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        Final question: what are hot dogs even made of?
                    </Heading>
                    <Appear>
                        <video width="80%" controls>
                            <source src="https://s3.amazonaws.com/dlunny-testing/002-great-outdoors-lips-assholes.mp4" type="video/mp4" />
                        </video>
                    </Appear>
                </Slide>
                {/* Slide like 8 or 9 */}
                <Slide align="center center" height="100vh" width="100vw">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        🙏 RIP John Candy
                    </Heading>
                    <Image
                        src={images.ripJohnCandy.replace('/', '')}
                        width="100%"
                    />
                </Slide>
                {/* Slide like 8 or 9 */}
                <Slide align="center center">
                    <Heading
                        size={5}
                        margin="0 0 2rem"
                    >
                        👋 That's all, thanks for listening!
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
