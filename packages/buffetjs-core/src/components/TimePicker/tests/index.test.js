import React from 'react';
import { mount } from 'enzyme';

import { TimePicker as StyledTimePicker } from '@buffetjs/styles';
import TimePicker, { timeFormatter } from '../index';

const defaultProps = { name: 'time' };
const renderComponent = (props = defaultProps) =>
  mount(<TimePicker {...props} />);

describe('<TimePicker />', () => {
  describe('Parser onBlur', () => {
    it('Should format the value to 10:38:00 if 10:38 is given', () => {
      expect(timeFormatter('10:38')).toEqual('10:38:00');
    });

    it('Should format the value to 10:38:00 if 10h38 is given', () => {
      expect(timeFormatter('10h38')).toEqual('10:38:00');
    });

    it('Should format the value to 10:38:00 if 10H38 is given', () => {
      expect(timeFormatter('10H38')).toEqual('10:38:00');
    });

    it('Should format the value to 10:00:00 if 10: is given', () => {
      expect(timeFormatter('10:')).toEqual('10:00:00');
    });

    it('Should format the value to 10:00:00 if 10 is given', () => {
      expect(timeFormatter('10')).toEqual('10:00:00');
    });

    it('Should format the value to 10:38:38 if 10:38:38 is given', () => {
      expect(timeFormatter('10:38:38')).toEqual('10:38:38');
    });

    it('Should format the value to 01:11:00 if 1:11:00 is given', () => {
      expect(timeFormatter('1:11:00')).toEqual('01:11:00');
    });

    it('Should format the value to 01:10:00 if 11:1:00 is given', () => {
      expect(timeFormatter('11:1:00')).toEqual('11:10:00');
    });

    it('Should format the value to 11:10:2 if 11:10:20 is given', () => {
      expect(timeFormatter('11:10:2')).toEqual('11:10:20');
    });

    it('Should format the value to 1200 if 12:00:00 is given', () => {
      expect(timeFormatter('1200')).toEqual('12:00:00');
    });

    it('Should format the value to 111 if 01:11:00 is given', () => {
      expect(timeFormatter('111')).toEqual('01:11:00');
    });

    it('Should format the value to 00:00:00 if null is given', () => {
      expect(timeFormatter(null)).toEqual('00:00:00');
    });

    it('Should format the value to 00:00:00 if nothing is given', () => {
      expect(timeFormatter('')).toEqual('00:00:00');
    });
  });

  describe('<TimePicker /> behavior', () => {
    // eslint-disable-next-line jest/expect-expect
    it('should not crash', () => {
      renderComponent();
    });

    it('should send a formatted string onChange', () => {
      const onChange = jest.fn();
      const value = '';
      const renderedComponent = renderComponent({
        ...defaultProps,
        onChange,
        value,
      });

      const element = renderedComponent.find(StyledTimePicker);
      const mock = { target: { value: '10' } };
      element.simulate('change', mock);

      const expected = {
        target: {
          name: 'time',
          type: 'time',
          value: '10:00:00',
        },
      };
      expect(onChange).toHaveBeenCalledWith(expected);
    });
  });
});
