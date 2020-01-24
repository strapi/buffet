/**
 *
 * List
 *
 */

import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { List as StyledList } from '@buffetjs/styles';

import ListRow from '../ListRow';

function List({ className, items, customRowComponent }) {
  return (
    <StyledList className={className}>
      <table>
        <tbody>
          {useMemo(
            () =>
              items.map(item =>
                customRowComponent ? (
                  <Fragment key={JSON.stringify(item)}>
                    {customRowComponent(item)}
                  </Fragment>
                ) : (
                  <ListRow cells={item} key={JSON.stringify(item)} />
                )
              ),
            [customRowComponent, items]
          )}
        </tbody>
      </table>
    </StyledList>
  );
}

List.defaultProps = {
  className: null,
  items: [],
  customRowComponent: null,
};

List.propTypes = {
  className: PropTypes.string,
  customRowComponent: PropTypes.func,
  items: PropTypes.instanceOf(Array),
};

export default List;
