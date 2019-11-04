import React from 'react';
import { mount } from 'enzyme';

import Header from '../index';

const defaultProps = {
  title: <h1>Restaurant</h1>,
  content: <p>restaurant description</p>,
  callToAction: <div></div>,
};
const renderComponent = (props = defaultProps) => mount(<Header {...props} />);

describe('<Header />', () => {
  it('should not crash', () => {
    renderComponent();
  });
  it('should render title and subtitle', () => {
    const compo = renderComponent();
    const titles = compo.find('.header-title');
    const title = titles.find('h1');
    expect(title.text()).toEqual('Restaurant');
    const subtitle = titles.find('p');
    expect(subtitle.text()).toEqual('restaurant description');
  });
});
