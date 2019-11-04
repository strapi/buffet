import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import HeaderActions from '../index';

const renderComponent = () => shallow(<HeaderActions />);

describe('<HeaderActions />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('snapshot', () => {
    const tree = renderer.create(<HeaderActions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
