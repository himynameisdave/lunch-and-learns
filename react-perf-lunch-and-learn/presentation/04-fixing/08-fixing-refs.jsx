import React from 'react';
import { Appear, Heading, CodePane, List, ListItem, Slide } from 'spectacle';


const FixingSlideEight = () => {
    return (
        <Slide key="08-fixing-refs" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x1f527; Fixing refs
            </Heading>
            <List className="wat-perf__list">
                <Appear fid={1}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Luckly, decisions we make about the way that we write and structure our code can effect this
                        </span>
                    </ListItem>
                </Appear>
                <Appear fid={2}>
                    <ListItem>
                        <span className="fixing__text fixing__text-m-medium">
                            Let's fix the previous example:
                        </span>
                    </ListItem>
                </Appear>
            </List>
            <Appear fid={3}>
                <div>
                    <CodePane
                        lang="jsx"
                        source={require(`raw-loader!../../assets/04-fixing_fixing-refs.example`)}
                        margin="20px auto"
                        className="debugging__small-code"
                    />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideEight;
