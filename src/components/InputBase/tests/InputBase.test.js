import React from 'react';
import { mount } from 'enzyme';
import InputBase from '../index';

import InputIcon from '../../../styled/Icon';

const defaultProps = {
  type: 'text',
  name: 'inputText',
  value: '',
};
const renderComponent = (props = defaultProps) => {
  const wrapper = mount(<InputBase {...props} />);

  return wrapper;
};
describe('<InputBase />', () => {
  it('should change state on click', () => {
    const props = Object.assign(defaultProps, { type: 'password' });
    const wrapper = renderComponent(props);
    const toggle = wrapper.instance().handleClick;

    expect(wrapper.state().showPassword).toEqual(false);
    toggle();
    expect(wrapper.state().showPassword).toEqual(true);
  });

  it('the input should have the search icon if the type is search', () => {
    const defaultType = 'search';
    const props = Object.assign(defaultProps, { type: defaultType });
    const wrapper = renderComponent(props);
    expect(wrapper.find(InputIcon).exists()).toBe(true);
  });
});
