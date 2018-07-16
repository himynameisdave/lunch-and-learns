import React from 'react';
import { Appear, Heading, Code, Image, Slide } from 'spectacle';
import images from '../images/';
import OkRating from '../components/ok-rating/ok-rating.jsx';

const DebuggingSlideSix = () => {
    return (
        <Slide key="06-chrome-profiling" bgColor="background" align="center flex-start">
            <Heading
                size={6}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-06__heading"
                margin="20px 0 35px 0"
            >
                Chrome DevTools Performance Profiling (with <Code className="debugging__code">?react_perf</Code>)
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        Using the performance Chrome's DevTools, we can get a look at what it is about our app that is so slow:
                    </span>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <Image
                        src={images.chromeProfilin}
                        width="55%"
                    />
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        If we add the <Code className="debugging__code">?react_perf</Code> query string to the url while in dev mode, React will produce a much better report in the Performance tab
                    </span>
                </div>
            </Appear>
            <Appear fid={4}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        This allows us to really dig into the component (and component trees) that are causing us the most trouble
                    </span>
                </div>
            </Appear>
            <Appear fid={5}>
                <div>
                    <OkRating rating={4} />
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideSix;
