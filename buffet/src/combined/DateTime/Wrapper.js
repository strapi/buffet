import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  > div:first-child {
    margin-right: 10px;
  }
  > div:last-child {
    max-width: 100px;
  }
`;

export default Wrapper;
