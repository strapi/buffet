import React from 'react';
import { mount } from 'enzyme';

import Textarea from '../index';

let renderedComponent;
const initProps = {
  name: 'textarea',
  onChange: jest.fn(),
  value: '',
};
const renderComponent = (props = initProps) => mount(<Textarea {...props} />);

describe('<Textarea />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should have a placeholder undefined if not specified', () => {
    renderedComponent = renderComponent();
    expect(renderedComponent.at(0).prop('placeholder')).toBe(undefined);
  });
});
