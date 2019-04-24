import React from 'react';
import { mount } from 'enzyme';

import TimeList from '../index';

const renderComponent = props => mount(<TimeList {...props} />);

describe('<TimeList />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should has displayed classname if isOpen props is true', () => {
    const renderedComponent = renderComponent({ isOpen: true });
    expect(renderedComponent.find('ul').hasClass('displayed')).toEqual(true);
  });
});
