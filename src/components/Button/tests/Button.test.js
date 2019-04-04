import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Button from '../index';
// import StyledButton from '../../../styled/Button';

let renderedComponent;
const renderComponent = (props = {}, children = null) =>
  mount(<Button {...props}>{children}</Button>);

describe('<Button />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  // it('should have a default type equals to button', () => {
  //   renderedComponent = renderComponent();
  //   const defaultType = 'button';
  //   const wrapper = renderedComponent.find(Button);
  //   expect(wrapper.find(StyledButton).exists()).toBe(true);
  //   expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
  // });

  it('should render a child', () => {
    const Child = () => <span>child</span>;
    renderedComponent = renderComponent({}, <Child />);
    const wrapper = renderedComponent.find(Button);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(Child).exists()).toBe(true);
  });

  // it('should display a label', () => {
  //   renderedComponent = renderComponent({ label: 'Label' });
  //   const wrapper = renderedComponent.find(Button);
  //   expect(wrapper.text()).toBe('Label');
  // });
});
