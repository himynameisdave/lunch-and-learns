import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


const WatPerfSlideEight = () => {
    return (
        <Slide key="08-dom-is-slow" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-08__heading"
                margin="40px 0 60px 0"
            >
                The DOM is slow
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        the point of Virtual DOM is that we can easily diff
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        we save time on not reading/checking every DOM node in the tree when doing a diff
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        React's will intellegently batch DOM updates, on only the nodes that are changed
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        this makes writes to the DOM efficent as well
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};


export default WatPerfSlideEight;
