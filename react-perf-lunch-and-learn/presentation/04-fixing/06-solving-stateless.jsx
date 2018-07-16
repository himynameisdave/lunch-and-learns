import React from 'react';
import { Appear, Heading, CodePane, Slide } from 'spectacle';


const FixingSlideSix = () => {
    return (
        <Slide key="06-solving-stateless" bgColor="background" align="center flex-start">
            <Heading
                size={4}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="40px 0 40px 0"
            >
                Solving Stateless
            </Heading>
            <Appear fid={1}>
                <div>
                    <span className="fixing__text fixing__text-m-medium">
                        &#x1f914; Stateless components are just functions that return JSX...
                    </span>
                </div>
            </Appear>
            <Appear fid={2}>
                <div>
                    <span className="fixing__text fixing__text-m-medium">
                        ...meaning we can just do this:
                    </span>
                </div>
            </Appear>
            <div className="fixing__slide__blocks">
                <Appear fid={3}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_solving-stateless-01.example`)}
                            margin="20px auto"
                            className="debugging__medium-code"
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
                            source={require(`raw-loader!../../assets/04-fixing_solving-stateless-02.example`)}
                            margin="20px auto"
                            className="debugging__medium-code"
                        />
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default FixingSlideSix;
