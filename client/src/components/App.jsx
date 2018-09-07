import React from 'react';
import Reviews from './Reviews.jsx';

var restaurant = {
  name: 'Schneider - Heller',
  address: '510 Steve Harbors, Port Neoma, NV 98771, Togo ',
  phoneNumber: '1-477-437-2068 x02195',
  websiteURL: 'http://loren.info',
  getDirectionsURL:
    'https://www.google.com/maps/dir//37.776208,-122.4382592/@37.7761828,-122.5082486,12z',
  streetViewLink:
    'https://www.google.com/maps/@37.7761963,-122.4382348,0a,104.2y,-77.74h,80.62t/data=!3m4!1e1!3m2!1sAF1QipOz-PL_7FJDu2cb4sM9QK9rHb0w9J-jER6gukKJ!2e10?source=apiv3',
  openNow: {
    monday: '10:30 AM - 10:00 PM',
    tuesday: '10:30 AM - 10:00 PM',
    wednesday: '10:30 AM - 10:00 PM',
    thursday: '10:30 AM - 10:00 PM',
    friday: '10:30 AM - 10:00 PM',
    saturday: '10:30 AM - 11:00 PM',
    sunday: '10:30 AM - 10:00 PM'
  },
  reviews: [
    {
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg',
      name: 'Pauline Heidenreich',
      date: '2018-09-06T13:00:40.804Z',
      starRating: 2,
      review:
        'Et consequatur labore consectetur. Ratione cum quidem debitis rerum. Quas harum cupiditate. Ducimus similique ea sequi.'
    },
    {
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg',
      name: 'Rogelio Goldner',
      date: '2018-09-06T11:42:47.713Z',
      starRating: 1,
      review:
        'Voluptatum voluptas veniam nostrum. Et dolore facilis temporibus aut est. Ut quod et modi eius totam asperiores esse voluptas voluptas. Aperiam totam minus rerum atque qui est.'
    },
    {
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/markolschesky/128.jpg',
      name: 'Orion Kiehn',
      date: '2018-09-06T03:00:17.756Z',
      starRating: 5,
      review:
        'Quos dolore asperiores. Aut animi illum error placeat dolorum exercitationem ab tenetur. Delectus nostrum aut necessitatibus quisquam qui consequatur quia non molestiae. Inventore inventore iste qui dolore eum.'
    },
    {
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg',
      name: 'Geovanny Collins',
      date: '2018-09-06T12:26:12.756Z',
      starRating: 1,
      review:
        'Quo facere rerum doloremque pariatur exercitationem. Architecto voluptatem eligendi. Quia voluptatem tenetur delectus consectetur aut tenetur enim minus nesciunt.'
    },
    {
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg',
      name: 'Jazlyn Hilll',
      date: '2018-09-06T21:07:56.217Z',
      starRating: 1,
      review:
        'Eaque laborum molestias. Voluptatem nemo explicabo minus molestias voluptate voluptatibus dolorem aut. Inventore excepturi consequuntur officia ut necessitatibus suscipit sunt. Eum ut eum velit rerum.'
    }
  ]
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: restaurant
    };
  }
  render() {
    return (
      <div>
        <h1 className="logo">Zagat</h1>
        <Reviews restaurant={this.state.restaurant} />
      </div>
    );
  }
}

export default App;
