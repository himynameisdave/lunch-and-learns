import React from 'react';
import { Appear, Heading, Code, CodePane, List, ListItem, Slide } from 'spectacle';


const FixingSlideTwelve = () => {
    return (
        <Slide key="11-should-component-update" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                <Code className="debugging__code">shouldComponentUpdate</Code> (continued...)
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Provides us with the <Code className="debugging__code">nextProps</Code> and <Code className="debugging__code">nextState</Code>
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Great for doing simple checks
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Can save us even when the refs to props change
                        </span>
                    </ListItem>
                </Appear>
            </List>
            <Appear fid={3}>
                <div>
                    <CodePane
                        lang="jsx"
                        source={require(`raw-loader!../../assets/04-fixing_scu-02.example`)}
                        margin="20px auto"
                        className="debugging__medium-code"
                    />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideTwelve;
