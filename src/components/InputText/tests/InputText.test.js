import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import InputText from '../index';
import sizes from '../../../assets/styles/sizes';

let renderedComponent;
const initProps = {
  name: 'inputText',
  value: '',
};
const renderComponent = (props = initProps) => mount(<InputText {...props} />);

describe('<InputText />', () => {
  describe('<InputText /> attributes', () => {
    afterEach(() => {
      renderedComponent.unmount();
    });

    it('should have a default type equals to text', () => {
      renderedComponent = renderComponent({ ...initProps, type: 'text' });
      const defaultType = 'text';
      expect(renderedComponent.at(0).prop('type')).toBe(defaultType);
    });
  });

  describe('<InputText /> style', () => {
    it('should render left icon space', () => {
      const tree = renderer
        .create(<InputText {...initProps} type="search" />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'padding-left',
        `calc(${sizes.input.height} + ${sizes.input.padding})`
      );
    });
  });
});
