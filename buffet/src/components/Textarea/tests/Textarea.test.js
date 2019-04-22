import React from 'react';
import { mount } from 'enzyme';

import Textarea from '../index';

let renderedComponent;
const renderComponent = (props = { name: 'textarea', value: '' }) =>
  mount(<Textarea {...props} />);

describe('<Textarea />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should have a placeholder null if not specified', () => {
    renderedComponent = renderComponent();
    expect(renderedComponent.at(0).prop('placeholder')).toBe(null);
  });
});
