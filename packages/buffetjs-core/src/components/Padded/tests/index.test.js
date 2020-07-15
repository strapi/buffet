import React from 'react';
import renderer from 'react-test-renderer';
import Padded from '../index';

describe('<Padded />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Padded />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
