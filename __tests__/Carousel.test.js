import { shallow } from 'enzyme';
import React from 'react';
import Tests from '../client/src/setupTests.js';
import Carousel from '../client/src/components/Carousel.jsx';
import App from '../client/src/components/App.jsx';

describe('Carousel component', () => {
  //it should hold 25 photos
  it('should hold 25 photos', () => {

  });

  //renders a Carousel component
  it('renders correctly', () => {
    const images = ['randomImage1', 'randomImage2'];
    const carousel = shallow(<Carousel images={images} />);
    expect(carousel).toMatchSnapshot();
  });

  it('should hold images', () => {
    const images = ['randomImage1', 'randomImage2'];
    const carousel = shallow(<Carousel photos={images} />)
    expect(carousel).toMatchSnapshot();
  });


});