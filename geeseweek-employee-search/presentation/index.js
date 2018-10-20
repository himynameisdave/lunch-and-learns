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
    components: require('../assets/001-components.gif'),
    mvc: require('../assets/002-mvc.png'),
    pickerExample: require('../assets/003-picker-example.gif'),
    pickerProps: require('../assets/004-picker-props.png'),
    tooManyProps: require('../assets/005-too-many-props.jpg'),
    pickerComplaints: [
        require('../assets/007-picker-complaint-02.png'),
        require('../assets/008-picker-complaint-03.png'),
        require('../assets/009-picker-complaint-04.png'),
        require('../assets/010-picker-complaint-05.png'),
        require('../assets/013-picker-complaint-08.png'),
        require('../assets/011-picker-complaint-06.png'),
        require('../assets/012-picker-complaint-07.png'),
        require('../assets/006-picker-complaint-01.png'),
    ],
    composition: require('../assets/014-component-composition.jpg'),
    employeeSearch: require('../assets/015-employee-search.gif'),
};
//  Preload images
preloader(images);
//  Simple CSS reset
require('normalize.css');

const choices = [20, 30, 40, 50, 60, 70, 80, 90];
const getRandomPositionValue = () => choices[Math.floor(Math.random() * choices.length)];

export default class Presentation extends Component { // eslint-disable-line
    render() {
        return (
            <Deck theme={theme} transition={['slide']} transitionDuration={500}>
                {/* Slide 1 */}
                <Slide align="flex-start">
                    <Heading
                        margin="8rem 0 0"
                        size={4}
                        textAlign="left"
                    >
                        Geese Week - Q4 2018
                    </Heading>
                </Slide>
                {/* Slide 2 */}
                <Slide align="center center">
                    <Text>The framework which we use on the front-end...</Text>
                    <Appear>
                        <Heading
                            margin="0 0 6rem"
                            size={2}
                            textAlign="center"
                        >
                            REACT!
                        </Heading>
                    </Appear>
                </Slide>
                {/* Slide 3 */}
                <Slide align="flex-start">
                    <Heading
                        size={2}
                        textAlign="center"
                    >
                        REACT!
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                framework for building user interfaces
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                meant to serve as the view layer
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ie: "how stuff looks"
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        size={2}
                        textAlign="center"
                    >
                        COMPONENTS
                    </Heading>
                    <Appear>
                        <Image
                            src={images.components}
                            width="80%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="center"
                    >
                        Problem: render logic vs business logic
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                render logic: "how stuff looks"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                business logic: "how stuff works"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                At 7Geese, we've often mix these to try to build things faster.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                This leads to bloated components which try to accomplish too much, and are hard to understand.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Makes it tremendously difficult to reuse components.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="center"
                    >
                        {'<Picker />'}
                    </Heading>
                    <Appear>
                        <Image src={images.pickerExample} width="100%" />
                    </Appear>
                </Slide>
                {/* Slide 7 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="center"
                    >
                        {'<Picker />'} is by far the worst offender...
                    </Heading>
                    <Appear>
                        <Image src={images.pickerProps} width="100%" />
                    </Appear>
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Appear>
                        <Image src={images.tooManyProps} width="100%" />
                    </Appear>
                </Slide>
                {/* Slide 9 */}
                <Slide align="center center">
                    <Heading
                        margin="0 0 4rem"
                        size={5}
                        textAlign="center"
                    >
                        🙅‍♀️ No love for {'<Picker />'}
                    </Heading>
                    {images.pickerComplaints.map((complaintImage, index) => (
                        <Appear>
                            <Image
                                key={index}
                                src={complaintImage}
                                style={{
                                    position: 'absolute',
                                    left: `${getRandomPositionValue()}%`,
                                    top: `${getRandomPositionValue() - 15}%`,
                                    transform: `translate(-50%, -50%) scale(1.5)`,
                                }}
                            />
                        </Appear>
                    ))}
                </Slide>
                {/* Slide 9.5 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 4rem"
                        size={5}
                        textAlign="center"
                    >
                        react-select
                    </Heading>
                    <Appear>
                        <Text margin="0 0 2rem" textAlign="left">
                            Under the hood, Picker is using a 3rd party library called react-select.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" textAlign="left">
                            It makes A LOT of assumptions about how you want to render.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text margin="0 0 2rem" textAlign="left">
                            We have had to write A LOT of CSS/JS to override it's default behaviour and styling.
                        </Text>
                    </Appear>
                </Slide>
                {/* Slide 10 */}
                <Slide align="flex-start">
                    <Heading
                        size={5}
                        textAlign="center"
                    >
                        Things that {'<Picker />'} is responsible for:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                rendering the input {'+'} dropdown {'+'} selected items (ie: how it looks/where they are positioned)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                fetching users/departments/locations/smart groups from the backend
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                keeping track of what the user has typed, what items are selected, and what items appear in the dropdown
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                handling adding/removing/deleting items from the list
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                etc., etc., etc...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 4rem"
                        size={5}
                        textAlign="center"
                    >
                        SEPARATE 👏 YOUR 👏 CONCERNS 👏
                    </Heading>
                    <Appear>
                        <Text>
                            We should to separate these concerns into their own components.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text>
                            This is commonly referred to as...
                        </Text>
                    </Appear>
                    <Appear>
                        <Image src={images.composition} />
                    </Appear>
                </Slide>
                {/* Slide 12 */}
                <Slide align="flex-start">
                    <Heading
                        size={4}
                        textAlign="center"
                    >
                        {'Enter... '}
                        <Appear>
                            <span>
                                {'<EmployeeSearch />'}
                            </span>
                        </Appear>
                    </Heading>
                    <Appear>
                        <Text
                            style={{ fontSize: '2rem' }}
                            textAlign="center"
                        >
                            (patent pending, open to better name suggestions)
                        </Text>
                    </Appear>
                    <Appear>
                        <Image src={images.employeeSearch} width="100%" />
                    </Appear>
                </Slide>
                {/* Slide 13 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="center"
                    >
                        {'<EmployeeSearch />'} - The Vision
                    </Heading>
                    <Appear>
                        <Text
                            margin="0 0 2rem"
                            style={{ fontSize: '2rem' }}
                            textAlign="center"
                        >
                            My vision for this geese week was to build a replacement component which...
                        </Text>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                🖖 Separate presentational components from container components.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                💎 Separate each distinct chunk of logic into it's own component (which can then be composed together).
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                🎰 Don't rely on a 3rd party library which control rendering (instead let us control all rendering logic).
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                🚀 Create a seperate, standardized component for making GraphQL queries.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                👥 Make it easier for developers to build similar components which are also backed by the same data source
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '1.5rem' }}>
                                👁 Make it more accessible for users who are visually impared
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 14 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={4}
                        textAlign="center"
                    >
                        {'<EmployeeSearch />'} - Learning
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🏎️ Got to use the Downshift library, a render-props library open-sourced by PayPal.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🏘️ Learned how to use compound components to help organize "sub components" and make a large component more composable.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🚀 Learned about the react-apollo library, and handling data fetching in React components.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🧠 Learned a lot of other small-but-dope patterns and concepts, which I plan on compiling into a Dev L&amp;L.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 15 */}
                <Slide align="flex-start">
                    <Heading
                        margin="0 0 2rem"
                        size={5}
                        textAlign="center"
                    >
                        {'<EmployeeSearch />'} - Will it Ship?
                    </Heading>
                    <Appear>
                        <Text
                            margin="0 0 2rem"
                            style={{ fontSize: '2rem' }}
                            textAlign="center"
                        >
                            Short answer: hell yes!
                        </Text>
                    </Appear>
                    <Appear>
                        <Text
                            margin="0 0 2rem"
                            style={{ fontSize: '2rem' }}
                            textAlign="left"
                        >
                            Remaining tasks:
                        </Text>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🔬 Write unit tests.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                📖 Write documentation about using it.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                🏓 Finalize component API, with input from other devs.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem style={{ fontSize: '2rem' }}>
                                👀 Look for areas to improve performance/flexibility.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
