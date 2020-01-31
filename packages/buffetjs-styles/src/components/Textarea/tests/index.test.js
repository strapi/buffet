import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Textarea from '../index';

const renderComponent = () => {
  const wrapper = shallow(<Textarea />);

  return wrapper;
};

describe('<Textarea />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should match the snapshot when empty', () => {
    const tree = renderer
      .create(<Textarea placeholder="Write a short description" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot when not empty', () => {
    const tree = renderer
      .create(<Textarea value="Short description" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
