import React from 'react';
import { shallow } from 'enzyme';

import Label from '../index';

const renderComponent = () => shallow(<Label />);

describe('<Label />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
