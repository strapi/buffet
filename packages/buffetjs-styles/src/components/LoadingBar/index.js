/**
 *
 * LoadingBar
 *
 */

import styled, { keyframes } from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

/* stylelint-disable */
const loading = keyframes`

  from {left: -200px; width: 30%;}
  50% {width: 30%;}
  70% {width: 70%;}
  80% { left: 50%;}
  95% {left: 120%;}
  to {left: 100%;}
`;
/* stylelint-enable */

const LoadingBar = styled.div`
  height: 6px;
  width: 20%;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  background-color: ${colors.greyHeader};
  border-radius: ${sizes.borderRadius};
  &:before {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 6px;
    background-color: rgb(227, 227, 231);
    animation: ${loading} 2s linear infinite;
  }
`;

export default LoadingBar;
