/**
 *
 * List
 *
 */

import React from 'react';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/list';
import ListRow from '../ListRow';
import StyledList from '../../styled/List';

function List({ className, items, customRowComponent }) {
  return (
    <StyledList className={className}>
      <table>
        <tbody>
          {items.map(item =>
            customRowComponent ? (
              <React.Fragment key={JSON.stringify(item)}>
                {customRowComponent(item)}
              </React.Fragment>
            ) : (
              <ListRow cells={item} key={JSON.stringify(item)} />
            ),
          )}
        </tbody>
      </table>
    </StyledList>
  );
}

List.defaultProps = {
  ...commonDefaultProps,
};

List.propTypes = {
  ...commonPropTypes,
};

export default List;
