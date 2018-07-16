import React from 'react';
import moment from 'moment';
import { Slide } from 'spectacle';
import MainHeading from '../../components/main-heading.jsx';
import SubHeading from '../../components/sub-heading.jsx';


const SlideIntroOne = () => (
    <Slide
        bgColor="primary"
        align="flex-start"
    >
        <MainHeading>
            lunch and learn
        </MainHeading>
        <SubHeading>
            {moment().format('MMMM Do YYYY')}
        </SubHeading>
    </Slide>
);


export default SlideIntroOne;
