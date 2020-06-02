import PropTypes from 'prop-types';
import styled from 'styled-components';

const Padded = styled.div`
  padding-top: ${({ theme, size, top }) =>
    top && (theme.main.sizes.paddings[size] || size)};
  padding-right: ${({ theme, size, right }) =>
    right && (theme.main.sizes.paddings[size] || size)};
  padding-bottom: ${({ theme, size, bottom }) =>
    bottom && (theme.main.sizes.paddings[size] || size)};
  padding-left: ${({ theme, size, left }) =>
    left && (theme.main.sizes.paddings[size] || size)};
`;

Padded.defaultProps = {
  bottom: false,
  left: false,
  right: false,
  size: 'sm',
  top: false,
  // TODO : This is temporary
  theme: {
    main: {
      sizes: {
        paddings: {
          xs: '5px',
          sm: '10px',
          smd: '20px',
          md: '30px',
          lg: '40px',
        },
      },
    },
  },
};

Padded.propTypes = {
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  top: PropTypes.bool,
};

export default Padded;
