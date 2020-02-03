/**
 *
 * HeaderTitle
 *
 */

import styled from 'styled-components';

const HeaderTitle = styled.div`
  position: relative;
  padding-top: 0.5rem;
  h1 {
    position: relative;
    width: fit-content;
    max-width: 100%;
    margin-bottom: 0;
    font-size: 2.4rem;
    line-height: normal;
    font-weight: 600;
    text-transform: capitalize;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  svg {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 12px;
    font-size: 12px;
    color: rgba(16, 22, 34, 0.35);
    cursor: pointer;
    outline: 0;
  }
`;

export default HeaderTitle;
