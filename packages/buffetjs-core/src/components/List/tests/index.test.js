import React from 'react';
import { mount } from 'enzyme';

import List from '../index';

describe('<List />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(<List />);
  });

  it('Should use a custom row if provided', () => {
    const items = [{ test: 'test' }];
    const customRowComponent = jest.fn();
    mount(<List items={items} customRowComponent={customRowComponent} />);

    expect(customRowComponent).toHaveBeenCalledWith(items[0]);
  });
});
