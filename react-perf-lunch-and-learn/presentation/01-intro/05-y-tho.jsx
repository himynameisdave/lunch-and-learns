import React from 'react';
import { Image, Slide } from 'spectacle';
import images from '../images/';

const IntroSlideFive = () => {
    return (
        <Slide key="05-y-tho" align="center flex-start" transition={[`zoom`]}>
            <Image
                src={images.yTho}
                className="intro__slide-05__image"
            />
        </Slide>
    );
};

export default IntroSlideFive;
