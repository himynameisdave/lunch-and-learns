import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';

const FixingSlideZero = () => {
    return (
        <Slide key="00-fixing" transition={[`fade`]} bgColor="background" align="center flex-start">
            <Appear fid={1}>
                <div>
                    <Heading
                        size={4}
                        textColor="textColor"
                        className="wat-perf__heading debugging__slide-08__heading"
                        margin="40px 0 40px 0"
                    >
                        Can we fix it...?
                    </Heading>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <Image src={images.canWeFixIt} width="100%" />
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <Heading
                        size={6}
                        textColor="textColor"
                        className="wat-perf__heading debugging__slide-08__heading"
                        margin="10px 0"
                    >
                        ...nope it's faaacked
                    </Heading>
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideZero;
