import React from 'react';
import { mount } from 'enzyme';
import { HeaderTitle } from '@buffetjs/core';
import { LoadingBar } from '@buffetjs/styles';

import Header from '../index';

const defaultProps = {
  title: { label: 'Restaurant', cta: { icon: 'fa fa-pen', onClick: () => {} } },
  content: 'restaurant description',
  callToAction: [],
};
const renderComponent = (props = defaultProps) => mount(<Header {...props} />);

describe('<Header />', () => {
  // eslint-disable-next-line jest/expect-expect
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

  it('should not render a LoadingBar if isLoading is false', () => {
    const wrapper = renderComponent();

    expect(wrapper.find(LoadingBar).exists()).toEqual(false);
  });

  it('should render a LoadingBar if isLoading is true', () => {
    const wrapper = renderComponent({
      ...defaultProps,
      isLoading: true,
    });

    expect(wrapper.find(LoadingBar).exists()).toEqual(true);
  });
});
