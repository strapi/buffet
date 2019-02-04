import React from 'react';
/* eslint-disable */
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { StyledButton } from '../index';
import colors from '../../../assets/styles/Colors';

describe('<StyledButton />', () => {
  describe('<StyledButton /> attributes', () => {
    it('should render an <button> tag', () => {
      const wrapper = mount(<StyledButton />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.type()).toEqual('button');
    });

    it('should have a className attribute', () => {
      const wrapper = mount(<StyledButton />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const wrapper = mount(<StyledButton id={id} />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const wrapper = mount(<StyledButton attribute="test" />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });

    it('should adopt a default type button', () => {
      const wrapper = mount(<StyledButton />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.prop('type')).toEqual('button');
    });

    it('should adopt a type submit', () => {
      const wrapper = mount(<StyledButton type="submit" />);
      const renderedComponent = enzymeFind(wrapper, StyledButton);
      expect(renderedComponent.prop('type')).toEqual('submit');
    });
  });

  describe('<StyledButton /> icons', () => {
    it('should render the add icon', () => {
      const tree = renderer.create(<StyledButton icon="add" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the add back', () => {
      const tree = renderer.create(<StyledButton icon="back" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the add trash', () => {
      const tree = renderer.create(<StyledButton icon="trash" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the primary style', () => {
      const tree = renderer.create(<StyledButton color="primary" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.white);
    });

    it('should render the secondary style', () => {
      const tree = renderer.create(<StyledButton color="secondary" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.darkBlue);
    });

    it('should render the cancel style', () => {
      const tree = renderer.create(<StyledButton color="cancel" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.mediumGrey);
    });

    it('should render the delete style', () => {
      const tree = renderer.create(<StyledButton color="delete" />).toJSON();
      expect(tree).toHaveStyleRule('color', colors.darkOrange);
    });
  });
});
