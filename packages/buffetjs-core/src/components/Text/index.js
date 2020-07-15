import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';

const Text = styled.p`
  margin: 0;
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ theme, color }) => theme.main.colors[color] || color};
  font-size: ${({ theme, fontSize }) => theme.main.sizes.fonts[fontSize]};
  font-weight: ${({ theme, fontWeight }) => theme.main.fontWeights[fontWeight]};
  text-transform: ${({ textTransform }) => textTransform};
  ${({ ellipsis }) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

Text.defaultProps = {
  color: 'greyDark',
  ellipsis: false,
  fontSize: 'md',
  fontWeight: 'regular',
  lineHeight: 'normal',
  textTransform: 'none',
  // TODO : This is temporary
  theme: {
    main: {
      colors,
      sizes: {
        fonts: {
          xs: '11px',
          sm: '12px',
          md: '13px',
          lg: '18px',
          xl: '24px',
        },
      },
      fontWeights: {
        regular: 400,
        semiBold: 500,
        bold: 600,
        black: 900,
      },
    },
  },
};

Text.propTypes = {
  color: PropTypes.string,
  ellipsis: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  textTransform: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

export default Text;
