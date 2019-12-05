/**
 *
 * Header
 *
 */

import styled from 'styled-components';

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
    font-weight: 400;
    line-height: normal;
    color: #787e8f;
  }
  .sticky {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1050;
    background-color: white;
    width: calc(100vw - 30.5rem);
    padding-right: 15px;
    height: 60px;
    display: flex;
    .row {
      width: 100%;
      margin: auto;
      > div > div {
        padding-top: 0;
        button {
          margin-top: auto;
          margin-bottom: auto;
        }
      }
    }
  }
`;

export default Header;
