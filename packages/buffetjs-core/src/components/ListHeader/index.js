/**
 *
 * ListHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ListHeader as StyledListHeader } from '@buffetjs/styles';
import Button from '../Button';
import Flex from '../Flex';
import Padded from '../Padded';
import Text from '../Text';
import BaselineAlignement from './BaselineAlignement';

function ListHeader({ button, title, subtitle }) {
  return (
    <StyledListHeader>
      <Flex justifyContent="space-between">
        <Padded top bottom size="smd">
          <Text fontSize="lg" fontWeight="bold" lineHeight="18px">
            {title}
          </Text>
          {subtitle && (
            <Padded top size="xs">
              <Text fontSize="md" color="grey" lineHeight="13px">
                {subtitle}
              </Text>
            </Padded>
          )}
        </Padded>
        {button && (
          <BaselineAlignement>
            <Button {...button} />
          </BaselineAlignement>
        )}
      </Flex>
    </StyledListHeader>
  );
}

ListHeader.defaultProps = {
  button: null,
  title: null,
  subtitle: null,
};

ListHeader.propTypes = {
  button: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.bool,
    type: PropTypes.string,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ListHeader;
