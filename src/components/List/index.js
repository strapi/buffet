/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledList from '../../styled/List';
import ListHeader from '../ListHeader';
import ListRow from '../ListRow';

function List({ hasEditBtn, hasHeader, list, title, schema, subtitle }) {
  return (
    <StyledList>
      <ListHeader title={title} subtitle={subtitle} hasEditBtn={hasEditBtn} />
      <div className="table-wrapper">
        <table>
          {hasHeader && (
            <thead>
              <ListRow cells={schema} />
            </thead>
          )}
          <tbody>
            {list.map(item => (
              <ListRow
                cells={item}
                key={JSON.stringify(item)}
                schema={schema}
              />
            ))}
          </tbody>
        </table>
      </div>
    </StyledList>
  );
}

List.defaultProps = {
  hasEditBtn: false,
  hasHeader: false,
  list: [],
  title: null,
  schema: {},
  subtitle: null,
};

List.propTypes = {
  hasEditBtn: PropTypes.bool,
  hasHeader: PropTypes.bool,
  list: PropTypes.array,
  schema: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default List;
