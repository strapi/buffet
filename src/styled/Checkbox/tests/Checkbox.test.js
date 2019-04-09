import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Checkbox from '../index';

const renderComponent = () => {
  const wrapper = shallow(<Checkbox />);

  return wrapper;
};

describe('<Checkbox />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
