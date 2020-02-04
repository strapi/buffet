import React from 'react';
import { mount } from 'enzyme';
// import moment from 'moment';
// import { Input } from '@buffetjs/core';

import DatePicker from '../index';

const defaultProps = {
  type: 'checkbox',
  name: 'checkbox',
  onChange: jest.fn(),
};
const renderComponent = (props = defaultProps) =>
  mount(<DatePicker {...props} />);

describe('<DatePicker />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  // it('should send a moment object onChange', () => {
  //   const onChange = jest.fn();

  //   const renderedComponent = renderComponent({
  //     ...defaultProps,
  //     onChange,
  //     value: null,
  //   });

  //   const element = renderedComponent.find(Input);

  //   const mock = { target: { value: moment('1993-07-05') } };
  //   element.simulate('change', mock);

  //   const expected = {
  //     target: {
  //       name: 'date',
  //       type: 'date',
  //       value: moment('1993-07-05'),
  //     },
  //   };

  //   expect(onChange).toHaveBeenCalledWith(expected);
  // });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = DatePicker;

    expect(onChange).toBeDefined();
  });
});
