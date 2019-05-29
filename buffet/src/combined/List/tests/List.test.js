import React from 'react';
import { mount } from 'enzyme';

import List from '../index';

describe('<List />', () => {
  // Simple test to make sure that the sub components are working correctly
  it('It should not crash', () => {
    mount(<List />);
  });
});
