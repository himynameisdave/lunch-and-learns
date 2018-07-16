import React from 'react';
import { Appear, CodePane, Heading, Slide } from 'spectacle';


const WatPerfSlideFour = () => {
    return (
        <Slide key="04-wat-jsx" transition={[`spin`]} bgColor="background" align="center flex-start">
            <Heading
                size={2}
                textColor="textColor"
                className="wat-perf__heading wat-perf__slide-04__heading"
                margin="40px 0 60px 0"
            >
                JSX
            </Heading>
            <Appear fid={1}>
                <div>
                    <p className="wat-perf__slide-04__text">
                        JSX is an XML-like expression that is compiled to a function call
                    </p>
                </div>
            </Appear>
            <div className="wat-perf__slide-04__codez">
                <Appear fid={1}>
                    <div>
                        <div className="wat-perf__slide-04__codez--block">
                            <CodePane
                                lang="jsx"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-01.example`)}
                                margin="20px auto"
                                className="debugging__medium-code"
                            />
                        </div>
                    </div>
                </Appear>
                <Appear fid={2}>
                    <div>
                        <div className="wat-perf__slide-04__codez--block wat-perf__slide-04__codez--block--pointer">
                            &#x1f449;
                        </div>
                    </div>
                </Appear>
                <Appear fid={3}>
                    <div>
                        <div className="wat-perf__slide-04__codez--block">
                            <CodePane
                                lang="js"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-02.example`)}
                                margin="20px auto"
                                className="debugging__medium-code"
                            />
                        </div>
                    </div>
                </Appear>
            </div>
            <Appear fid={4}>
                <div>
                    <p className="wat-perf__slide-04__text">
                        This allows us to express our UI in a familiar HTML-like syntax, with all the power and data of JS at our disposal
                    </p>
                </div>
            </Appear>
            <Appear fid={5}>
                <div>
                    <div className="wat-perf__slide-04__codez">
                        <div className="wat-perf__slide-04__codez--block">
                            <CodePane
                                lang="jsx"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-03.example`)}
                                margin="20px auto"
                                className="debugging__medium-code"
                            />
                        </div>
                        <div className="wat-perf__slide-04__codez--block wat-perf__slide-04__codez--block--pointer">
                            &#x1f449;
                        </div>
                        <div className="wat-perf__slide-04__codez--block">
                            <CodePane
                                lang="js"
                                source={require(`raw-loader!../../assets/02-wat-is-perf_jsx-04.example`)}
                                margin="20px auto"
                                className="debugging__medium-code"
                            />
                        </div>
                    </div>
                </div>
            </Appear>
        </Slide>
    );
};

export default WatPerfSlideFour;
