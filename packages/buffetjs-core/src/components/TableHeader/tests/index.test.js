import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from '@buffetjs/styles';

import TableHeader from '../index';

describe('<TableHeader />', () => {
  describe('Checkbox behaviour', () => {
    it('Should display the check sign if all rows are selected (someChecked to false and checked to true)', () => {
      const props = {
        rows: [{ _isChecked: true }, { _isChecked: true }],
        withBulkAction: true,
      };

      const renderedComponent = mount(
        <table>
          <TableHeader {...props} />
        </table>
      );
      const checkbox = renderedComponent.find(Checkbox);
      const { checked, someChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeTruthy();
      expect(someChecked).toBeFalsy();
    });

    it('Should display the uncheck sign if not all the rows are selected (someChecked to true and checked to false)', () => {
      const props = {
        withBulkAction: true,
        rows: [{ _isChecked: true }, { _isChecked: false }],
      };

      const renderedComponent = mount(
        <table>
          <TableHeader {...props} />
        </table>
      );
      const checkbox = renderedComponent.find(Checkbox);
      const { checked, someChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(someChecked).toBeTruthy();
    });

    it('Should display nothing if none of the rows are selected (all props to false)', () => {
      const props = {
        withBulkAction: true,
        rows: [{ _isChecked: false }, { _isChecked: false }],
      };

      const renderedComponent = mount(
        <table>
          <TableHeader {...props} />
        </table>
      );
      const checkbox = renderedComponent.find(Checkbox);
      const { checked, someChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(someChecked).toBeFalsy();
    });

    it('Should display nothing if there is no rows', () => {
      const props = {
        withBulkAction: true,
        rows: [],
      };

      const renderedComponent = mount(
        <table>
          <TableHeader {...props} />
        </table>
      );
      const checkbox = renderedComponent.find(Checkbox);
      const { checked, someChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(someChecked).toBeFalsy();
    });
  });
});
