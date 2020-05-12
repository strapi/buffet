import React from 'react';
import renderer from 'react-test-renderer';
import PickerSection from '../PickerSection';

describe('<PickerSection />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<PickerSection />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
