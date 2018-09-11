var React = require('react');
var App = require('../components/App.jsx');
var { shallow } = require('enzyme');

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Zagat</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
