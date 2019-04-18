/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListRow from '../ListRow';

import StyledList from '../../styled/List';

function List(props) {
  const { list, customRowComponent } = props;

  return (
    <StyledList>
      <table>
        <tbody>
          {list.map(item =>
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
  list: [],
  customRowComponent: null,
};

List.propTypes = {
  customRowComponent: PropTypes.func,
  list: PropTypes.instanceOf(Array),
};

export default List;
