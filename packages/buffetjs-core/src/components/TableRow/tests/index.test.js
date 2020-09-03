import React from 'react';
import { mount } from 'enzyme';
import { Checkbox, Links as StyledLinks } from '@buffetjs/styles';

import TableRow from '../index';

describe('<TableRow />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>,
    );
  });

  it('Should the display the checkbox if the withBulkAction prop is true', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TableRow withBulkAction />
        </tbody>
      </table>,
    );

    expect(wrapper.find(Checkbox)).toHaveLength(1);
  });

  it('Should display the cells according to the given headers', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const row = {
      test: 'test1',
      other: 'other',
    };

    const wrapper = mount(
      <table>
        <tbody>
          <TableRow headers={headers} row={row} />
        </tbody>
      </table>,
    );

    expect(wrapper.find('td')).toHaveLength(1);
  });

  it('should display the links', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const row = {
      test: 'test1',
      other: 'other',
    };
    const rowLinks = [
      {
        icon: 'trash',
        onClick: jest.fn(),
      },
    ];

    const wrapper = mount(
      <table>
        <tbody>
          <TableRow headers={headers} row={row} rowLinks={rowLinks} />
        </tbody>
      </table>,
    );

    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find(StyledLinks)).toHaveLength(1);

    const button = wrapper.find('button').at(0);

    expect(button).toHaveLength(1);

    button.simulate('click');

    expect(rowLinks[0].onClick).toHaveBeenCalledWith(row);
  });
});
