import React from 'react';
import { mount } from 'enzyme';

import ListHeader from '../index';

describe('<ListHeader />', () => {
  it('Should not crash', () => {
    mount(<ListHeader />);
  });
});
