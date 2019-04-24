import React from 'react';
import { mount } from 'enzyme';

import Tabs from '../index';

const renderComponent = props => mount(<Tabs {...props} />);

describe('<Tabs />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
