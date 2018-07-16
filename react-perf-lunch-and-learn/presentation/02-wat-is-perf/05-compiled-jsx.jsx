import React from 'react';
import { Slide } from 'spectacle';


const WatPerfSlideFive = () => {
    return (
        <Slide key="05-compiled-jsx" bgColor="background" align="center flex-start">
            <iframe
                src="https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=env%2Ces2015-loose%2Creact&targets=&browsers=&builtIns=false&debug=false&code=%2F**%20%40jsx%20turnIntoVDOM%20*%2F%0A%0Aconst%20name%20%3D%20%60Bruce%60%3B%0A%0A%3Cdiv%20id%3D%7B%20name%20%7D%3E%0A%20%20%20%20They%20call%20me%20%7B%20name%20%7D!%0A%3C%2Fdiv%3E%0A"
                className="wat-perf__slide-05__iframe"
            />
        </Slide>
    );
};

export default WatPerfSlideFive;
