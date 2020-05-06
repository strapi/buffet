import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Checkbox from '../index';

const renderComponent = () => shallow(<Checkbox />);

describe('<Checkbox />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Checkbox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
