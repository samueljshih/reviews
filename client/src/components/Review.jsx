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
        <div className="reviewText">
          <div />
          <div className="star">
            <svg x="0px" y="0px" viewBox="25 6 74 13">
              <g id="Symbols">
                <g
                  id="Google-Reviews"
                  transform="translate(-207.000000, -170.000000)"
                >
                  <g
                    id="ic_5stars"
                    transform="translate(167.783383, 81.050003)"
                  >
                    <polygon
                      id="Imported-Layers"
                      fill="#101820"
                      points="75.2,107.7 73.7,103 77.7,100.2 72.8,100.2 71.2,95.2 69.6,100.2 64.7,100.2
        68.7,103 67.2,107.7 71.2,104.8"
                    />
                    <polygon
                      fill="#101820"
                      points="90.2,107.7 88.7,103 92.7,100.2 87.8,100.2 86.2,95.2 84.6,100.2
        79.7,100.2 83.7,103 82.2,107.7 86.2,104.8"
                    />
                    <polygon
                      fill="#101820"
                      points="105.2,107.7 103.7,103 107.7,100.2 102.8,100.2 101.2,95.2
        99.6,100.2 94.7,100.2 98.7,103 97.2,107.7 101.2,104.8"
                    />
                    <polygon
                      fill="#101820"
                      points="120.2,107.7 118.7,103 122.7,100.2 117.8,100.2 116.2,95.2
        114.6,100.2 109.7,100.2 113.7,103 112.2,107.7 116.2,104.8"
                    />
                    <polygon
                      fill="#101820"
                      points="135.2,107.7 133.7,103 137.7,100.2 132.8,100.2 131.2,95.2
        129.6,100.2 124.7,100.2 128.7,103 127.2,107.7 131.2,104.8"
                    />
                  </g>
                </g>
              </g>
            </svg>
            {/* <svg>
              <polygon
                fill="#101820"
                points="75.2,107.7 73.7,103 77.7,100.2 72.8,100.2 71.2,95.2 69.6,100.2 64.7,100.2
        68.7,103 67.2,107.7 71.2,104.8"
              />
            </svg> */}
            {review}
          </div>
        </div>
        <div className="reviewText">{review}</div>
      </div>
    </div>
  );
};

export default Review;
