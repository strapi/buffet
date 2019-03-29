import React from 'react';
import { mount } from 'enzyme';

import Wrapper from '../Wrapper';

describe('<Wrapper />, (ErrorMessage)', () => {
  it('should not crash', () => {
    mount(<Wrapper />);
  });

  it('should render its children', () => {
    const Child = () => <div>Some child</div>;

    const wrapper = mount(
      <Wrapper>
        <Child />
      </Wrapper>,
    );

    expect(wrapper.find(Child)).toHaveLength(1);
  });
});
