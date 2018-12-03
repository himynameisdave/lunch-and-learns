import React, { Children, Component } from 'react';
import Icon from '7g-components/icon/icon.jsx';
//  Note that I've broken these off into their own files
import CollapsibleToggle from './collapsible-toggle.jsx';
import CollapsibleContent from './collapsible-content.jsx';

class Collapsible extends Component {

    static Toggle = CollapsibleToggle;

    static Content = CollapsibleContent;

    state = {
        isCollapsed: true,
    };

    get propsStateAndHandlers() {
        return {
            ...this.props,
            ...this.state,
            onToggle: this.handleToggle
        };
    }

    handleToggle = () => this.setState(({ isCollapsed }) => ({ isCollapsed: !isCollapsed }));

    render() {
        return (
            <div className="collapsible">
                {Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, this.propsStateAndHandlers);
                })}
            </div>
        );
    }
}

export default Collapsible;
