import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import preloader from '../../node_modules/spectacle/src/utils/preloader.js';

//  The list of emojis
const emojis = {
    'ok-hand': require('../../assets/emoji__ok-hand.png'),
    'no-good': require('../../assets/emoji__no-good.png'),
};
//  Preload images
preloader(emojis);


const Emoji = ({ emoji, size }) => {
    const StyledEmoji = styled.div`
        height: ${size}px;
        width: ${size}px;
    `;
    const StyledImage = styled.img`
        margin: 0;
        max-width: 100%;
    `;
    return (
        <StyledEmoji>
            <StyledImage src={emojis[emoji].replace('/', '')} alt={emoji} />
        </StyledEmoji>
    );
};

Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    size: PropTypes.number,
};

Emoji.defaultProps = {
    size: 50,
};

export default Emoji;
