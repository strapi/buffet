import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import StyledInputIcon from '../index';

let renderedComponent;
const renderComponent = (props = {}) => mount(<StyledInputIcon {...props} />);

describe('<StyledInputIcon />', () => {
  describe('<StyledInputIcon /> attributes', () => {
    afterEach(() => {
      renderedComponent.unmount();
    });
    it('should have a default type equals to search', () => {
      renderedComponent = renderComponent({ type: 'search' });
      const defaultType = 'search';
      expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
    });
  });
  describe('<StyledInputIcon /> icon attributes', () => {
    it('should render the search icon', () => {
      const tree = renderer.create(<StyledInputIcon type="search" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the email icon', () => {
      const tree = renderer.create(<StyledInputIcon type="email" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the password icon', () => {
      const tree = renderer
        .create(<StyledInputIcon type="password" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
