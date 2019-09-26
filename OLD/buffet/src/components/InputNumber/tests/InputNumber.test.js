import React from 'react';
import { mount } from 'enzyme';
import RcInputNumber from 'rc-input-number';

import InputNumber from '../index';

let renderedComponent;

const initProps = { name: 'inputNumber' };
const renderComponent = (props = initProps) =>
  mount(<InputNumber {...props} />);

describe('<InputNumber />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should be rendered', () => {
    renderedComponent = renderComponent();

    const wrapper = renderedComponent.find(InputNumber);

    expect(wrapper.exists()).toBe(true);
  });

  it('should call the onChange', () => {
    const onChange = jest.fn(() => 'handleChange');
    renderedComponent = renderComponent({
      name: 'inputNumber',
      onChange,
      value: 1,
    });

    const wrapper = renderedComponent.find(InputNumber);
    const rcInput = wrapper.find(RcInputNumber);

    rcInput.prop('onChange')(2);

    expect(wrapper.props().onChange).toHaveBeenCalledWith({
      target: { id: null, name: 'inputNumber', type: 'number', value: 2 },
    });
  });
});
