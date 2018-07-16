import React from 'react';
import PropTypes from 'prop-types';
require(`./ok-rating.less`);


const OkRatingItem = ({ active }) => (
    <li className={`ok-rating__item ${active ? `ok-rating__item-s-active` : ``}`}>
        &#x1f44c;
    </li>
);

OkRatingItem.propTypes = {
    active: PropTypes.bool.isRequired,
};


const OkRating = ({ rating }) => {
    return (
        <ul className="ok-rating">
            <OkRatingItem active={rating >= 1} />
            <OkRatingItem active={rating >= 2} />
            <OkRatingItem active={rating >= 3} />
            <OkRatingItem active={rating >= 4} />
            <OkRatingItem active={rating >= 5} />
        </ul>
    );
};

OkRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default OkRating;
