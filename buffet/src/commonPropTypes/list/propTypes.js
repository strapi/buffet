import PropTypes from 'prop-types';

export default {
  className: PropTypes.string,
  customRowComponent: PropTypes.func,
  items: PropTypes.instanceOf(Array),
};
