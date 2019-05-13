import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

const renderComponent = () => shallow(<Form />);

describe('<Form />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
