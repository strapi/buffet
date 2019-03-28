import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
// import { enzymeFind } from 'styled-components/test-utils';

import DatePicker from '../index';

const initProps = { name: 'inputDate' };
const renderComponent = (props = initProps) => mount(<DatePicker {...props} />);

describe('<DatePicker />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should set the state if a value is given with a moment obj', () => {
    const value = moment();

    const wrapper = renderComponent({ ...initProps, value });

    expect(wrapper.state('date')).toEqual(value);
  });

  it('should set the state if a value is given with string date', () => {
    const value = '2019-03-25T17:14:01.192';

    const wrapper = renderComponent({ ...initProps, value });

    expect(wrapper.state('date')).toEqual(moment(value));
  });

  it('should set the state if no value is given and the withDefaultValue is true', () => {
    const wrapper = renderComponent({ ...initProps, withDefaultValue: true });

    expect(wrapper.state('date')).not.toBeNull();
  });

  it('should call the onChange props', () => {
    const onChange = jest.fn();
    const wrapper = renderComponent({ ...initProps, onChange });
    const updatedValue = moment('2019-03-25');
    const { handleDateChange } = wrapper.instance();

    handleDateChange(updatedValue);

    expect(onChange).toHaveBeenCalledWith({
      target: { name: 'inputDate', type: 'date', value: updatedValue },
    });
  });
});
