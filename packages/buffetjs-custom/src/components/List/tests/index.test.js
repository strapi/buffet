import React from 'react';
import { mount } from 'enzyme';

import List from '../index';

describe('<List />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('It should not crash', () => {
    mount(<List />);
  });
});
