import React from 'react';
import { Slide } from 'spectacle';
import DayTweener from '../components/day-tweener/day-tweener.jsx';

const IntroSlideThree = () => {
    return (
        <Slide key="03-days-since" bgColor="background">
            <DayTweener text="days" />
        </Slide>
    );
};

export default IntroSlideThree;
