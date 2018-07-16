import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Slide } from 'spectacle';
import MainHeading from '../components/main-heading.jsx';
import SubHeading from '../components/sub-heading.jsx';


export default class SlideTitleCard extends Component {
    static propTypes = {
        //  Items that will ranomdly appear around the screen
        confetti: PropTypes.node,
        //  Date that the lunch and learn is taking place
        date: PropTypes.string,
        //  The title of the lunch and learn
        title: PropTypes.string.isRequired,
    };
    render() {
        const displayDate = !this.props.date ? moment().format('MMMM Do YYYY') : this.props.date;
        return (
            <Slide
                bgColor="primary"
                align="flex-start"
            >
                <MainHeading>
                    {this.props.title}
                </MainHeading>
                <SubHeading>
                    {displayDate}
                </SubHeading>
                {this.props.confetti}
            </Slide>
        );
    };
};
