/**
 *
 * HeaderActions
 *
 */

import styled from 'styled-components';

const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  max-width: 100%;
  padding-top: 1rem;
  > button {
    margin-right: 0;
    margin-left: 1rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    outline: 0;
  }
`;

export default HeaderActions;
