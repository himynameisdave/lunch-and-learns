import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';

const FixingSlideFive = () => {
    return (
        <Slide key="01-giant-grandparents" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x2705; Stateless components (continued)
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        No state means we only have props changes to worry about
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        Also a lot cleaner/simpler to write and test
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        But beware! Mounting a statless component will still cause React to interperate it as it's own class component
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        This means it will get it's own lifecycle hooks that will be caused each update
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default FixingSlideFive;
