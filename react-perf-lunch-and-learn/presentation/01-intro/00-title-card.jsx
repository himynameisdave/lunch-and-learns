import React from 'react';
import images from '../images/';
import { Slide } from 'spectacle';

const IntroSlideZero = () => {
    return (
        <Slide key="00-title-card" bgColor="background" bgImage={images.introBg} />
    );
};


export default IntroSlideZero;
