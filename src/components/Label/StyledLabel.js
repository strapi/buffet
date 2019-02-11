import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';

const StyledTextarea = styled.label`
  width: 100%;
  font-family: 'LatoSemiBold';
  font-size: 13px;
  color: ${colors.blueTxt};
`;

StyledTextarea.defaultProps = {
  placeholder: null,
};

StyledTextarea.propTypes = {
  placeholder: PropTypes.string,
};

export default StyledTextarea;
