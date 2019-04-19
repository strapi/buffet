import React from 'react';
import { shallow } from 'enzyme';

import ListTitle from '../index';

const renderComponent = () => shallow(<ListTitle />);

describe('<ListTitle />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
