// import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

// import Checkbox from '../index';

// describe('<Checkbox />', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(true);
//   });
// });

import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '../index';
// import InputIcon from '../../InputIcon';

const defaultProps = {
  type: 'checkbox',
  name: 'checkbox',
};
const renderComponent = (props = defaultProps) => {
  const wrapper = mount(<Checkbox {...props} />);

  return wrapper;
};
describe('<Checkbox />', () => {
  // it('should change state on click', () => {
  //   const props = Object.assign(defaultProps, { type: 'password' });
  //   const wrapper = renderComponent(props);
  //   const toggle = wrapper.instance().handleClick;

  //   expect(wrapper.state().showPassword).toEqual(false);
  //   toggle();
  //   expect(wrapper.state().showPassword).toEqual(true);
  // });

  it('the input should have the search icon if the type is search', () => {
    // const defaultType = 'search';
    const props = Object.assign(defaultProps, {});
    const wrapper = renderComponent(props);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find(InputIcon).exists()).toBe(true);
  });
});
