import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Option from '../index';

describe('<Option />', () => {
  it('should not crash', () => {
    shallow(<Option />);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Option />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
