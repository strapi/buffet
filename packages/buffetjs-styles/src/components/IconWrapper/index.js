import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const IconWrapper = styled.span`
  width: calc(${sizes.input.height} - 2px);
  height: calc(${sizes.input.height} - 2px);
  color: ${colors.greyIconColor};
  position: absolute;
  left: 1px;
  top: 1px;
  background-color: ${props =>
    props.background ? colors.greyIconBkgd : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

IconWrapper.defaultProps = {
  background: true,
};

IconWrapper.propTypes = {
  background: PropTypes.bool,
};

export default IconWrapper;
