import React from 'react';
import PropTypes from 'prop-types';
import {
  Bool,
  Calendar,
  Component,
  ContentType,
  DynamicZone,
  Email,
  Enumeration,
  Json,
  Media,
  NumberIcon,
  Password,
  Relation,
  RichText,
  SingleType,
  Text,
  Uid,
} from '@buffetjs/icons';
import Div from './Div';

const types = {
  biginteger: NumberIcon,
  boolean: Bool,
  component: Component,
  contentType: ContentType,
  date: Calendar,
  datetime: Calendar,
  decimal: NumberIcon,
  dynamiczone: DynamicZone,
  email: Email,
  enum: Enumeration,
  enumeration: Enumeration,
  file: Media,
  files: Media,
  float: NumberIcon,
  integer: NumberIcon,
  json: Json,
  JSON: Json,
  media: Media,
  number: NumberIcon,
  password: Password,
  relation: Relation,
  richtext: RichText,
  singleType: SingleType,
  string: Text,
  text: Text,
  time: Calendar,
  timestamp: Calendar,
  uid: Uid,
};

const AttributeIcon = ({ type, ...rest }) => {
  const Compo = types[type];

  if (!types[type]) {
    return null;
  }

  return (
    <Div {...rest} type={type}>
      <Compo />
    </Div>
  );
};

AttributeIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AttributeIcon;
