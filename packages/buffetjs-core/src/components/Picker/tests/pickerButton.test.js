import React from 'react';
import renderer from 'react-test-renderer';
import PickerButton from '../PickerButton';

describe('<PickerButton />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<PickerButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
