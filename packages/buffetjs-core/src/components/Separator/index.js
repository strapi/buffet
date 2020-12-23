import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';
import Padded from '../Padded';
import Text from '../Text';
import colors from '../../theme/colors';

const BorderTop = styled.div`
  border-top: 1px solid ${({ theme }) => theme.main.colors.border};
  width: 100%;
`;

BorderTop.defaultProps = {
  theme: {
    main: {
      colors,
    },
  },
};
BorderTop.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

const Separator = ({ label }) => (
  <Flex justifyContent="center" alignItems="center">
    {label ? (
      <>
        <BorderTop />
        <Padded left right size="sm">
          <Text color="grey">{label}</Text>
        </Padded>
        <BorderTop />
      </>
    ) : (
      <BorderTop />
    )}
  </Flex>
);

Separator.defaultProps = {
  label: null,
};
Separator.propTypes = {
  label: PropTypes.string,
};

export default Separator;
