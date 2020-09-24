import React from 'react';
import { mount } from 'enzyme';

import IconLinks from '../index';

describe('<IconLinks />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(<IconLinks />);
  });

  it('Should render some icons', () => {
    const icons = [{ icon: 'trash', onClick: jest.fn() }];
    const renderedComponent = mount(<IconLinks links={icons} />);
    const buttons = renderedComponent.find('button');

    buttons.at(0).simulate('click');

    expect(icons[0].onClick).toHaveBeenCalled();
    expect(buttons.at(0).find('svg').prop('className')).toContain('trash');
  });
});
