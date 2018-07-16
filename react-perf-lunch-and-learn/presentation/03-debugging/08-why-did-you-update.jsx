import React from 'react';
import { Appear, Heading, Code, Image, Slide } from 'spectacle';
import images from '../images/';
import OkRating from '../components/ok-rating/ok-rating.jsx';

const DebuggingSlideEight = () => {
    return (
        <Slide key="08-why-did-you-update" bgColor="background" align="center flex-start">
            <Heading
                size={6}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-08__heading"
                margin="40px 0 40px 0"
            >
                &#x2728; <Code className="debugging__code">why-did-you-update</Code> &#x1f4a5;
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        This is a simple tool that essentially monkeypatches the <Code className="debugging__code">componentDidUpdate</Code> of every React component, and if the state and props appear to be identical, it warns you in the console
                    </span>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        This tool is extremely helpful for seeing which specific user interactions are causing performance bottlenecks
                    </span>
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        Be warned, it can be a little overwhelming at times, as if you aren't careful you can have entire component trees needlessly re-rendering
                    </span>
                </div>
            </Appear>
            <Appear fid={4}>
                <div>
                    <span className="debugging__text debugging__text-m-small">
                        <Image src={images.whyDidYouUpdate} width="60%" />
                    </span>
                </div>
            </Appear>
            <Appear fid={5}>
                <div>
                    <OkRating rating={5} />
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideEight;
