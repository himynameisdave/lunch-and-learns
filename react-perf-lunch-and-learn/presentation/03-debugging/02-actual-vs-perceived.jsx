import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';

const DebuggingSlideTwo = () => {
    return (
        <Slide key="02-actual-vs-perceived" bgColor="background" align="center flex-start">
            <Heading
                size={5}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-01__heading"
                margin="40px 0 60px 0"
            >
                Actual vs Perceived Performance
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        "If it 'aint broke..."
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        Saving a few ms here and there may not make a huge difference
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        Sooner or later, if rendering complex trees without any optimizations, you might hit performance issues with React
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        Usually when user interactions, such as clicking dropdown lists or entering text into inputs, become noticably laggy or slow (on your powerful development machine), the user is gonna have a bad time &#x1f44e;
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default DebuggingSlideTwo;
