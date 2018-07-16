import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';


const IntroSlideOne = () => {
    return (
        <Slide key="01-7geese-loves-react" bgColor="background">
            <Heading
                className="intro__slide-01__heading"
                size={2}
                transition={[`fade`]}
                textColor="textColor"
                fit
            >
                7Geese &#x1f499;'s React
            </Heading>
            <Appear fid={1}>
                <Image
                    src={images.bruceHappy}
                    width="60%"
                />
            </Appear>
        </Slide>
    );
};


export default IntroSlideOne;
