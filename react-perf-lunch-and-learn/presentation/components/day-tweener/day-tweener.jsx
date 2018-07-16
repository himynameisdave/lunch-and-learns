import React, { Component } from 'react';
import PropTypes from 'prop-types';
import av from 'animate-value';
require(`./day-tweener.less`);


//  OnClick, it will tween the number of days with easing
class DayTweener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
        };
    }

    componentDidMount() {
        av({
            from: 1,
            to: 449,
            duration: 4750,
            easing: `easeInOutQuart`,
            change: value => this.setState({ days: Math.round(value) }),
        });
    }

    render() {
        return (
            <div>
                <span className="day-tweener__days">
                    {this.state.days}
                </span>
                <span className="day-tweener__text">
                    {this.props.text}
                </span>
            </div>
        );
    }
}

DayTweener.propTypes = {
    text: PropTypes.string.isRequired,
};

export default DayTweener;
