import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../index';

const renderComponent = () => shallow(<Checkbox />);

describe('<Checkbox />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
