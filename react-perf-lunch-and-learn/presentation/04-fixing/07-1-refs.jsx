import React from 'react';
import { Appear, Heading, CodePane, List, ListItem, Slide } from 'spectacle';


const FixingSlideSeven = () => {
    return (
        <Slide key="07-1-refs" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x1f937; When references to props change, components update
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Components (even if they are stateless) will still needlessly be updated if references to their props change
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            This means that even if props are equal values, React will still have to reconcile if a new reference was created
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Even though there are no visual changes in the DOM, React is still needlessly running though each component's update cycle
                        </span>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default FixingSlideSeven;
