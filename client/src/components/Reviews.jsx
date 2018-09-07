import React from 'react';
import Review from './Review.jsx';

const Reviews = props => {
  var { restaurant } = props;
  var reviews = restaurant.reviews;

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="google-container">
          <h3>GOOGLE REVIEWS</h3>
          <hr />
        </div>
        {reviews.map(review => {
          return (
            <React.Fragment>
              <Review review={review} />
              <hr />
            </React.Fragment>
          );
        })}
      </div>
      <div className="contactPlaceholder" />
    </div>
  );
};

export default Reviews;
