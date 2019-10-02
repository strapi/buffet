import React from 'react';
import { mount } from 'enzyme';

import List from '../index';

describe('<List />', () => {
  it('It should not crash', () => {
    mount(<List />);
  });
});
