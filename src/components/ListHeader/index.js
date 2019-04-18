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

function ListHeader({ button, title, subtitle }) {
  return (
    <StyledListHeader>
      {button && <Button {...button} />}
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subtitle}</ListSubtitle>
    </StyledListHeader>
  );
}

ListHeader.defaultProps = {
  button: null,
  title: null,
  subtitle: null,
};

ListHeader.propTypes = {
  button: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ListHeader;
