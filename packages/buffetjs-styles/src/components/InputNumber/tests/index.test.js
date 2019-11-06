import React from 'react';
import { shallow } from 'enzyme';

import InputNumber from '../index';

const renderComponent = () => shallow(<InputNumber />);

describe('<InputNumber />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
