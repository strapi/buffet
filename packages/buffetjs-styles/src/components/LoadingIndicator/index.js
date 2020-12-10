/**
 *
 * LoadingIndicator
 *
 */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const getSize = (size, small) => {
  if (size) {
    return size;
  }

  if (small) {
    return '11px';
  }

  return '26px';
};

const Loader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  > div {
    width: ${({ size, small }) => getSize(size, small)};
    height: ${({ size, small }) => getSize(size, small)};
    /* stylelint-disable */
    border: ${({ borderColor, borderWidth }) =>
      `${borderWidth} solid ${borderColor}`};
    border-top: ${({ borderWidth, borderTopColor }) =>
      `${borderWidth} solid ${borderTopColor} !important;`};

    /* stylelint-enable */
    border-radius: 50%;
    animation: ${({ animationTime }) =>
      css`
        ${spin} ${animationTime} linear infinite
      `};
`;

const LoadingIndicator = ({
  animationTime,
  borderColor,
  borderTopColor,
  borderWidth,
  small,
  size,
}) => (
  <Loader
    animationTime={animationTime}
    borderColor={borderColor}
    borderTopColor={borderTopColor}
    borderWidth={borderWidth}
    small={small}
    size={size}
  >
    <div />
  </Loader>
);

LoadingIndicator.defaultProps = {
  animationTime: '2s',
  borderColor: '#f3f3f3',
  borderTopColor: '#555555',
  borderWidth: '4px',
  size: null,
  small: false,
};

LoadingIndicator.propTypes = {
  animationTime: PropTypes.string,
  borderColor: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderWidth: PropTypes.string,
  size: PropTypes.string,
  small: PropTypes.bool,
};

export default LoadingIndicator;
