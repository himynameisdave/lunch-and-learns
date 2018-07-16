import React from 'react';
import { Appear, Heading, Code, CodePane, Slide } from 'spectacle';
import OkRating from '../components/ok-rating/ok-rating.jsx';

const DebuggingSlideFive = () => {
    return (
        <Slide key="05-console-time" bgColor="background" align="center flex-start">
            <Heading
                size={6}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-05__heading"
                margin="40px 0 60px 0"
            >
                <Code className="debugging__code">console.time</Code>
            </Heading>
            <Appear fid={1}>
                <div>
                    <CodePane
                        lang="js"
                        source={require(`raw-loader!../../assets/03-debugging_console-time.example`)}
                        margin="20px auto"
                        className="debugging__big-code"
                    />
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <span className="debugging__text">&#x261d; You could also put this into a Redux middleware</span>
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <OkRating rating={1} />
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideFive;
