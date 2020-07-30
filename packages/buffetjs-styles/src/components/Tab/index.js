/**
 *
 * Tab
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const Tab = styled.li`
  display: inline-block;
  width: calc(100% / ${(props) => props.count});
  height: 3.6rem;
  &:first-of-type a {
    border-top-left-radius: 2px;
  }
  &:last-of-type a {
    border-top-right-radius: 2px;
  }
  button {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
  }
  a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 ${sizes.margin * 2}px;
    color: ${colors.blueTxt};
    font-family: 'Lato';
    font-size: 1.3rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    cursor: pointer;
    background-color: ${(props) => props.background};
    border-top: 3px solid ${(props) => props.background};
    border-bottom: 3px solid ${(props) => props.background};
    p,
    span {
      margin: auto;
    }
    &.active {
      border-top: 3px solid ${colors.blueTabBorder};
      border-bottom: 3px solid white;
      background-color: white;
      font-weight: ${sizes.fontWeight.bold};
    }
  }
`;

Tab.defaultProps = {
  index: 1,
  background: colors.greyTabBkgd,
};

Tab.propTypes = {
  background: PropTypes.string,
  index: PropTypes.number,
};

export default Tab;
