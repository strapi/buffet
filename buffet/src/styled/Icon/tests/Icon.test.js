import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from '../index';

let renderedComponent;
const renderComponent = (props = {}) => mount(<Icon {...props} />);

describe('<Icon />', () => {
  describe('<Icon /> attributes', () => {
    afterEach(() => {
      renderedComponent.unmount();
    });

    it('should have a default type equals to search', () => {
      renderedComponent = renderComponent({ type: 'search' });
      const defaultType = 'search';
      expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
    });
  });
  describe('<Icon /> icon attributes', () => {
    it('should render the search icon', () => {
      const tree = renderer.create(<Icon type="search" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the email icon', () => {
      const tree = renderer.create(<Icon type="email" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the password icon', () => {
      const tree = renderer.create(<Icon type="password" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
