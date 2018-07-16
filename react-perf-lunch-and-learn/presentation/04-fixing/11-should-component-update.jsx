import React from 'react';
import { Appear, Heading, Code, CodePane, List, ListItem, Slide } from 'spectacle';


const FixingSlideEleven = () => {
    return (
        <Slide key="11-should-component-update" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x2728; &#x2728; &#x2728; &#x2728; &#x2728; &#x2728;
                <Code className="debugging__code">shouldComponentUpdate</Code>
                &#x2728; &#x2728; &#x2728; &#x2728; &#x2728; &#x2728;
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            React provides us a way to override the update lifecycle through <Code className="debugging__code">shouldComponentUpdate</Code>
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            In it you can check if your component actually needs to be updated, and return false if it doesn't
                        </span>
                    </ListItem>
                </Appear>
            </List>
            <Appear fid={3}>
                <div>
                    <CodePane
                        lang="jsx"
                        source={require(`raw-loader!../../assets/04-fixing_scu-01.example`)}
                        margin="20px auto"
                        className="debugging__medium-code"
                    />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideEleven;
