import React from 'react';
import { Appear, Heading, CodePane, List, ListItem, Slide } from 'spectacle';


const FixingSlideSeven = () => {
    return (
        <Slide key="07-2-refs" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x1f937; references (continued)
            </Heading>
            <Appear fid={1}>
                <div>
                    <CodePane
                        lang="jsx"
                        source={require(`raw-loader!../../assets/04-fixing_refs.example`)}
                        margin="20px auto"
                        className="debugging__medium-code"
                    />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideSeven;
