import React from 'react';
import { shallow } from 'enzyme';

import { InputsIndex } from '../InputsIndex';

describe('<InputsIndex />', () => {
  it('should not crash', () => {
    shallow(<InputsIndex />);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = InputsIndex;

    expect(onChange).toBeDefined();
    expect(onChange()).toBeUndefined();
  });
});
