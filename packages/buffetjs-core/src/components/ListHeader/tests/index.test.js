import React from 'react';
import { mount } from 'enzyme';

import ListHeader from '../index';

describe('<ListHeader />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(<ListHeader />);
  });
});
