import PropTypes from 'prop-types';

export default {
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
};
