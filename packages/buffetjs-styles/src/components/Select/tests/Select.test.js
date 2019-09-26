import React from 'react';
import { shallow } from 'enzyme';

import Select from '../index';

const renderComponent = () => shallow(<Select />);

describe('<Select />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
