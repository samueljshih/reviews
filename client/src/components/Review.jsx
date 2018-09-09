import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';

const Review = props => {
  const { image, name, date, starRating, review } = props.review;
  var parsedDate = Date.parse(date);
  return (
    <div className="reviews">
      <div className="imageContainer">
        <a href="#">
          <img src={image} height="42" width="42" className="reviewImage" />
        </a>
      </div>
      <div className="reviewDetails">
        <div className="reviewName">{name}</div>
        <div className="reviewDate">
          {moment(parsedDate).format('MMMM Do YYYY')}
        </div>
        <div className="reviewText">
          <div />
          <div className="star">
            <StarRatings
              starRatedColor="#101820"
              rating={5}
              starDimension="15px"
              starSpacing="2px"
            />

            {review}
          </div>
        </div>
        <div className="reviewText">{review}</div>
      </div>
    </div>
  );
};

export default Review;
