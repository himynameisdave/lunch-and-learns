import React from 'react';
import { Appear, Slide } from 'spectacle';


const WatPerfSlideSix = () => {
    return (
        <Slide key="06-jsx-not-vdom" bgColor="background" align="center center">
            <div className="wat-perf__slide-06__blocks">
                <Appear fid={1}>
                    <div>
                        <div className="wat-perf__slide-06__block">
                            JSX
                        </div>
                    </div>
                </Appear>
                <Appear fid={2}>
                    <div>
                        <div className="wat-perf__slide-06__block">
                            !==
                        </div>
                    </div>
                </Appear>
                <Appear fid={3}>
                    <div>
                        <div className="wat-perf__slide-06__block">
                            Virtual DOM
                        </div>
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default WatPerfSlideSix;
