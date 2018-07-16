import React, { Component } from 'react';
import { Image } from 'spectacle';
import av from 'animate-value';
import images from '../../images/index.js';
require(`./skills-chart.less`);

class SkillsChart extends Component {

    constructor(props) {
        super(props);
        this.FINAL_HEIGHT = 125;
        this.bruceStyles = {
            position: `absolute`,
            bottom: `90%`,
            left: `5%`,
            width: `100%`,
            transition: `opacity 0.4s`,
            zIndex: -1,
        };
        this.hasUnmounted = false;
        //  State
        this.state = {
            baseHeight: 0,
            bruceTop: 90,
            doneInitial: false,
        };
    }

    componentDidMount() {
        av({
            from: 1,
            to: this.FINAL_HEIGHT,
            duration: 800,
            easing: `easeInOutQuint`,
            change: value => !this.hasUnmounted ? this.setState({ baseHeight: Math.round(value) }) : null,
            done: () => {
                if (!this.hasUnmounted) {
                    this.setState({ doneInitial: true });
                    av({
                        from: 90,
                        to: 0,
                        duration: 800,
                        easing: `easeInOutQuint`,
                        change: value => !this.hasUnmounted ? this.setState({ bruceTop: Math.round(value) }) : null,
                    });
                }
            }
        });
    }

    componentWillUnmount() {
        this.hasUnmounted = false;
    }

    getSkillStyle = (height) => ({ height: `${height}px` });
    getBruceStyle = () => ({
        opacity: this.state.doneInitial ? `1` : `0.01`,
        transform: `translateY(${this.state.bruceTop}%)`
    });

    render() {
        return (
            <div className="skills-chart">
                <div className="skills-chart__skill" style={this.getSkillStyle(this.state.baseHeight * 1)}>
                    Beginner
                </div>
                <div className="skills-chart__skill" style={this.getSkillStyle(this.state.baseHeight * 2)}>
                    Intermediate
                    <Image
                        src={images.bruceHappy}
                        className="skills-chart__bruce"
                        style={this.getBruceStyle()}
                    />
                </div>
                <div className="skills-chart__skill" style={this.getSkillStyle(this.state.baseHeight * 3)}>
                    Ninja
                </div>
            </div>
        );
    }
}

export default SkillsChart;
