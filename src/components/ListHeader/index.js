/**
 *
 * ListHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledListHeader from '../../styled/ListHeader';
import ListTitle from '../../styled/ListTitle';
import ListSubtitle from '../../styled/ListSubtitle';
import Button from '../Button';

function ListHeader({ hasEditBtn, title, subtitle }) {
  return (
    <StyledListHeader>
      {hasEditBtn && (
        <Button type="submit" color="secondary" icon="add">
          New
        </Button>
      )}
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subtitle}</ListSubtitle>
    </StyledListHeader>
  );
}

ListHeader.defaultProps = {
  hasEditBtn: false,
  title: null,
  subtitle: null,
};

ListHeader.propTypes = {
  hasEditBtn: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ListHeader;
