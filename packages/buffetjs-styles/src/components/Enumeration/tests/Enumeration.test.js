import React from 'react';
import { shallow } from 'enzyme';

import Enumeration from '../index';

const renderComponent = () => shallow(<Enumeration />);

describe('<Enumeration />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
