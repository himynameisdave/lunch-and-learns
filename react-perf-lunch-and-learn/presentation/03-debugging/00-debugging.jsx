import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';

const DebuggingSlideZero = () => {
    return (
        <Slide key="00-debugging" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-00__heading"
                margin="40px 0 60px 0"
            >
                When to optimize performance?
            </Heading>
            <Appear fid={1}>
                <Image
                    src={images.fastNos}
                    width="100%"
                    fit
                />
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideZero;
