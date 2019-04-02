import React from 'react';
import { mount } from 'enzyme';

import Enumeration from '../index';

const defaultProps = {
  name: 'enumeration',
  type: 'radio',
  options: ['first', 'second', 'third'],
};
const renderComponent = (props = defaultProps) => {
  const wrapper = mount(<Enumeration {...props} />);

  return wrapper;
};

describe('<Enumeration />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should send a string', () => {
    const onChange = jest.fn();
    const value = 'second';
    const renderedComponent = renderComponent({
      ...defaultProps,
      onChange,
      value,
    });
    const element = renderedComponent.find('input').first();

    element.simulate('change');
    const expected = {
      target: {
        name: 'enumeration',
        type: 'radio',
        value: 'first',
      },
    };
    expect(onChange).toHaveBeenLastCalledWith(expected);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Enumeration;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
