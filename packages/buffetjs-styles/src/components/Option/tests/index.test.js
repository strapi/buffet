import React from 'react';
import renderer from 'react-test-renderer';
import Option from '../index';

describe('<Option />', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Option />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
