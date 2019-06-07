import React from 'react';
import { shallow } from 'enzyme';

import NavTabs from '../index';
import StyledTab from '../../../styled/Tab';

describe('<NavTabs />', () => {
  it('It should not crash', () => {
    shallow(<NavTabs />);
  });

  it('Should handle a custom component correctly', () => {
    const Custom = () => <span>Custom Component</span>;
    const links = [
      {
        to: '/',
        compo: <Custom />,
      },
    ];
    const renderedComponent = shallow(<NavTabs links={links} />);
    const tab = renderedComponent.find(StyledTab);

    expect(tab).toHaveLength(1);
    expect(tab.at(0).find(Custom)).toHaveLength(1);
  });
});
