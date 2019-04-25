import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Tabs from '../index';

const renderComponent = () => shallow(<Tabs />);

describe('<Tabs />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
