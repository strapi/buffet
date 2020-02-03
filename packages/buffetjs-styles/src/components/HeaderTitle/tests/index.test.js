import React from 'react';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

import HeaderTitle from '../index';

const renderComponent = () => shallow(<HeaderTitle />);

describe('<HeaderTitle />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('snapshot', () => {
    const tree = renderer.create(<HeaderTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
