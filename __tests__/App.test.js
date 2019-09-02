import { shallow, mount } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Tests from '../client/src/setupTests.js';
import sinon from 'sinon';

describe("App", () => {
  test("it properly renders", () => {
    const app = shallow(<App />);
    expect(app.getElements()).toMatchSnapshot();
  });

  test("it calls componentDidMount", () => {
    var spy = sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled;
  });

})