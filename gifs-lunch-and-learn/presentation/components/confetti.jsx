import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Appear } from 'spectacle';

const SingleConfetti = ({ index, node }) => {
    const quickMaths = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const left = quickMaths(5, 90);
    const top = quickMaths(5, 90);
    const StyledConfetti = styled.div`
        position: absolute;
        left: ${left}%;
        top: ${top}%;
        transform: translate(-50%, -50%);
    `;
    return (
        <Appear>
            <StyledConfetti>
                {node}
            </StyledConfetti>
        </Appear>
    );
};

const Confetti = ({ items }) => {
    // const Wrapper = styled.div`
    //     height: 100vh;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100vw;
    //     z-index: 1010;
    // `;
    return items.map((item, i) => (<SingleConfetti key={item.key} node={item} index={i} />));
};

SingleConfetti.propTypes = {
    index: PropTypes.number.isRequired,
    node: PropTypes.node.isRequired,
};

Confetti.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Confetti;
