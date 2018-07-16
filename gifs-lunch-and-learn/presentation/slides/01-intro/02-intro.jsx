import React from 'react';
import { Slide, Heading } from 'spectacle';
import Confetti from '../../components/confetti.jsx';
import Emoji from '../../components/emoji.jsx';

export default () => {
    const confettiWap = [];
    for (let i = 0; i < 2; i++) {
        confettiWap.push((
            <Confetti key={i} order={i + 1}>
                <Emoji emoji="ok-hand" />
            </Confetti>
        ));
    }
    return (
        <Slide
            bgColor="primary"
            transition={['zoom', 'fade']}
        >
            <Heading>
                GIFs
            </Heading>
            {confettiWap}
        </Slide>
    );
};
