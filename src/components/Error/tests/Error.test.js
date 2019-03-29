import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Error from '../index';

describe('<Error />', () => {
  it('should not crash', () => {
    shallow(<Error />);
  });
});
