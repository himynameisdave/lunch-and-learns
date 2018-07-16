import React from 'react';
import { Appear, Heading, Slide } from 'spectacle';
import SkeletorWat from '../components/skeletor-wat/skeletor-wat.jsx';

const WatPerfSlideZero = () => {
    return (
        <Slide key="00-wat-is-perf" bgColor="background" align="center flex-start">
            <Heading
                size={2}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-00__heading"
                margin="40px 0 40px 0"
            >
                "Performance"
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="wat-perf__slide-00__text">
                        I keep throwing around this term, "performance"...
                    </span>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <SkeletorWat />
                </div>
            </Appear>
        </Slide>
    );
};


export default WatPerfSlideZero;
