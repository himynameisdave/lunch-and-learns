import React, { Component } from 'react';

//  "smart" HOC handles if it's toggled
const withToggle = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            this.state = {
                isToggled: false,
            };
        }
        handleToggle = () => this.setState(currentState => ({
            isToggled: !currentState.isToggled,
        }));
        render() {
            return (
                <WrappedComponent
                    isToggled={this.state.isToggled}
                    onToggle={this.handleToggle}
                    {...this.props}
                />
            );
        }
    };
}
//  "dumb" UI component
const CoolToggle = ({ isToggled, onToggle }) => (
    <div className="cool-toggle">
        {isToggled ? '😎' : '☹️'}
        <button onClick={onToggle}>
            Toggle this thing
        </button>
    </div>
);

const LightBulb = ({ isToggled, onToggle }) => (
    <div className="toggle2">
        {isToggled && (
            <div className="toggle2__lights">
                💡💡💡
            </div>
        )}
        <button className="toggle2__button" onClick={onToggle}>
            Toggle this thing
        </button>
    </div>
);

export default withToggle(CoolToggle);
