import React from 'react';
import { Heading, Slide, Appear, List, ListItem } from 'spectacle';
// import YThoReasons from '../components/y-tho-reasons.jsx';
import images from '../images/';


const IntroSlideSix = () => {
    return (
        <Slide
            key="06-why-to-level-up"
            transition={[`zoom`]}
            align="center flex-start"
            bgImage={images.yThoEyes}
            bgDarken={0.5}
        >
            <Heading
                size={4}
                textColor="textColor"
                className="intro__slide-06__heading"
            >
                Why should we level up?
            </Heading>
            <List className="intro__slide-06__list">
                <Appear fid={1} transitionDuration={350}>
                    <ListItem>
                        We use React everyday on the front-end
                    </ListItem>
                </Appear>
                <Appear fid={2} transitionDuration={350}>
                    <ListItem>
                        A larger chunk of our app now uses React, only getting larger
                    </ListItem>
                </Appear>
                <Appear fid={3} transitionDuration={350}>
                    <ListItem>
                        Will be in our codebase for years to come <Appear fid={4}><span>(probably)</span></Appear>
                    </ListItem>
                </Appear>
                <Appear fid={5} transitionDuration={350}>
                    <ListItem>
                        it will save us time debugging issues as we scale the app
                    </ListItem>
                </Appear>
                <Appear fid={6} transitionDuration={350}>
                    <ListItem>
                        we can stay up-to-date on best practices and API changes
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default IntroSlideSix;
