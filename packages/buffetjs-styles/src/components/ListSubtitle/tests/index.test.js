import React from 'react';
import { shallow } from 'enzyme';

import ListSubtitle from '../index';

const renderComponent = () => shallow(<ListSubtitle />);

describe('<ListSubtitle />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
