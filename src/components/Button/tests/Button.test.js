import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Button from '../index';

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const wrapper = mount(<Button />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should have a className attribute', () => {
    const wrapper = mount(<Button />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = mount(<Button id={id} />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(<Button attribute="test" />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
