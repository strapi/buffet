import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
/* eslint-disable */

import InputBase from '../index';
import InputIcon from '../../InputIcon';

const defaultProps = {
  type: 'text'
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

  it('should have a default type equals to button', () => {
    const defaultType = 'search';
    const props = Object.assign(defaultProps, { type: defaultType });
    const wrapper = renderComponent(props);
    expect(wrapper.find(InputIcon).exists()).toBe(true);
  });
});