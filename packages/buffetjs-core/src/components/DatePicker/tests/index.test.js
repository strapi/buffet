import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import { DayPickerSingleDateController } from 'react-dates';
import { act, cleanup, render } from '@testing-library/react';

import InputText from '../../InputText';
import DatePicker from '../index';

jest.useFakeTimers();

const defaultProps = {
  type: 'date',
  name: 'date',
  onChange: jest.fn(),
};
const renderComponent = (props = defaultProps) =>
  mount(<DatePicker {...props} />);

describe('<DatePicker />', () => {
  afterEach(cleanup);

  // eslint-disable-next-line jest/expect-expect
  it('should not crash', () => {
    renderComponent();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<DatePicker {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render an input text', () => {
    const wrapper = renderComponent();

    const input = wrapper.find(InputText);
    expect(input).toHaveLength(1);
  });

  it('should render a date picker on input text click', () => {
    const onChange = jest.fn();

    const props = {
      ...defaultProps,
      onChange,
      value: moment(new Date(), 'YYYY-MM-DD'),
    };

    const wrapper = renderComponent(props);
    const input = wrapper.find('input');

    input.simulate('click');

    const datePicker = wrapper.find(DayPickerSingleDateController);

    expect(datePicker).toHaveLength(1);
  });

  it('should render onChange props on datepicker select', () => {
    const onChange = jest.fn();

    const props = {
      ...defaultProps,
      onChange,
      value: moment(new Date(), 'YYYY-MM-DD'),
    };

    const wrapper = renderComponent(props);
    const input = wrapper.find('input');

    input.simulate('click');

    const datePicker = wrapper.find(DayPickerSingleDateController);

    act(() => {
      datePicker.props().onDateChange(moment('1993-07-05', 'YYYY-MM-DD'));
    });

    expect(onChange).toHaveBeenCalledWith({
      target: {
        name: 'date',
        type: 'date',
        value: moment('1993-07-05', 'YYYY-MM-DD'),
      },
    });
  });

  it('should display the date value in a human readable format', () => {
    const onChange = jest.fn();

    const props = {
      ...defaultProps,
      onChange,
      value: moment('1993-07-05', 'YYYY-MM-DD'),
    };

    const wrapper = renderComponent(props);
    const input = wrapper.find('input');

    expect(input.props().value).toBe('July 05, 1993');
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = DatePicker;

    expect(onChange).toBeDefined();
  });
});
