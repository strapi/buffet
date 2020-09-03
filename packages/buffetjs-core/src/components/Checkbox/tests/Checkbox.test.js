import React from 'react';
import { mount } from 'enzyme';

import Checkbox from '../index';

const defaultProps = {
  type: 'checkbox',
  name: 'checkbox',
  onChange: jest.fn(),
};
const renderComponent = (props = defaultProps) =>
  mount(<Checkbox {...props} />);

describe('<Checkbox />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should not crash', () => {
    renderComponent();
  });

  it('should send a boolean', () => {
    const onChange = jest.fn();
    const value = false;
    const renderedComponent = renderComponent({
      ...defaultProps,
      onChange,
      value,
    });
    const element = renderedComponent.find('input');

    element.simulate('change');
    const expected = {
      target: {
        name: 'checkbox',
        type: 'checkbox',
        value: true,
      },
    };
    expect(onChange).toHaveBeenLastCalledWith(expected);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Checkbox;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
