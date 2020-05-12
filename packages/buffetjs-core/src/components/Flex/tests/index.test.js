import React from 'react';
import renderer from 'react-test-renderer';
import Flex from '../index';

describe('<Flex />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Flex />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
