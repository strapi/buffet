import React from 'react';
import { mount } from 'enzyme';

import Checkbox from '../index';

const defaultProps = {
  type: 'checkbox',
  name: 'checkbox',
};
const renderComponent = (props = defaultProps) => {
  const wrapper = mount(<Checkbox {...props} />);

  return wrapper;
};

describe('<Checkbox />', () => {
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
});
