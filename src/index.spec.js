/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// test file
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

const TestComponent = () => (
  <div>
    <p>Hello, Test</p>
  </div>
);

let wrapper;

describe('Component', () => {

  before(() => {
    wrapper = shallow(<TestComponent />);
  });

  it('should mount', () => {
    assert.isTrue(wrapper.exists());
  });
});
