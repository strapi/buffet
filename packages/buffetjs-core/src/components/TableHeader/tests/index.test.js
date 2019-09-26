import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from '@buffetjs/styles';

import TableHeader from '../index';

describe('<TableHeader />', () => {
  describe('Checkbox behaviour', () => {
    it('Should display the check sign if all rows are selected (shouldDisplayNotChecked to false and checked to true)', () => {
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
      const { checked, shouldDisplayNotChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeTruthy();
      expect(shouldDisplayNotChecked).toBeFalsy();
    });

    it('Should display the uncheck sign if not all the rows are selected (shouldDisplayNotChecked to true and checked to false)', () => {
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
      const { checked, shouldDisplayNotChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(shouldDisplayNotChecked).toBeTruthy();
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
      const { checked, shouldDisplayNotChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(shouldDisplayNotChecked).toBeFalsy();
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
      const { checked, shouldDisplayNotChecked } = checkbox.props();

      expect(checkbox).not.toHaveLength(0);
      expect(checked).toBeFalsy();
      expect(shouldDisplayNotChecked).toBeFalsy();
    });
  });
});
