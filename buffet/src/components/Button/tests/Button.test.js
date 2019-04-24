import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Button from '../index';

let renderedComponent;
const renderComponent = (props = {}, children = null) =>
  mount(<Button {...props}>{children}</Button>);

describe('<Button />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should render a child', () => {
    const Child = () => <span>child</span>;
    renderedComponent = renderComponent({}, <Child />);
    const wrapper = renderedComponent.find(Button);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(Child).exists()).toBe(true);
  });
});
