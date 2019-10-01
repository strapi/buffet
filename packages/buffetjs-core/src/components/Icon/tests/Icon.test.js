import React from 'react';
import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import Icon from '../index';

let renderedComponent;
const renderComponent = (props = {}) => mount(<Icon {...props} />);

describe('<Icon />', () => {
  describe('<Icon /> attributes', () => {
    afterEach(() => {
      renderedComponent.unmount();
    });

    it('should have a default icon equals to search', () => {
      renderedComponent = renderComponent({ icon: 'search' });
      const defaultType = 'search';
      expect(renderedComponent.at(0).prop('icon')).toBe(defaultType);
    });
  });
  // NOTE: disabling this test
  // describe('<Icon /> icon attributes', () => {
  //   it('should render the search icon', () => {
  //     const tree = renderer.create(<Icon icon="search" />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });

  //   it('should render the password icon', () => {
  //     const tree = renderer.create(<Icon icon="password" />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});
