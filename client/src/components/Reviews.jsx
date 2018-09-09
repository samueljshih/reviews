import React from 'react';
import Review from './Review.jsx';
import StarRatings from 'react-star-ratings';

const Reviews = props => {
  var { restaurant } = props;
  var reviews = restaurant.reviews;

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="google-container">
          <h3>
            GOOGLE REVIEWS 4.1
            <StarRatings
              starRatedColor="#101820"
              rating={5}
              starDimension="15px"
              starSpacing="2px"
            />
          </h3>

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
