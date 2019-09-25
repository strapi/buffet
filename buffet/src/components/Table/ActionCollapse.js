import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function ActionCollapse({
  colSpan,
  translatedNumberOfEntry,
  translatedNumberOfEntries,
  translatedAction,
  icon,
  numberOfSelectedEntries,
  onConfirm,
}) {
  return (
    <tr className="deleteRow">
      <td colSpan={colSpan}>
        <p>
          {numberOfSelectedEntries}
          &nbsp;
          {numberOfSelectedEntries > 1
            ? translatedNumberOfEntries
            : translatedNumberOfEntry}
          &nbsp; selected&nbsp;-&nbsp;
          <button onClick={onConfirm} type="button">
            <p>{translatedAction}</p>
            {icon && <Icon icon={icon} />}
          </button>
        </p>
      </td>
    </tr>
  );
}

ActionCollapse.defaultProps = {
  icon: 'trash',
  translatedNumberOfEntry: 'entry',
  translatedNumberOfEntries: 'entries',
  translatedAction: 'Delete all',
  numberOfSelectedEntries: 0,
  onConfirm: () => {},
};

ActionCollapse.propTypes = {
  colSpan: PropTypes.number.isRequired,
  icon: PropTypes.string,
  numberOfSelectedEntries: PropTypes.number,
  onConfirm: PropTypes.func,
  translatedAction: PropTypes.string,
  translatedNumberOfEntries: PropTypes.string,
  translatedNumberOfEntry: PropTypes.string,
};

export default ActionCollapse;
