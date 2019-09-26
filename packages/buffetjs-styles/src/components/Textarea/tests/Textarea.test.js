import React from 'react';
import { shallow } from 'enzyme';

import Textarea from '../index';

const renderComponent = () => {
  const wrapper = shallow(<Textarea />);

  return wrapper;
};

describe('<Textarea />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
