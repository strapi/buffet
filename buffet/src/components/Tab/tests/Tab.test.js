import React from 'react';
import { mount } from 'enzyme';

import Tab from '../index';

const renderComponent = props => mount(<Tab {...props} />);

describe('<Tab />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
