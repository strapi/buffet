import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from '../../styled/InputText/IconWrapper';
import Icon from '../Icon';
import IconText from '../../styled/InputText/IconText';

function PrefixIcon({ type, icon }) {
  if (icon) {
    return (
      <IconWrapper>
        <Icon icon={icon} />
      </IconWrapper>
    );
  }
  if (type === 'search') {
    return (
      <IconWrapper>
        <Icon icon={type} />
      </IconWrapper>
    );
  }
  if (type === 'email') {
    return <IconText text="@" />;
  }

  return null;
}

PrefixIcon.defaultProps = {
  icon: null,
};

PrefixIcon.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string.isRequired,
};

export default PrefixIcon;
