import React from 'react';
import Confetti from '../components/confetti.jsx';
import Emoji from '../components/emoji.jsx';
import SlideTitleCard from '../slide-templates/title-card.jsx';


export default [
    // SlideTitleCard({
    //     key: 'slide_001',
    //     title: 'what the GIF is this shit?',
    //     confetti: (
    //         <Confetti
    //             items={[
    //                 <Emoji key="emoji__01" emoji="ok-hand" size={75} />,
    //                 <Emoji key="emoji__02" emoji="ok-hand" size={200} />,
    //                 <Emoji key="emoji__03" emoji="no-good" size={120} />,
    //                 <Emoji key="emoji__04" emoji="ok-hand" size={245} />,
    //             ]}
    //         />
    //     ),
    // }),
    (<SlideTitleCard
        key="slide_001"
        title="what the GIF is this shit?"
        confetti={(
            <Confetti
                items={[
                    <Emoji key="emoji__01" emoji="ok-hand" size={75} />,
                    <Emoji key="emoji__02" emoji="ok-hand" size={200} />,
                    <Emoji key="emoji__03" emoji="no-good" size={120} />,
                    <Emoji key="emoji__04" emoji="ok-hand" size={245} />,
                ]}
            />
        )}
    />)
];
