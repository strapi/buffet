import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useClickAwayListener } from '@buffetjs/hooks';

import PickerButton from './PickerButton';
import PickerSection from './PickerSection';
import PickerWrapper from './PickerWrapper';

const Picker = ({ renderButtonContent, renderSectionContent }) => {
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
      <PickerSection isOpen={isOpen}>
        {renderSectionContent(handleToggle)}
      </PickerSection>
    </PickerWrapper>
  );
};

Picker.defaultProps = {
  renderButtonContent: () => {},
  renderSectionContent: () => {},
};

Picker.propTypes = {
  renderButtonContent: PropTypes.func,
  renderSectionContent: PropTypes.func,
};

export default Picker;
