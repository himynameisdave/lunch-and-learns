import React from 'react';
import { Appear, Heading, Code, Slide } from 'spectacle';
import OkRating from '../components/ok-rating/ok-rating.jsx';

const DebuggingSlideSeven = () => {
    return (
        <Slide key="07-react-perf-addons" bgColor="background" align="center flex-start">
            <Heading
                size={6}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-05__heading"
                margin="40px 0 60px 0"
            >
                Using React's Performance Addons
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="debugging__text">
                        React also provides a bunch of performance measuring utilities as an add-on, and you can install it like so:
                    </span>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <span className="debugging__text">
                        <Code className="debugging__code">yarn add react-addons-perf --dev</Code>
                    </span>
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <span className="debugging__text">
                        With it, you can do a number of things, such as printing reports about the total rendering time for all components
                    </span>
                </div>
            </Appear>
            <Appear fid={4}>
                <div>
                    <span className="debugging__text">
                        It's most useful feature is <Code className="debugging__code">Perf.printWasted()</Code>. When used (with some of its other methods), it will print a report of all the needless component re-renders (and the time they took)
                    </span>
                </div>
            </Appear>
            <Appear fid={5}>
                <div>
                    <OkRating rating={3} />
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideSeven;
