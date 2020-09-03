import React from 'react';
import { mount } from 'enzyme';

import Enumeration from '../index';

const defaultProps = {
  name: 'enumeration',
  type: 'radio',
  options: [
    {
      value: 'first',
      label: 'first option',
    },
    {
      value: 'second',
      label: 'second option',
    },
    {
      value: 'third',
      label: 'third option',
    },
  ],
};
const renderComponent = (props = defaultProps) =>
  mount(<Enumeration {...props} />);

describe('<Enumeration />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should not crash', () => {
    renderComponent();
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Enumeration;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
