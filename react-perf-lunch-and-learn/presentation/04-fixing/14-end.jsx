import React from 'react';
import { Appear, Heading, Image, Slide } from 'spectacle';


const FixingSlideFourteen = () => {
    return (
        <Slide key="13-more-stuff" bgColor="background" align="center flex-start">
            <Heading
                size={2}
                textColor="textColor"
                className="wat-perf__heading fixing__slide-01__heading"
                margin="75px 0 20px 0"
            >
                Thanks for lunch and learning!
            </Heading>
            <Appear fid={1}>
                <div>
                    <Image src="https://i.ppy.sh/888d14d5c76461770f02ba18185ff9198cc36196/687474703a2f2f693330352e70686f746f6275636b65742e636f6d2f616c62756d732f6e6e3230342f6a616e797a6f6365616e373737372f426f64792050617274732f68616e646f6b61792e676966" width="70%" />
                </div>
            </Appear>
        </Slide>
    );
};

export default FixingSlideFourteen;
