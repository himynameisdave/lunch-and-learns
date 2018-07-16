import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from 'spectacle';

const SubHeading = ({ children }) => {
    const StyledHeading = styled(Heading)`
        font-style: italic;
        font-weight: 300 !important;
    `;
    return (
        <StyledHeading
            size={5}
            textColor="secondary"
            textAlign="left"
        >
            {children}
        </StyledHeading>
    );
};

SubHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SubHeading;
