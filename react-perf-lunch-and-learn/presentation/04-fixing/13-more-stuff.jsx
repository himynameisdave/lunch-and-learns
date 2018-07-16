import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


const FixingSlideThirteen = () => {
    return (
        <Slide key="13-more-stuff" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                Stuff I didn't have time to talk about
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            The "windowing" effect; only render what is visible in the viewport &#x1f440;
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Memoization of functions for better speed &#x1f4dd;
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Immutable data structures; refs never change, deep equality is cheap &#x1f64a;
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            React 16/React "Fiber" &#x2728;
                        </span>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default FixingSlideThirteen;
