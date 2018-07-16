import React from 'react';
import { Appear, Heading, Code, List, ListItem, Slide } from 'spectacle';

const DebuggingSlideFour = () => {
    return (
        <Slide key="04-how-to-debug" bgColor="background" align="center flex-start">
            <Heading
                size={6}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-01__heading"
                margin="40px 0 60px 0"
            >
                What tools do we have to debug perf?
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        Good ol' <Code className="debugging__code">console.time</Code>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        Debug with <Code className="debugging__code">?react_perf</Code> and the Chrome DevTools Performance Panel
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        React performance addons to get console reports on wasted computation time
                    </ListItem>
                </Appear>
                <Appear fid={4}>
                    <ListItem>
                        Catch useless updates with a magic tool called <Code className="debugging__code">why-did-you-update</Code>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default DebuggingSlideFour;
