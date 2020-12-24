/* stylelint-disable declaration-no-important */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

// Add !important to customize CSS is recommended by react-tooltip in the official readme
const Tooltip = styled(ReactTooltip).attrs(({ place, delayShow, theme }) => ({
  // Pre set the tooltip static props.
  effect: 'solid',
  place,
  delayShow,
  arrowColor: 'transparent',
  backgroundColor: theme.main.colors.greyDark,
}))`
  padding: 0.5rem 0.7rem !important;
  opacity: 1 !important;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius} !important;
  max-width: 400px;
  max-height: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Tooltip.defaultProps = {
  delayShow: 500,
  place: 'bottom',
  theme: {
    main: {
      colors: {
        greyDark: '#292b2c',
      },
      sizes: {
        borderRadius: '2px',
      },
    },
  },
};
Tooltip.propTypes = {
  delayShow: PropTypes.number,
  place: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

export default Tooltip;
