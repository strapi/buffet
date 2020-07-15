import styled from 'styled-components';

const Option = styled.div`
  display: flex;
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  align-items: center;
  padding-left: 10px;
  background: rgba(0, 126, 255, 0.08);
  border: 1px solid rgba(0, 126, 255, 0.24);
  border-radius: 2px;
  line-height: ${({ lineHeight }) => lineHeight};
  color: #007eff;
  font-size: ${({ theme }) => theme.main.sizes.fonts.md};
  -webkit-font-smoothing: antialiased;
`;

Option.defaultProps = {
  height: '30px',
  lineHeight: '28px',
  margin: '0',
  theme: {
    main: {
      sizes: {
        fonts: {
          xs: '11px',
          sm: '12px',
          md: '13px',
          lg: '18px',
        },
      },
    },
  },
};

export default Option;
