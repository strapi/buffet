import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import StyledInputText from '../index';
import sizes from '../../../assets/styles/sizes';

let renderedComponent;
const renderComponent = (props = {}) => mount(<StyledInputText {...props} />);

describe('<StyledInputText />', () => {
  describe('<StyledInputText /> attributes', () => {
    afterEach(() => {
      renderedComponent.unmount();
    });
    it('should have a default type equals to text', () => {
      renderedComponent = renderComponent({ type: 'text' });
      const defaultType = 'text';
      expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
    });
  });

  describe('<StyledInputText /> style', () => {
    it('should render left icon space', () => {
      const tree = renderer.create(<StyledInputText type="search" />).toJSON();
      expect(tree).toHaveStyleRule(
        'padding-left',
        `calc(${sizes.input.height} + ${sizes.input.padding})`
      );
    });
  });
});
