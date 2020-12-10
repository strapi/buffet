import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useClickAwayListener } from '@buffetjs/hooks';

import PickerButton from './PickerButton';
import PickerSection from './PickerSection';
import PickerWrapper from './PickerWrapper';

const Picker = ({ position, renderButtonContent, renderSectionContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useClickAwayListener(dropdownRef, () => setIsOpen(false));

  const handleToggle = () => {
    setIsOpen(v => !v);
  };

  return (
    <PickerWrapper ref={dropdownRef}>
      <PickerButton onClick={handleToggle} isActive={isOpen}>
        {renderButtonContent(isOpen)}
      </PickerButton>
      <PickerSection isOpen={isOpen} position={position}>
        {renderSectionContent(handleToggle)}
      </PickerSection>
    </PickerWrapper>
  );
};

Picker.defaultProps = {
  position: 'left',
  renderButtonContent: () => {},
  renderSectionContent: () => {},
};

Picker.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  renderButtonContent: PropTypes.func,
  renderSectionContent: PropTypes.func,
};

export default Picker;
