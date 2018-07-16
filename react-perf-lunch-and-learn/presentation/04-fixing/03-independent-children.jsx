import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';
import images from '../images/';


const FixingSlideThree = () => {
    return (
        <Slide key="03-indepenent" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                  &#x2705; Independent Children
            </Heading>
            <Appear fid={1}>
                <div>
                    <Image src={images.independentChildren} width="75%" />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideThree;
