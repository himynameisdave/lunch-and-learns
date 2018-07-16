import React from 'react';
import { Appear, Heading, CodePane, Slide } from 'spectacle';

const FixingSlideFour = () => {
    return (
        <Slide key="01-giant-grandparents" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                &#x2705; Stateless components
            </Heading>
            <div className="fixing__slide__blocks">
                <Appear fid={1}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_stateless-01.example`)}
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
                            source={require(`raw-loader!../../assets/04-fixing_stateless-02.example`)}
                            margin="20px auto"
                            className="debugging__medium-code"
                        />
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default FixingSlideFour;
