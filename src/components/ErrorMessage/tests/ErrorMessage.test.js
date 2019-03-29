import React from 'react';
import { shallow } from 'enzyme';

import { ErrorMessage } from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should not crash', () => {
    shallow(<ErrorMessage />);
  });

  it('should render its children', () => {
    const Child = () => <div>Buffet</div>;
    const wrapper = shallow(
      <ErrorMessage>
        <Child />
      </ErrorMessage>,
    );

    expect(wrapper.find(Child)).toHaveLength(1);
  });
});
