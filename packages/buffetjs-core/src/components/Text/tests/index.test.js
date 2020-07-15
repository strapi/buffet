import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../index';

describe('<Text />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Text />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
