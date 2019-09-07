import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const IconWrapper = styled.span`
  width: ${sizes.input.height};
  height: ${sizes.input.height};
  color: ${colors.greyIconColor};
  display: inline-block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colors.greyIconBkgd};
`;

IconWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconWrapper;