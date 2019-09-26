/**
 *
 * Paging
 *
 */

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { Paging as StyledPaging } from '@buffetjs/styles';
import Icon from '../Icon';
/* eslint-disable react/no-array-index-key */

function Paging({ count, page, onChange, range }) {
  const pagesCount = Math.ceil(count / range);

  return (
    <>
      <StyledPaging />
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink onClick={onChange} value={0}>
            <Icon icon="left" />
          </PaginationLink>
        </PaginationItem>
        {Array(pagesCount)
          .fill(1)
          .map((item, index) => (
            <React.Fragment key={index}>
              <PaginationItem
                key={index}
                onClick={onChange}
                className={page === index * range ? 'selected' : ''}
              >
                <PaginationLink onClick={onChange} value={index * range}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            </React.Fragment>
          ))}
        <PaginationItem>
          <PaginationLink onClick={onChange} value={(pagesCount - 1) * range}>
            <Icon icon="right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
}

Paging.defaultProps = {
  count: 0,
  onChange: () => {},
  page: 0,
  range: 15,
};

Paging.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func,
  page: PropTypes.number,
  range: PropTypes.number,
};

export default Paging;
