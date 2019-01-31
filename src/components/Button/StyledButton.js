import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const darkBlue = '#1C5DE7';
// const mediumBlue = '#005EEA';
// const lightBlue = '#0097F6';

const lightGrey = '#F6F6F6';
const mediumGrey = '#979797';

const darkOrange = '#F64D0A';
const orangeBorder = 'rgba(255, 0, 0, 0.2)';
const orangeBkgd = 'rgba(255, 0, 0, 0.15)';
// const mediumOrange = '#F64D0A';
// const lightOrange = '#F68E0E';

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0 1em;
  border-radius: 3px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor:pointer;
  outline: 0;
  height: 30px;
  &:hover {
    -webkit-box-shadow: inset 0 0 30px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0 0 30px rgba(0,0,0,0.1);
    box-shadow: inset 0 0 30px rgba(0,0,0,0.1);
  }
  &:active {
    -webkit-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.1);
    box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.1);
  }

  // Type
  ${props =>
    props.type === 'primary' &&
    css`
      background-image: linear-gradient(
        to right top,
        #306ded,
        #2f78f1,
        #3283f3,
        #3a8ef6,
        #4598f7
      );
      color: white;
      border: 0;
    `}

  ${props =>
    props.type === 'secondary' &&
    css`
      border: 1px solid ${mediumGrey};
      background-color: ${lightGrey};
    `}}

  ${props =>
    props.type === 'cancel' &&
    css`
      border: 1px solid ${mediumGrey};
      background-color: ${lightGrey};
      color: ${mediumGrey};
    `}}
      
  ${props =>
    props.type === 'outline' &&
    css`
      border: 1px solid ${darkBlue};
      color: ${darkBlue};
      height: 26px;
      font-size: 14px;
    `}
  
  ${props =>
    props.type === 'danger' &&
    css`
      border: 1px solid ${darkOrange};
      color: ${darkOrange};
    `}
  
  ${props =>
    props.type === 'delete' &&
    css`
      border: 1px solid ${orangeBorder};
      background-color: ${orangeBkgd};
      color: ${darkOrange};
    `}

  // Left icons  
  ${props =>
    props.icon &&
    css`
      &::before {
        font-family: 'FontAwesome';
        font-weight: 600;
        font-size: 14px;
        margin-right: 13px;
        line-height: 100%;
      }
    `}   

  ${props =>
    props.icon === 'add' &&
    css`
      &::before {
        content: '\f067';
      }
    `}      

    ${props =>
      props.icon === 'back' &&
      css`
        &::before {
          content: '\f053';
        }
      `}      
  
      ${props =>
        props.icon === 'trash' &&
        css`
          &::before {
            content: '\f014';
            font-size: 18px;
          }
        `}
  `;

StyledButton.defaultProps = {
  type: 'button'
};

StyledButton.propTypes = {
  type: PropTypes.string
};

export default StyledButton;
