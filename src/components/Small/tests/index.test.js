import React from 'react';
import { shallow } from 'enzyme';

import Small from '../index';

describe('<Small />', () => {
  it('should not crash', () => {
    shallow(<Small />);
  });
});
