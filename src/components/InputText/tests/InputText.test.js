import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import InputText from '../index';

let renderedComponent;
const initProps = {
  name: 'inputText',
  value: '',
};
const renderComponent = (props = initProps) => mount(<InputText {...props} />);

describe('<InputText />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should have a default type equals to text', () => {
    renderedComponent = renderComponent({ ...initProps, type: 'text' });
    const defaultType = 'text';
    expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
  });
});
