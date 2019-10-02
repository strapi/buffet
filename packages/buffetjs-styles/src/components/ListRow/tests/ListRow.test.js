import React from 'react';
import { shallow } from 'enzyme';

import ListRow from '../index';

const renderComponent = () => shallow(<ListRow />);

describe('<ListRow />', () => {
  it('should not crash', () => {
    renderComponent();
  });
});
