import styled from 'styled-components';

const Small = styled.small`
  color: #9ea7b8;
  font-family: 'Lato';
  font-size: 12px;
  ${({ children, error }) => {
    let css = `display: inline-block;`;

    if (children) {
      css = `margin-top: 12px; display: inline-block; margin-bottom: 13px`;
    }

    if (!!error && children) {
      css = `margin-top: 12px; display: inline-block;`;
    }

    return css;
  }}
`;

export default Small;
