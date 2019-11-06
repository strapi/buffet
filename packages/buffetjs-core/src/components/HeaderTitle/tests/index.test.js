import React from 'react';
import { mount } from 'enzyme';

import HeaderTitle from '../index';

const defaultProps = {};
const renderComponent = (props = defaultProps) =>
  mount(<HeaderTitle {...props} />);

describe('<HeaderTitle />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
