import React from 'react';
import { mount } from 'enzyme';

import HeaderActions from '../index';

const defaultProps = {};
const renderComponent = (props = defaultProps) =>
  mount(<HeaderActions {...props} />);

describe('<HeaderActions />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should not crash', () => {
    renderComponent();
  });
});
