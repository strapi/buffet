/**
 *
 * Tabs
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const Tabs = styled.div`
  ul {
    height: 3.6rem;
    li {
      display: inline-block;
      width: calc(100% / ${props => props.count});
      height: 100%;
      background-color: ${colors.greyTabBkgd};
      border-top: 3px solid ${colors.greyTabBkgd};
      cursor: pointer;
      padding: 0 ${sizes.margin * 2}px;
      button {
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        margin: 0;
        background: transparent;
      }
      p {
        color: ${colors.blueTxt};
        font-family: 'Lato';
        font-size: 1.3rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &.selected {
        border-top: 3px solid ${colors.blueTabBorder};
        background-color: white;
        p {
          font-weight: bold;
        }
      }
    }
  }
  .tab-panel {
    padding: ${sizes.margin * 2.5}px ${sizes.margin * 1.8}px;
    background-color: white;
  }
`;

Tabs.defaultProps = {
  count: 1,
};

Tabs.propTypes = {
  count: PropTypes.number,
};

export default Tabs;
