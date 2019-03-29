import React from 'react';
import { shallow } from 'enzyme';

import UnknownInput from '../UnknownInput';

describe('<UnknownInput />', () => {
  it('should not crash', () => {
    shallow(<UnknownInput />);
  });
});
