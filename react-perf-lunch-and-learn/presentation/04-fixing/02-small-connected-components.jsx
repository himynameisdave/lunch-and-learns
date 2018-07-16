import React from 'react';
import { Appear, Heading, CodePane, Slide } from 'spectacle';

const FixingSlideTwo = () => {
    return (
        <Slide key="00-fixing" transition={[`fade`]} bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                  &#x2705; Small, connected components
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="fixing__text">
                        The concept behind this is that you break up larger components into smaller components. <Appear fid={2}><span>Ideally, you want your components to be as simple as possible, and with a minimal footprint.</span></Appear>
                    </span>
                </div>
            </Appear>
            <div className="fixing__slide__blocks">
                <Appear fid={3}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_small-connected-01.example`)}
                            margin="20px auto"
                            className="debugging__small-code"
                        />
                    </div>
                </Appear>
                <Appear fid={4}>
                    <div>
                        <span className="wat-perf__slide-04__codez--block--pointer">&#x1f449;</span>
                    </div>
                </Appear>
                <Appear fid={5}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_small-connected-02.example`)}
                            margin="20px auto"
                            className="debugging__small-code"
                        />
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default FixingSlideTwo;
