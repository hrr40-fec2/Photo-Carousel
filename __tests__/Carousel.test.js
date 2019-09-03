/**
 * @jest-environment jsdom
 */

import { shallow } from 'enzyme';
import React from 'react';
import Tests from '../client/src/setupTests.js';
import Carousel from '../client/src/components/Carousel.jsx';
import App from '../client/src/components/App.jsx';

const clickFn = jest.fn();

describe('Carousel component', () => {

  test('renders correctly', () => {
    const images = ['randomImage1', 'randomImage2'];
    const carousel = shallow(<Carousel photos={images} />);
    expect(carousel).toMatchSnapshot();
    expect(carousel.find('h1').text()).toBe('Photos');
  });

  test('should hold images', () => {
    const images = ['randomImage1', 'randomImage2', 'randomImage3', 'randomImage4'];
    const carousel = shallow(<Carousel photos={images} />);
    expect(carousel).toMatchSnapshot();
  });

});