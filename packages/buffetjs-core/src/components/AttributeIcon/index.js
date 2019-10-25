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
  Text,
  Uid,
} from '@buffetjs/icons';
import Div from './Div';

const types = {
  boolean: Bool,
  component: Component,
  contenttype: ContentType,
  date: Calendar,
  datetime: Calendar,
  dynamiczone: DynamicZone,
  email: Email,
  enum: Enumeration,
  enumeration: Enumeration,
  files: Media,
  file: Media,
  json: Json,
  JSON: Json,
  media: Media,
  number: NumberIcon,
  password: Password,
  relation: Relation,
  richtext: RichText,
  string: Text,
  text: Text,
  time: Calendar,
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
