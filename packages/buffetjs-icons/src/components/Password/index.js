import React from 'react';
import PropTypes from 'prop-types';

const Password = props => (
  <svg width="8" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.875 5c.174 0 .321.06.443.182.121.122.182.27.182.443v3.75c0 .174-.06.321-.182.443a.603.603 0 01-.443.182H.625a.603.603 0 01-.443-.182A.603.603 0 010 9.375v-3.75c0-.174.06-.321.182-.443A.603.603 0 01.625 5h.208V2.917c0-.803.286-1.49.856-2.06A2.809 2.809 0 013.75 0c.803 0 1.49.285 2.06.856.571.57.857 1.258.857 2.06a.4.4 0 01-.124.294.4.4 0 01-.293.123h-.417a.4.4 0 01-.293-.123.4.4 0 01-.123-.293c0-.46-.163-.853-.489-1.179A1.606 1.606 0 003.75 1.25c-.46 0-.853.163-1.178.488a1.606 1.606 0 00-.489 1.179V5h4.792z"
      fill={props.fill}
      fillRule="nonzero"
    />
  </svg>
);

Password.defaultProps = {
  fill: '#fff',
};

Password.propTypes = {
  fill: PropTypes.string,
};

export default Password;
