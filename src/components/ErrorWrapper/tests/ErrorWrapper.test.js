import React from 'react';
import { mount } from 'enzyme';

import ErrorWrapper from '../index';

let renderedComponent;
const defaultProps = { type: 'text' };
const renderComponent = (props = defaultProps) =>
  mount(<ErrorWrapper {...props} />);
const Child = () => <div>I am a child</div>;

describe('<ErrorWrapper />', () => {
  it('should not render any children', () => {
    renderedComponent = renderComponent();
    const wrapper = renderedComponent.find(ErrorWrapper);
    const state = wrapper.state();

    expect(state.hasInitialValue).toBeFalsy();
    expect(state.error).toBeFalsy();
    expect(state.errorMessage).toEqual('');
    expect(wrapper.children()).toHaveLength(0);
  });

  it('should render a child if given', () => {
    renderedComponent = renderComponent({ children: () => <Child /> });
    const wrapper = renderedComponent.find(ErrorWrapper);

    expect(wrapper.find(Child).exists()).toBe(true);
  });

  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should not setError if the input is initially empty', () => {
    const props = Object.assign(defaultProps, { value: '' });

    renderedComponent = renderComponent(props);

    const wrapper = renderedComponent.find(ErrorWrapper);
    // const spyOnBlur = jest.spyOn(wrapper.instance(), 'handleBlur');
    const spyOnSetError = jest.spyOn(wrapper.instance(), 'setError');
    const e = { target: { value: '' } };
    wrapper.instance().forceUpdate();

    expect(wrapper.state().hasInitialValue).toBeFalsy();
    wrapper.instance().handleBlur(e);

    expect(spyOnSetError).not.toHaveBeenCalled();
  });

  it('should call the onBlur prop', () => {
    let didCall = false;
    const e = { target: { value: '' } };
    const onBlur = () => {
      didCall = true;
    };
    const props = Object.assign(defaultProps, { value: '', onBlur });

    renderedComponent = renderComponent(props);

    const wrapper = renderedComponent.find(ErrorWrapper);

    expect(wrapper.state().hasInitialValue).toBeFalsy();

    wrapper.instance().handleBlur(e);

    expect(didCall).toEqual(true);
  });

  it('should set the required error', () => {
    const props = {
      onBlur: false,
      translatedErrors: {
        required: 'Required'
      },
      type: 'text',
      value: '1',
      validations: { required: true }
    };
    const e = { target: { value: '' } };

    renderedComponent = renderComponent(props);

    const wrapper = renderedComponent.find(ErrorWrapper);
    const state = wrapper.state();

    expect(state.hasInitialValue).toEqual(true);
    expect(state.error).toEqual(false);

    wrapper.instance().handleBlur(e);

    expect(wrapper.state().error).toEqual(true);
    expect(wrapper.state().errorMessage).toEqual('Required');
  });

  it('should set the error but no msg', () => {
    const props = {
      onBlur: false,
      translatedErrors: {},
      type: 'text',
      value: '1',
      validations: { required: true }
    };
    const e = { target: { value: '' } };

    renderedComponent = renderComponent(props);

    const wrapper = renderedComponent.find(ErrorWrapper);
    const state = wrapper.state();

    expect(state.hasInitialValue).toEqual(true);
    expect(state.error).toEqual(false);

    wrapper.instance().handleBlur(e);

    setTimeout(() => {
      expect(wrapper.state().error).toEqual(true);
      expect(wrapper.state().errorMessage).toEqual('');
    }, 250);
  });

  it('should update the state on new value', () => {
    const props = {
      didCheckErrors: false,
      error: false,
      type: 'text',
      value: ''
    };

    renderedComponent = mount(<ErrorWrapper {...props} />);

    const wrapper = renderedComponent.find(ErrorWrapper);
    const state = wrapper.state();

    expect(state.hasInitialValue).toEqual(false);
    expect(state.error).toEqual(false);
    expect(state.errorMessage).toEqual('');

    renderedComponent.setProps({ value: '1' });

    setTimeout(() => {
      expect(state.hasInitialValue).toBe(true);
    }, 250);

    renderedComponent.setProps({
      didCheckErrors: true,
      error: true,
      errorMessage: 'error'
    });

    setTimeout(() => {
      expect(state.error).toBe(true);
      expect(state.errorMessage).toEqual('error');
    }, 250);

    renderedComponent.setProps({
      didCheckErrors: false,
      error: false,
      errorMessage: 'error'
    });

    setTimeout(() => {
      expect(state.error).toBe(false);
      expect(state.errorMessage).toEqual('');
    }, 250);
  });
});
