import React from 'react';
import { shallow } from 'enzyme';

import ListCard from '../index';

const renderComponent = () => shallow(<ListCard />);

describe('<ListCard />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
