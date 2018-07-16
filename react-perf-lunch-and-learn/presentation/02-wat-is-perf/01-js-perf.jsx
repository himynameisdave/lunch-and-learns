import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


const WatPerfSlideOne = () => {
    return (
        <Slide key="01-js-perf" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-01__heading"
                margin="40px 0 60px 0"
            >
                JavaScript Performance
            </Heading>
            <List className="wat-perf__list wat-perf__slide-01__list">
                <Appear fid={1}>
                    <ListItem>
                        It's all about reducing computation time
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        This refers to the time it takes for the JS engine to parse and execute our code
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        Decisions we make about the way that we write/structure our code JS will effect the execution step
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        JS has a single-threaded event loop
                    </ListItem>
                </Appear>
                <Appear fid={5}>
                    <ListItem>
                        Our goal is to free up the main thread as much as possible so that it is able to respond faster to new events (ie: user input)
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default WatPerfSlideOne;
