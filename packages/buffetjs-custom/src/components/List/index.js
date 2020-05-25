/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { List as ListCompo, ListHeader } from '@buffetjs/core';
import { Card } from '@buffetjs/styles';

function List({
  title,
  subtitle,
  button,
  isLoading,
  items,
  customRowComponent,
}) {
  return (
    <Card>
      <ListHeader title={title} subtitle={subtitle} button={button} />
      <ListCompo
        items={items}
        isLoading={isLoading}
        customRowComponent={customRowComponent}
      />
    </Card>
  );
}

List.defaultProps = {
  button: null,
  customRowComponent: null,
  isLoading: false,
  items: [],
  title: null,
  subtitle: null,
};

List.propTypes = {
  button: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.bool,
    type: PropTypes.string,
  }),
  customRowComponent: PropTypes.func,
  isLoading: PropTypes.bool,
  items: PropTypes.instanceOf(Array),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default List;
