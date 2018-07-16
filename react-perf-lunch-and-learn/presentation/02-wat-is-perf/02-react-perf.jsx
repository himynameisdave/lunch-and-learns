import React from 'react';
import { Appear, Code, Heading, List, ListItem, Slide } from 'spectacle';


const WatPerfSlideTwo = () => {
    return (
        <Slide key="02-react-perf" transition={[`spin`]} bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-02__heading"
                margin="40px 0 60px 0"
            >
                React Performance
            </Heading>
            <List className="wat-perf__list wat-perf__slide-02__list">
                <Appear fid={1}>
                    <ListItem>
                        Make sure that you're using the production build of React
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        Strip <Code bgColor="grey10" textColor="slate" fontSize="1rem">propTypes</Code> declarations in production
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        Use techniques like code-splitting to cut down on the time to load and parse the JS bundle
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        Use immutable data structures to express state <Appear fid={4}><span>(more on this later...)</span></Appear>
                    </ListItem>
                </Appear>
                <Appear fid={5}>
                    <ListItem>
                        Optimize performance by minimizing unneeded updates and re-renders
                    </ListItem>
                </Appear>
                <Appear fid={6}>
                    <div>
                        <div className="wat-perf__slide-02__list__curtains" />
                    </div>
                </Appear>
            </List>
        </Slide>
    );
};

export default WatPerfSlideTwo;
