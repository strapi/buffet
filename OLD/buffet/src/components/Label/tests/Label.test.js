import React from 'react';
import { mount } from 'enzyme';

import { isFunction } from 'lodash';
import Label from '../index';

let renderedComponent;
const renderComponent = (props = {}) => mount(<Label {...props} />);

describe('<Label />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('render the <Label /> with htmlFor props', () => {
    renderedComponent = renderComponent({ htmlFor: 'inputName' });
    expect(renderedComponent.at(0).prop('htmlFor')).toBe('inputName');
  });

  it('render the <Label /> with message props as a String', () => {
    renderedComponent = renderComponent({
      htmlFor: 'inputName',
      message: 'text',
    });

    expect(renderedComponent.prop('message')).toEqual('text');
  });

  it('render the <Label /> with message props as a function', () => {
    const messageFunc = () => 'text';
    renderedComponent = renderComponent({
      htmlFor: 'inputName',
      message: messageFunc,
    });
    expect(isFunction(renderedComponent.prop('message'))).toBe(true);
    expect(renderedComponent.prop('message')).toEqual(messageFunc);
  });
});
