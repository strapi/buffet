import styled from 'styled-components';
import PropTypes from 'prop-types';

const PickerSection = styled.div`
  display: none;
  position: absolute;
  top: 38px;
  left: ${({ position }) => (position === 'left' ? '0' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '0' : 'auto')};
  z-index: 1046;
  background-color: ${({ theme }) => theme.main.colors.white};
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  border: 1px solid ${({ theme }) => theme.main.colors.darkGrey};
  box-shadow: 0 2px 4px ${({ theme }) => theme.main.colors.greyAlpha};
  ${({ isOpen }) => isOpen && 'display: block;'}
`;

PickerSection.defaultProps = {
  isOpen: false,
  position: 'left',
  // TODO : This is temporary
  theme: {
    main: {
      colors: {
        white: '#ffffff',
        darkGrey: '#e3e9f3',
        greyAlpha: 'rgba(227, 233, 243, 0.5)',
      },
      sizes: {
        borderRadius: '2px',
      },
    },
  },
};

PickerSection.propTypes = {
  isOpen: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
};

export default PickerSection;
