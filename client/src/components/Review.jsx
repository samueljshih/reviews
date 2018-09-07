import React from 'react';
import moment from 'moment';

const Review = props => {
  const { image, name, date, starRating, review } = props.review;
  var parsedDate = Date.parse(date);
  return (
    <div className="reviews">
      <img src={image} height="42" width="42" className="reviewImage" />
      <div className="reviewDetails">
        <div className="reviewName">{name}</div>
        <div className="reviewDate">
          {moment(parsedDate).format('MMMM Do YYYY')}
        </div>
        <div className="reviewText">{review}</div>
      </div>
      <hr />
    </div>
  );
};

export default Review;
