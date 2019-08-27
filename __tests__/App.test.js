import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Tests from '../client/src/setupTests.js';

describe("App", () => {
  test("it properly renders", () => {
    shallow(<App />);
  });
})