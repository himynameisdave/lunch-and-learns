import React from 'react';
import { Appear, Code, Slide } from 'spectacle';


const IntroSlideTwo = () => {
    return (
        <Slide key="02-init-commit" bgColor="background" align="center center">
            <Code bgColor="grey10" textColor="slate">
                4008315397ede78a0bd866fe6994a7689c65375d
            </Code>
            <Appear fid={1}>
                <div>
                    <span className="intro__slide-02__date">
                        - Mar 7, 2016
                    </span>
                </div>
            </Appear>
        </Slide>
    );
};

export default IntroSlideTwo;
