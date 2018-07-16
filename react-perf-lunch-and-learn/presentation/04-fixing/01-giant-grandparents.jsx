import React from 'react';
import { Appear, Heading, CodePane, Slide } from 'spectacle';

const FixingSlideOne = () => {
    return (
        <Slide key="01-giant-grandparents" bgColor="background" align="center flex-start">
            <Appear fid={1}>
                <div>
                    <Heading
                        size={4}
                        textColor="textColor"
                        className="wat-perf__heading fixing__slide-01__heading"
                        margin="40px 0 40px 0"
                    >
                        &#x2705; No more giant grandparents!
                    </Heading>
                </div>
            </Appear>
            <div className="fixing__slide__blocks fixing__slide__blocks-m-top">
                <Appear fid={2}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_giant-grandparent.example`)}
                            margin="20px auto"
                            className="debugging__small-code"
                        />
                    </div>
                </Appear>
                <Appear fid={3}>
                    <div>
                        <CodePane
                            lang="jsx"
                            source={require(`raw-loader!../../assets/04-fixing_giant-grandchild.example`)}
                            margin="20px auto"
                            className="debugging__small-code"
                        />
                    </div>
                </Appear>
            </div>
        </Slide>
    );
};

export default FixingSlideOne;
