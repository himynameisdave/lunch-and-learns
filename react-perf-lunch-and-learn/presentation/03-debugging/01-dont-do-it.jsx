import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';

const DebuggingSlideOne = () => {
    return (
        <Slide key="01-dont-do-it" bgColor="background" align="center flex-start">
            <Appear fid={1}>
                <div>
                    <Heading
                        size={1}
                        textColor="textColor"
                        className="wat-perf__heading debugging__slide-01__heading"
                        margin="40px 0 30px 0"
                    >
                        don't do it!
                    </Heading>
                </div>
            </Appear>
            <Appear fid={2}>
                <Image src={images.kidPresDont} width="70%" />
            </Appear>
            <Appear fid={3}>
                <div>
                    <Heading
                        size={4}
                        textColor="textColor"
                        className="wat-perf__heading debugging__slide-01__heading"
                        margin="40px 0 30px 0"
                    >
                        ...unless you need to
                    </Heading>
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideOne;
