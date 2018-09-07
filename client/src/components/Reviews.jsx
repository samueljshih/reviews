import React from 'react';
import Review from './Review.jsx';

const Reviews = props => {
  var { restaurant } = props;
  var reviews = restaurant.reviews;

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <h3>GOOGLE REVIEWS</h3>
        <hr />
        {reviews.map(review => {
          return <Review review={review} />;
        })}
      </div>
      <div className="contactPlaceholder" />
    </div>
  );
};

export default Reviews;
