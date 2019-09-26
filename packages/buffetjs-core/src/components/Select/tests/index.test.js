import React from 'react';
import { mount } from 'enzyme';

import Select from '../index';

const initProps = {
  name: 'inputSelect',
  onChange: jest.fn(),
  value: '',
};
let renderedComponent;
const renderComponent = (props = initProps) => mount(<Select {...props} />);

describe('<Select />', () => {
  afterEach(() => {
    renderedComponent.unmount();
  });

  it('Should render the component with no errors', () => {
    renderedComponent = renderComponent();
    const wrapper = renderedComponent.find(Select);

    expect(wrapper.exists()).toBe(true);
  });

  it('Testing options prop with an array of string', () => {
    const options = ['option 1', 'option 2'];

    renderedComponent = renderComponent({ ...initProps, options });

    const wrapper = renderedComponent.find(Select);
    const optionsElements = wrapper.find('option');

    expect(optionsElements).toHaveLength(2);
    expect(optionsElements.first().text()).toBe('option 1');
    expect(optionsElements.last().text()).toBe('option 2');
  });

  it('Testing options prop with an array of objects [{ label, value }]', () => {
    const options = [
      {
        label: 'option 1',
        value: 'option1',
      },
      {
        label: 'option 2',
        value: 'option2',
      },
    ];

    renderedComponent = renderComponent({ ...initProps, options });

    const wrapper = renderedComponent.find(Select);
    const optionsElements = wrapper.find('option');

    expect(optionsElements).toHaveLength(2);
    expect(optionsElements.first().text()).toBe('option 1');
    expect(optionsElements.last().text()).toBe('option 2');
  });

  it('Should render the options with an array of React Nodes', () => {
    const first = (
      <option key="first" value="first">
        First
      </option>
    );
    const second = (
      <option key="second" value="second">
        Second
      </option>
    );
    const options = [first, second];

    renderedComponent = renderComponent({ ...initProps, options });

    const wrapper = renderedComponent.find(Select);
    const optionsElements = wrapper.find('option');

    expect(wrapper.find(first)).toBeDefined();
    expect(wrapper.find(second)).toBeDefined();
    expect(optionsElements).toHaveLength(2);
    expect(optionsElements.first().text()).toBe('First');
    expect(optionsElements.last().text()).toBe('Second');
  });
});
