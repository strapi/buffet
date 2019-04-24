import React from 'react';
import { shallow } from 'enzyme';

import GlobalStyles from '../index';

const renderComponent = () => shallow(<GlobalStyles />);

describe('<GlobalStyles />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
