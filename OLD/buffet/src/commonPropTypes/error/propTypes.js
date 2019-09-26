import PropTypes from 'prop-types';

export default {
  translatedErrors: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
  validations: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};
