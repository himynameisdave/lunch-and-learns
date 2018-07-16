import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


const WatPerfSlideTen = () => {
    return (
        <Slide key="09-renderer-is-fast" transition={[`spin`]} bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-09__heading"
                margin="40px 0 60px 0"
            >
                Why can React be slow?
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        anytime a prop or state changes, a component will reconcile and start it's update lifecycle
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        this can be slow if we are dealing with a large tree of nested components
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        even if a component isn't re-rendering content to the DOM, it's still slow because it takes time to diff the props and state then run through the lifecycle hooks
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        even if props have the same value, updates can be accidentally triggered if references to props change <Appear fid={5}><span>(more on this later...)</span></Appear>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};


export default WatPerfSlideTen;
