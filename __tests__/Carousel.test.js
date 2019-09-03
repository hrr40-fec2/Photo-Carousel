/**
 * @jest-environment jsdom
 */

import { shallow } from 'enzyme';
import React from 'react';
import Tests from '../client/src/setupTests.js';
import Carousel from '../client/src/components/Carousel.jsx';
import App from '../client/src/components/App.jsx';

describe('Carousel component', () => {
  const clickFn = jest.fn();

  test('renders correctly', () => {
    const images = ['randomImage1', 'randomImage2'];
    const carousel = shallow(<Carousel photos={images} />);
    expect(carousel).toMatchSnapshot();
    expect(carousel.find('h1').text()).toBe('Photos');
    expect(carousel.find('NextArrow').exists()).toBe(true);
    expect(carousel.find('PrevArrow')exists()).toBe(true);
  });

  test('should hold images', () => {
    const images = ['randomImage1', 'randomImage2', 'randomImage3', 'randomImage4'];
    const carousel = shallow(<Carousel photos={images} />);
    expect(carousel).toMatchSnapshot();
  });

  test('buttons work', () => {
    const component = shallow(< Carousel />);

    component
      .find('button')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });


});