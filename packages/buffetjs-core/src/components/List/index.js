/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { List as StyledList } from '@buffetjs/styles';

import ListRow from '../ListRow';

function List({ className, items, customRowComponent }) {
  return (
    <StyledList className={className}>
      <table>
        <tbody>
          {items.map((item, index) =>
            customRowComponent ? (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                {customRowComponent(item)}
              </React.Fragment>
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <ListRow cells={item} key={index} />
            )
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
