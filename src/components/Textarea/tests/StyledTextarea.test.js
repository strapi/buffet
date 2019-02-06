import React from 'react';
import { mount } from 'enzyme';

import Textarea from '../index';

let renderedComponent;
const renderComponent = (props = {}) => mount(<Textarea {...props} />);

describe('<Textarea />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('Expect to have unit tests specified', () => {
    renderedComponent = renderComponent();
    expect(renderedComponent.at(0).prop('placeholder')).toBe(null);
  });
});
