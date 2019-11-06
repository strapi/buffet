import React from 'react';
import { mount } from 'enzyme';
import { HeaderTitle } from '@buffetjs/core';

import Header from '../index';

const defaultProps = {
  title: { label: 'Restaurant', cta: { icon: 'fa fa-pen', onClick: () => {} } },
  content: 'restaurant description',
  callToAction: [],
};
const renderComponent = (props = defaultProps) => mount(<Header {...props} />);

describe('<Header />', () => {
  it('should not crash', () => {
    renderComponent();
  });
  it('should render title and subtitle', () => {
    const compo = renderComponent();
    const titles = compo.find('.header-title');

    const title = titles.find(HeaderTitle);
    expect(title.contains('Restaurant')).toEqual(true);

    const subtitle = titles.find('p');
    expect(subtitle.text()).toEqual('restaurant description');
  });
});
