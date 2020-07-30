import React from 'react';
import { mount } from 'enzyme';

import Toggle from '../index';

const defaultProps = {
  name: 'toggle',
  type: 'checkbox',
};
const renderComponent = (props = defaultProps) => mount(<Toggle {...props} />);

describe('<Toggle />', () => {
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

    expect(onChange).toHaveBeenCalled();
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Toggle;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
