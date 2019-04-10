import React from 'react';
import { shallow } from 'enzyme';

import Toggle from '../index';

const renderComponent = () => shallow(<Toggle />);

describe('<Toggle />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
