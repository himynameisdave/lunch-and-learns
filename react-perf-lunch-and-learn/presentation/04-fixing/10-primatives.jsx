import React from 'react';
import { Appear, Heading, Code, List, ListItem, Slide } from 'spectacle';


const FixingSlideTen = () => {
    return (
        <Slide key="09-purecomponent" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                Let's get primative!
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            You may run into problems when using <Code className="debugging__code">PureComponent</Code>
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            It should only be used on simple components, with primative propTypes
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            This means types like <Code className="debugging__code">string</Code>, <Code className="debugging__code">bool</Code> and <Code className="debugging__code">number</Code>, because these are cheap to compare
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={3}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Avoid functions, arrays and objects, as they may fail <Code className="debugging__code">PureComponent</Code>'s shallow equality
                        </span>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default FixingSlideTen;
