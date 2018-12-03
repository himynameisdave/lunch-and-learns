import React, { Component } from 'react';
import Icon from '7g-components/icon/icon.jsx';


class Collapsible extends Component {

    static Toggle = ({ toggleText, onToggle }) => (
        <div className="collapsible-toggle" onClick={onToggle}>
            <Icon
                icon="plus"
                size="12"
            />
            <span>
                {toggleText}
            </span>
        </div>
    );

    static Content = ({ children, isCollapsed }) => !isCollapsed && (
        <div className="collapsible-content">
            {children}
        </div>
    );

    state = {
        isCollapsed: true,
    };

    handleToggle = () => this.setState(({ isCollapsed }) => ({ isCollapsed: !isCollapsed }));

    render() {
        return (
            <div className="collapsible">
                <Collapsible.Toggle
                    {...this.props}
                    onToggle={this.handleToggle}
                />
                <Collapsible.Content {...this.state}>
                    {this.props.children}
                </Collapsible.Content>
            </div>
        );
    }
}

export default Collapsible;
