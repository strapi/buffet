import { createGlobalStyle } from 'styled-components';
import { sizes } from '@buffetjs/styles';

const Global = createGlobalStyle`
// Storybook
body {
  padding: ${sizes.margin * 1.8}px;  
  margin: ${sizes.margin * 2}px ${sizes.margin * 1.8}px;
}
.story {
  font-family: Lato !important;
  padding-top: 12px;
  section {
    font-size: 13px;
    padding-bottom: ${sizes.margin * 0.9}px;
  }
  section div {
    &.row {
      margin-bottom: ${sizes.margin * 2}px;
    }
    &.btn-wrapper {
      display: inline-block;
      align-self: flex-end;
      width: fit-content;
      margin-bottom: ${sizes.margin * 1.8}px;
      padding-right: ${sizes.margin * 2}px;
      height: ${sizes.button.height.large};
      button {
        outline: 0;
      }
    }
  }
  pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
}
`;

export default Global;
