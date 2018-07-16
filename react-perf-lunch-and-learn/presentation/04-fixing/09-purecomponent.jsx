import React from 'react';
import { Appear, Heading, Code, CodePane, Slide } from 'spectacle';


const FixingSlideNine = () => {
    return (
        <Slide key="09-purecomponent" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                <Code className="debugging__code">PureComponent</Code> &#x1f4a5;&#x1f4a5;&#x1f4a5;
            </Heading>
            <div className="fixing__slide__blocks">
                <Appear fid={1}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_purecomponent-01.example`)}
                            margin="20px auto"
                            className="debugging__medium-code"
                        />
                    </div>
                </Appear>
                <Appear fid={2}>
                    <div>
                        <span className="wat-perf__slide-04__codez--block--pointer">&#x1f449;</span>
                    </div>
                </Appear>
                <Appear fid={3}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_purecomponent-02.example`)}
                            margin="20px auto"
                            className="debugging__medium-code"
                        />
                    </div>
                </Appear>
            </div>
            <Appear fid={4}>
                <div>
                    <span className="fixing__text fixing__text-m-medium">
                        This will do a shallow comparison of props and state
                    </span>
                </div>
            </Appear>
            <Appear fid={5}>
                <div>
                    <span className="fixing__text fixing__text-m-medium">
                        If it find that they have not changed, it stops the component's update lifecycle
                    </span>
                </div>
            </Appear>
            <Appear fid={6}>
                <div>
                    <span className="fixing__text fixing__text-m-medium">
                        This means less time is spent by React calling methods like <Code className="debugging__code">componentWillReceiveProps</Code> and <Code className="debugging__code">componentDidUpdate</Code>
                    </span>
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideNine;
