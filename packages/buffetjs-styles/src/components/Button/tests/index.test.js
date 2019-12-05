import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../index';
import colors from '../../../assets/styles/colors';

describe('<Button />', () => {
  describe('<Button /> attributes', () => {
    it('should render an <button> tag', () => {
      const wrapper = mount(<Button />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.type()).toEqual('button');
    });

    it('should have a className attribute', () => {
      const wrapper = mount(<Button />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const wrapper = mount(<Button id={id} />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const wrapper = mount(<Button attribute="test" />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });

    it('should adopt a default type button', () => {
      const wrapper = mount(<Button />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.prop('type')).toEqual('button');
    });

    it('should adopt a type submit', () => {
      const wrapper = mount(<Button type="submit" />);
      const renderedComponent = enzymeFind(wrapper, Button);
      expect(renderedComponent.prop('type')).toEqual('submit');
    });
  });

  describe('<Button /> icons', () => {
    it('should render the add icon', () => {
      const tree = renderer.create(<Button icon="add" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render a custom icon', () => {
      const tree = renderer.create(<Button icon={<p>Icon</p>} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the add trash', () => {
      const tree = renderer.create(<Button icon="trash" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the primary style', () => {
      const tree = renderer.create(<Button color="primary" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.white);
    });

    it('should render the secondary style', () => {
      const tree = renderer.create(<Button color="secondary" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.blue);
    });

    it('should render the cancel style', () => {
      const tree = renderer.create(<Button color="cancel" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.brightGrey);
    });

    it('should render the success style', () => {
      const tree = renderer.create(<Button color="success" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.white);
    });

    it('should render the delete style', () => {
      const tree = renderer.create(<Button color="delete" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.white);
    });
  });
});
