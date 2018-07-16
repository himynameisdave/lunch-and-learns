import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';

const DebuggingSlideThree = () => {
    return (
        <Slide key="03-bad-ux-bruce" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading debugging__slide-03__heading"
                margin="40px 0 60px 0"
            >
                Bad UX <Appear fid={1}><span>=== Sad BrUXe</span></Appear>
            </Heading>
            <Appear fid={2}>
                <div>
                    <div className="debugging__slide-03__bruce">
                        <Image src={images.bruceSad} width="75%" />
                        <Appear fid={3}>
                            <div>
                                <Image src={images.nestPas} className="debugging__slide-03__bruce-nestpas" />
                            </div>
                        </Appear>
                    </div>
                </div>
            </Appear>
        </Slide>
    );
};

export default DebuggingSlideThree;
