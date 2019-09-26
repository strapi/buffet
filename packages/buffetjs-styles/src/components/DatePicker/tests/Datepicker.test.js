import React from 'react';
import { shallow } from 'enzyme';

import Datepicker from '../index';

const renderComponent = () => shallow(<Datepicker />);

describe('<Datepicker />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
