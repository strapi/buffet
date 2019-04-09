import React from 'react';
import { shallow } from 'enzyme';

import Select from '../index';

const renderComponent = () => {
  const wrapper = shallow(<Select />);

  return wrapper;
};

describe('<Select />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
