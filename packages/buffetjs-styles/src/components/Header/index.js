/**
 *
 * Header
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

const Header = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  height: 50px;
  .justify-content-end {
    display: flex;
  }
  .header-title p {
    width: 100%;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: ${sizes.fontWeight.regular};
    line-height: normal;
    color: #787e8f;
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 30.6rem;
    z-index: 1050;
    background-color: white;
    width: calc(100vw - 30.6rem);
    padding-right: 15px;
    height: 60px;
    display: flex;
    .row {
      width: 100%;
      margin: auto;
      margin-top: 16px;
      .header-title p {
        display: none;
      }
      > div > div {
        padding-top: 0;
        h1 {
          font-size: 2rem;
          svg {
            margin-top: 8px;
          }
        }
        button {
          margin-top: auto;
          margin-bottom: auto;
        }
      }
    }
  }
`;

export default Header;
