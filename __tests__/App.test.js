/**
 * @jest-environment jsdom
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Tests from '../client/src/setupTests.js';



describe("App", () => {
  test("it properly renders", () => {
    const app = shallow(<App />);
    expect(app.getElements()).toMatchSnapshot();
  });

  test("should update state with images", () => {
    const wrapper = shallow(<App />).instance();
    wrapper.setState({
      images: ['randomImg1', 'randomImg2', 'randomImg3', 'randomImg4']
    });

    expect(wrapper.state.images.length).toBe(4);
    expect(wrapper.state.images[0]).toBe('randomImg1');
  });

});