/**
 *
 * ListHeader
 *
 */

import React from 'react';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/listheader';

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
  ...commonDefaultProps,
};

ListHeader.propTypes = {
  ...commonPropTypes,
};

export default ListHeader;
