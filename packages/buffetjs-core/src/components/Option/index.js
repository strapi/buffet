import React from 'react';
import PropTypes from 'prop-types';
import { Remove } from '@buffetjs/icons';
import { Option as Wrapper } from '@buffetjs/styles';
import { upperFirst } from 'lodash';
import RemoveButton from './RemoveButton';

function Filter({ label, onClick, ...rest }) {
  const content =
    typeof label === 'string' ? <span>{upperFirst(label)}</span> : label;

  return (
    <Wrapper {...rest}>
      {content}
      <RemoveButton type="button" onClick={onClick}>
        <Remove width="11px" height="11px" fill="#007eff" />
      </RemoveButton>
    </Wrapper>
  );
}

Filter.defaultProps = {
  label: '',
  onClick: () => {},
};

Filter.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

export default Filter;
