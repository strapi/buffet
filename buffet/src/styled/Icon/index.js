/**
 *
 * Icon
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)``;

Icon.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default Icon;
