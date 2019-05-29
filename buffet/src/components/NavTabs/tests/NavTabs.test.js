import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
import StyledTab from '../../../styled/Tab';
import NavTabs from '../index';

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
