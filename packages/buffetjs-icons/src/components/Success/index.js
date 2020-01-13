import React from 'react';
import PropTypes from 'prop-types';

const Success = ({ fill, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    width="18px"
    height="18px"
    {...rest}
  >
    <defs>
      <filter
        x="-3.7%"
        y="-17.5%"
        width="107.3%"
        height="135.0%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset
          dx="0"
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-702.000000, -89.000000)">
        <g filter="url(#filter-1)" transform="translate(686.000000, 72.000000)">
          <g id="Check-Copy-2-Clipped">
            <g id="Check-Copy-2" transform="translate(20.000000, 20.000000)">
              <g id="Group">
                <g id="check" transform="translate(0.500000, 0.000000)">
                  <g id="Group-6">
                    <path
                      d="M14.3423951,8.3983456 C14.3423951,8.55907497 14.2861399,8.69569495 14.1736293,8.80820551 L9.80982666,13.1720081 L8.99010683,13.991728 C8.87759626,14.1042385 8.74097629,14.1604938 8.58024691,14.1604938 C8.41951753,14.1604938 8.28289756,14.1042385 8.170387,13.991728 L7.35066717,13.1720081 L5.16876585,10.9901068 C5.05625528,10.8775963 5,10.7409763 5,10.5802469 C5,10.4195175 5.05625528,10.2828976 5.16876585,10.170387 L5.98848568,9.35066717 C6.10099625,9.2381566 6.23761622,9.18190132 6.3983456,9.18190132 C6.55907497,9.18190132 6.69569495,9.2381566 6.80820551,9.35066717 L8.58024691,11.1287359 L12.5341896,7.16876585 C12.6467002,7.05625528 12.7833202,7 12.9440495,7 C13.1047789,7 13.2413989,7.05625528 13.3539095,7.16876585 L14.1736293,7.98848568 C14.2861399,8.10099625 14.3423951,8.23761622 14.3423951,8.3983456 Z"
                      id="Shape"
                      fill={fill}
                      fillRule="nonzero"
                    ></path>
                    <rect
                      id="Rectangle-2"
                      stroke={fill}
                      x="0"
                      y="0.5"
                      width="19"
                      height="19"
                      rx="9.5"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Success.defaultProps = {
  fill: '#fff',
};

Success.propTypes = {
  fill: PropTypes.string,
};

export default Success;
