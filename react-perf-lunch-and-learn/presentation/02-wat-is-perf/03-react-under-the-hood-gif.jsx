import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';

const WatPerfSlideThree = () => {
    return (
        <Slide key="03-react-under-the-hood-gif" transition={[`spin`]} bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-03__heading"
                margin="40px 0 60px 0"
            >
                React under the hood
            </Heading>
            <Appear fid={1}>
                <div>
                    <Image src={images.underTheHood} className="wat-perf__slide-03__image" />
                </div>
            </Appear>
        </Slide>
    );
};


export default WatPerfSlideThree;
