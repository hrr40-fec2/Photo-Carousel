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
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.proptype.componentDidMount).to.have.property('callCount', 1);
    expect(wrapper.state().length).toBe(25);
  });

})