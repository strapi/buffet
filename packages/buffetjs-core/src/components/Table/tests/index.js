import React from 'react';
import { mount } from 'enzyme';

import { TableRowEmpty } from '@buffetjs/styles';
import TableRow from '../../TableRow';
import Table from '../index';
import ActionCollapse from '../ActionCollapse';

describe('<Table />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Should not crash', () => {
    mount(<Table />);
  });

  it('Should display the Empty row if there is no data', () => {
    const wrapper = mount(<Table />);

    expect(wrapper.find(TableRow)).toHaveLength(0);
    expect(wrapper.find(TableRowEmpty)).toHaveLength(1);
  });

  it('Should display a custom component if given', () => {
    const Custom = () => (
      <tr>
        <td>Test</td>
      </tr>
    );
    const headers = [
      {
        value: 'test',
      },
    ];
    const rows = [
      {
        test: 'test1',
        other: 'other',
      },
    ];
    const wrapper = mount(
      <Table customRow={Custom} rows={rows} headers={headers} />,
    );

    expect(wrapper.find(TableRow)).toHaveLength(0);
    expect(wrapper.find(TableRowEmpty)).toHaveLength(0);
    expect(wrapper.find(Custom)).toHaveLength(1);
  });

  it('Should display the ActionCollapse correctly without the rowLinks', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const rows = [
      {
        test: 'test1',
        other: 'other',
        _isChecked: true,
      },
    ];
    const wrapper = mount(
      <Table rows={rows} headers={headers} withBulkAction />,
    );
    const collapse = wrapper.find(ActionCollapse);

    expect(collapse).toHaveLength(1);
    expect(collapse.prop('colSpan')).toBe(2);
  });

  it('Should display the ActionCollapse correctly with the bulkAction', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const rows = [
      {
        test: 'test1',
        other: 'other',
        _isChecked: true,
      },
    ];
    const rowLinks = [{ icon: 'trash', onClick: jest.fn() }];
    const wrapper = mount(
      <Table rows={rows} headers={headers} rowLinks={rowLinks} withBulkAction />,
    );
    const collapse = wrapper.find(ActionCollapse);
    expect(collapse).toHaveLength(1);
    expect(collapse.prop('colSpan')).toBe(3);
  });

  it('Should display the ActionCollapse if one of the row is not checked', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const rows = [
      {
        test: 'test1',
        other: 'other',
        _isChecked: true,
      },
      {
        test: 'test2',
        other: 'other1',
        _isChecked: false,
      },
    ];
    const rowLinks = [{ icon: 'trash', onClick: jest.fn() }];
    const wrapper = mount(
      <Table rows={rows} headers={headers} rowLinks={rowLinks} withBulkAction />,
    );
    const collapse = wrapper.find(ActionCollapse);

    expect(collapse).toHaveLength(1);
    expect(collapse.prop('numberOfSelectedEntries')).toBe(1);
  });

  it('Should not display the ActionCollapse if the withBulkAction is false', () => {
    const headers = [
      {
        value: 'test',
      },
    ];
    const rows = [
      {
        test: 'test1',
        other: 'other',
        _isChecked: true,
      },
      {
        test: 'test2',
        other: 'other1',
        _isChecked: true,
      },
    ];
    const rowLinks = [{ icon: 'trash', onClick: jest.fn() }];
    const wrapper = mount(
      <Table rows={rows} headers={headers} rowLinks={rowLinks} />,
    );
    const collapse = wrapper.find(ActionCollapse);

    expect(collapse).toHaveLength(0);
  });
});
