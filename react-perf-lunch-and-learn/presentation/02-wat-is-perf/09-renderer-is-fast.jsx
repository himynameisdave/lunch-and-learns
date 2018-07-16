import React from 'react';
import { Appear, Heading, Slide } from 'spectacle';


const WatPerfSlideNine = () => {
    return (
        <Slide key="09-renderer-is-fast" transition={[`spin`]} bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-09__heading"
                margin="40px 0 60px 0"
            >
                VDOM can still be v slow
            </Heading>
            <Appear fid={1}>
                <div>
                    <p className="wat-perf__slide-09__text">
                        React itself can still waste a ton of time if we are not careful with it, especially with larger and more complex apps. Re-rendering a parent can cause the entire component tree to be updated or at least diffed by the reconciler.
                    </p>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <p className="wat-perf__slide-09__text">
                        React's diffing, or "reconciliation" algorithm, while fast, is still best avoided if we know for sure that our components don't need to be re-rendered.
                    </p>
                </div>
            </Appear>
            <Appear fid={3}>
                <div>
                    <p className="wat-perf__slide-09__text">
                        React 16 will feature a new reconciliation algorithm called "Fiber", which will address some issues (especially with rendering complex trees), but it will not solve every performace problem.<Appear fid={4}><span>(more on this later maybe).</span></Appear>
                    </p>
                </div>
            </Appear>
        </Slide>
    );
};


export default WatPerfSlideNine;
