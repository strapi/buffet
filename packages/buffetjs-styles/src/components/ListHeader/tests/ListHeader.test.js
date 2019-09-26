import React from 'react';
import { shallow } from 'enzyme';

import ListHeader from '../index';

const renderComponent = () => shallow(<ListHeader />);

describe('<ListHeader />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
