// Import React
import React from 'react';
import { Deck } from 'spectacle';
// TODO: fix this later....:
import images from './images/'; // eslint-disable-line no-unused-vars
import theme from './theme/';
import IntroSlides from './01-intro/';
import WatPerfSlides from './02-wat-is-perf/';
import DebuggingSlides from './03-debugging/';
import FixingSlides from './04-fixing/';
// Require Base CSS
require(`normalize.css`);
// require(`spectacle/lib/themes/default/index.css`);


export default class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [
            ...IntroSlides,
            ...WatPerfSlides,
            ...DebuggingSlides,
            ...FixingSlides,
        ]
        .map(slide => slide()); //  "mount" each slide from each section
    }

    render() {
        return (
            <Deck transition={[`zoom`]} transitionDuration={375} theme={theme}>
                {this.slides}
            </Deck>
        );
    }
}


//   BlockQuote,
//   Cite,
//   Code,
//   Image,
//   Heading,
//   ListItem,
//   List,
//   Quote,
//   Slide,
//   Text

// <Slide transition={[`zoom`]} bgColor="background">
//     <img src={images.introBg} />
// </Slide>
// <Slide transition={[`fade`]} bgColor="tertiary">
//     <Heading size={6} textColor="primary" caps>Typography</Heading>
//     <Heading size={1} textColor="secondary">Heading 1</Heading>
//     <Heading size={2} textColor="secondary">Heading 2</Heading>
//     <Heading size={3} textColor="secondary">Heading 3</Heading>
//     <Heading size={4} textColor="secondary">Heading 4</Heading>
//     <Heading size={5} textColor="secondary">Heading 5</Heading>
//     <Text size={6} textColor="secondary">Standard text</Text>
// </Slide>
// <Slide transition={[`fade`]} bgColor="primary" textColor="tertiary">
//     <Heading size={6} textColor="secondary" caps>Standard List</Heading>
//     <List>
//         <ListItem>Item 1</ListItem>
//         <ListItem>Item 2</ListItem>
//         <ListItem>Item 3</ListItem>
//         <ListItem>Item 4</ListItem>
//     </List>
// </Slide>
// <Slide transition={[`fade`]} bgColor="secondary" textColor="primary">
//     <BlockQuote>
//         <Quote>Example Quote</Quote>
//         <Cite>Author</Cite>
//     </BlockQuote>
// </Slide>
// <Slide>
//     <Code>
// never
// everything
//
//
// ever
//     </Code>
// </Slide>
