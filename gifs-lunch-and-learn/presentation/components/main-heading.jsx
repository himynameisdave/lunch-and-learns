import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from 'spectacle';

const MainHeading = ({ children }) => {
    const StyledHeading = styled(Heading)`
        font-weight: 300 !important;
        text-transform: lowercase;
    `;
    return (
        <StyledHeading
            size={3}
            textColor="secondary"
            textAlign="left"
        >
            {children}
        </StyledHeading>
    );
};

MainHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainHeading;
