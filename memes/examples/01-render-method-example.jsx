import React, { Component } from 'react';
import Icon from '7g-components/icon/icon.jsx';


class Collapsible extends Component {

    state = {
        isCollapsed: true,
    };

    handleToggle = () => this.setState(({ isCollapsed }) => ({ isCollapsed: !isCollapsed }));

    renderToggle = () => (
        <div className="collapsible-toggle" onClick={this.handleToggle}>
            <Icon
                icon="plus"
                size="12"
            />
            <span>
                {this.props.toggleText}
            </span>
        </div>
    );

    renderContent = () => !this.state.isCollapsed && (
        <div className="collapsible-content">
            {this.props.children}
        </div>
    );

    render() {
        return (
            <div className="collapsible">
                {this.renderToggle()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Collapsible;
