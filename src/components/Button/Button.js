import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button``;

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
