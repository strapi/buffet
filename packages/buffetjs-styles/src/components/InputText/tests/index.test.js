import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import InputText from '../index';

import sizes from '../../../assets/styles/sizes';

const renderComponent = () => shallow(<InputText />);

describe('<InputText />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  describe('<InputText /> style', () => {
    it('should render left icon space if type is search', () => {
      const tree = renderer.create(<InputText type="search" />).toJSON();
      expect(tree).toHaveStyleRule(
        'padding-left',
        `calc(${sizes.input.height} + ${sizes.input.padding})`
      );
    });
    it('should render left icon space if type is email', () => {
      const tree = renderer.create(<InputText type="email" />).toJSON();
      expect(tree).toHaveStyleRule(
        'padding-left',
        `calc(${sizes.input.height} + ${sizes.input.padding})`
      );
    });
    it('should render right icon space if type is password', () => {
      const tree = renderer.create(<InputText type="password" />).toJSON();
      expect(tree).toHaveStyleRule(
        'padding-right',
        `calc(${sizes.input.height} + ${sizes.input.padding})`
      );
    });
  });
});
