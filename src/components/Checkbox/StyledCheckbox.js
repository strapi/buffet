/**
 *
 * Checkbox
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCheckbox = styled.input`
  display: none;
`;

StyledCheckbox.defaultProps = {
  type: 'checkbox',
};

StyledCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.bool.isRequired,
};

export default StyledCheckbox;
