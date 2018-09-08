import React from 'react';
import moment from 'moment';

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
          <div>
            {/* {' '}
            <svg>
              <polygon
                height="210"
                width="500"
                fill="#101820"
                points="75.2,107.7 73.7,103 77.7,100.2 72.8,100.2 71.2,95.2 69.6,100.2 64.7,100.2
        68.7,103 67.2,107.7 71.2,104.8"
              />
            </svg> */}
            {review}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
