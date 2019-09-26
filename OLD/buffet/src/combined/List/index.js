/**
 *
 * List
 *
 */

import React from 'react';
import {
  commonDefaultProps as headerCommonDefaultProps,
  commonPropTypes as headerCommonPropTypes,
} from '../../commonPropTypes/listheader';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/list';

import Card from '../../styled/Card';

import ListHeader from '../../components/ListHeader';
import ListCompo from '../../components/List';

function List({ title, subtitle, button, items, customRowComponent }) {
  return (
    <Card>
      <ListHeader title={title} subtitle={subtitle} button={button} />
      <ListCompo items={items} customRowComponent={customRowComponent} />
    </Card>
  );
}

List.defaultProps = {
  ...headerCommonDefaultProps,
  ...commonDefaultProps,
};

List.propTypes = {
  ...headerCommonPropTypes,
  ...commonPropTypes,
};

export default List;
