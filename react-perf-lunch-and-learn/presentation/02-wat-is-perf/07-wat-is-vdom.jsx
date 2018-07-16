import React from 'react';
import { Appear, CodePane, Heading, Slide } from 'spectacle';


const WatPerfSlideSeven = () => {
    return (
        <Slide key="07-wat-is-vdom" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-07__heading"
                margin="40px 0 60px 0"
            >
                Wat is Virtual DOM?
            </Heading>
            <div className="wat-perf__slide-07__blocks">
                <Appear fid={1}>
                    <div>
                        <div className="wat-perf__slide-07__block">
                            <CodePane
                                lang="jsx"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-05.example`)}
                                margin="20px auto"
                                className="debugging__small-code"
                            />
                        </div>
                    </div>
                </Appear>
                <Appear fid={2}>
                    <div>
                        <div className="wat-perf__slide-07__block">
                            &#x1f447; <Appear fid={6}><span>Babel</span></Appear>
                        </div>
                    </div>
                </Appear>
                <Appear fid={3}>
                    <div>
                        <div className="wat-perf__slide-07__block">
                            <CodePane
                                lang="js"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-06.example`)}
                                margin="20px auto"
                                className="debugging__small-code"
                            />
                        </div>
                    </div>
                </Appear>
                <Appear fid={4}>
                    <div>
                        <div className="wat-perf__slide-07__block">
                            &#x1f447; <Appear fid={7}><span>React</span></Appear>
                        </div>
                    </div>
                </Appear>
                <Appear fid={5}>
                    <div>
                        <div className="wat-perf__slide-07__block">
                            <CodePane
                                lang="js"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-07.example`)}
                                margin="20px auto"
                                className="debugging__small-code"
                            />
                        </div>
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default WatPerfSlideSeven;
