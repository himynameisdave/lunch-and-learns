import React from 'react';
import SlideIntroOne from './01-intro.jsx';
import SlideIntroTwo from './02-intro.jsx';


export default () => (
    <div hasSlideChildren>
        {[
            SlideIntroOne(),
            SlideIntroTwo(),
            SlideIntroOne(),
        ]}
    </div>
);
