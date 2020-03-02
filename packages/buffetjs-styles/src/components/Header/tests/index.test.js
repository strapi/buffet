import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from '../index';

const renderComponent = () => shallow(<Header />);

describe('<Header />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
