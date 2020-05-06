import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import LoadingBar from '../index';

const renderComponent = () => shallow(<LoadingBar />);

describe('<LoadingBar />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  // Commenting it ATM
  // it('should match snapshot', () => {
  //   const tree = renderer.create(<LoadingBar />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
