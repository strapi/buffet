/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { List as ListCompo, ListHeader } from '@buffetjs/core';
import { Card } from '@buffetjs/styles';

function List({ title, subtitle, button, items, customRowComponent }) {
  return (
    <Card>
      <ListHeader title={title} subtitle={subtitle} button={button} />
      <ListCompo items={items} customRowComponent={customRowComponent} />
    </Card>
  );
}

List.defaultProps = {
  button: null,
  customRowComponent: null,
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
  className: PropTypes.string,
  customRowComponent: PropTypes.func,
  items: PropTypes.instanceOf(Array),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default List;
