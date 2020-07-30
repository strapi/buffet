import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import { act } from 'react-dom/test-utils';
import { DatePicker, TimePicker } from '@buffetjs/core';

import DateTime from '../index';

describe('<DateTime />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(<DateTime name="datetime" value={null} />);
  });

  it('Should set the date with moment if a string value is given', () => {
    const value = '2019-03-25T17:14:01.192';
    const props = { name: 'datetime', value };
    const renderedComponent = mount(<DateTime {...props} />);
    const datepicker = renderedComponent.find(DatePicker);

    expect(datepicker.prop('value')).toEqual(moment(value));
  });

  it('Should not set the date with moment if a moment value is given', () => {
    const value = moment();
    const props = { name: 'datetime', value };
    const renderedComponent = mount(<DateTime {...props} />);
    const datepicker = renderedComponent.find(DatePicker);

    expect(datepicker.prop('value')).toEqual(value);
  });

  it('Should change the date and keep the current time', () => {
    const value = moment('2019-02-20');
    value.set('hour', 11);
    value.set('minute', 11);
    value.set('second', 11);

    const props = {
      name: 'datetime',
      onChange: jest.fn(),
      value,
    };
    const renderedComponent = mount(<DateTime {...props} />);
    const datepicker = renderedComponent.find(DatePicker);
    const updatedValue = moment('2019-03-20T10:10:10.000');

    act(() => {
      datepicker.props().onChange({ target: { value: updatedValue } }, value);
    });

    const expected = updatedValue
      .set('hour', 11)
      .set('minute', 11)
      .set('second', 11);

    expect(renderedComponent.prop('onChange')).toHaveBeenLastCalledWith({
      target: {
        name: 'datetime',
        type: 'datetime',
        value: expected,
      },
    });
  });

  it('Should change the time and not the date', () => {
    const value = moment('2019-02-20');
    value.set('hour', 11);
    value.set('minute', 11);
    value.set('second', 11);

    const props = {
      name: 'datetime',
      onChange: jest.fn(),
      value,
    };
    const renderedComponent = mount(<DateTime {...props} />);
    const timepicker = renderedComponent.find(TimePicker);

    const mock = { target: { value: '10' } };

    act(() => {
      timepicker.props().onChange(mock);
    });

    const expected = value.set('hour', 10).set('minute', 11).set('second', 11);

    expect(renderedComponent.prop('onChange')).toHaveBeenLastCalledWith({
      target: {
        name: 'datetime',
        type: 'datetime',
        value: expected,
      },
    });
  });
});
