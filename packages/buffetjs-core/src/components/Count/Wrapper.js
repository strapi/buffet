import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import colors from '../../theme/colors';

const Wrapper = styled(Flex)`
  width: fit-content;
  height: 1.4rem;
  min-width: 1.4rem;
  padding: 0 0.2rem;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.main.colors.lightBlue : '#e9eaeb'};
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors,
      sizes: {
        borderRadius: '2px',
        paddings: {
          xs: '5px',
        },
      },
    },
  },
};

Wrapper.propTypes = {
  isActive: PropTypes.bool,
  theme: PropTypes.object,
};

export default Wrapper;
