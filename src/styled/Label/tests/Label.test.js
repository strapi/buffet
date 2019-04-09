import React from 'react';
import { shallow } from 'enzyme';

import Label from '../index';

const renderComponent = () => {
  const wrapper = shallow(<Label />);

  return wrapper;
};

describe('<Label />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
