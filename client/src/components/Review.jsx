import React from 'react';

// {
//   image:
//     'https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg',
//   name: 'Geovanny Collins',
//   date: '2018-09-06T12:26:12.756Z',
//   starRating: 1,
//   review:
//     'Quo facere rerum doloremque pariatur exercitationem. Architecto voluptatem eligendi. Quia voluptatem tenetur delectus consectetur aut tenetur enim minus nesciunt.'
// }

const Review = props => {
  const { image, name, date, starRating, review } = props.review;
  return (
    <div className="reviews">
      <img src={image} height="42" width="42" className="reviewImage" />
      <div className="reviewDetails">
        <div className="reviewName">{name}</div>
        <div className="reviewDate">{Date.parse(date)}</div>
        <div className="reviewText">{review}</div>
      </div>
      <hr />
    </div>
  );
};

export default Review;
