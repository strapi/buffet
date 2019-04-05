import React from 'react';
import { shallow } from 'enzyme';

import GlobalStyles from '../index';

const renderComponent = () => {
  const wrapper = shallow(<GlobalStyles />);

  return wrapper;
};

describe('<GlobalStyles />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
