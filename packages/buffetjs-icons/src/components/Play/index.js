import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ fill, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    width="8px"
    height="10px"
    {...rest}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-1018.000000, -100.000000)"
        fill={fill}
        fillRule="nonzero"
      >
        <g transform="translate(537.000000, 85.000000)">
          <g transform="translate(461.000000, 4.000000)">
            <g transform="translate(20.000000, 11.000000)">
              <path d="M5.90191898,3.63963964 L0.23880597,6.96396396 C0.173418621,7.003003 0.117270789,7.00750751 0.0703624733,6.97747748 C0.0234541578,6.94744745 0,6.89339339 0,6.81531532 L0,0.184684685 C0,0.106606607 0.0234541578,0.0525525526 0.0703624733,0.0225225225 C0.117270789,-0.00750750751 0.173418621,-0.003003003 0.23880597,0.036036036 L5.90191898,3.36036036 C5.96730633,3.3993994 6,3.44594595 6,3.5 C6,3.55405405 5.96730633,3.6006006 5.90191898,3.63963964 Z"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Play.defaultProps = {
  fill: '#b4b6ba',
};

Play.propTypes = {
  fill: PropTypes.string,
};

export default Play;
