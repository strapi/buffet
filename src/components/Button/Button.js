import React from 'react';
import StyledButton from './StyledButton';

function Button(props) {
  const content = props.label ? props.label : props.children;
  return <StyledButton {...props}>{content}</StyledButton>;
}

export default Button;
