import React from 'react';
import classnames from 'classnames';
import Button from '7g-components/button/button.jsx';
import './nice-button.less';


const NiceButton = (props) => {
    const classNames = classnames('nice-button', props.moreClassNames);
    return (
        <Button
            className={classNames}
            type="primary"
            size="large"
        >
            <span className="nice-button__child">
                child of nice button
            </span>
        </Button>
    );
}

export default NiceButton;
