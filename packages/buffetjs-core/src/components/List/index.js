/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { List as StyledList, LoadingIndicator } from '@buffetjs/styles';

import ListRow from '../ListRow';
import Padded from '../Padded';

function List({ className, items, isLoading, customRowComponent }) {
  return (
    <StyledList className={className}>
      {isLoading ? (
        <Padded top bottom size="md">
          <LoadingIndicator />
        </Padded>
      ) : (
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
      )}
    </StyledList>
  );
}

List.defaultProps = {
  className: null,
  customRowComponent: null,
  isLoading: false,
  items: [],
};

List.propTypes = {
  className: PropTypes.string,
  customRowComponent: PropTypes.func,
  isLoading: PropTypes.bool,
  items: PropTypes.instanceOf(Array),
};

export default List;
