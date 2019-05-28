import React from 'react';
import PropTypes from 'prop-types';

function ActionCollapse({
  translatedNumberOfEntry,
  translatedNumberOfEntries,
  translatedActionInfo,
  actionInfoShape,
  numberOfSelectedEntries,
  onConfirmSelectAllAction,
}) {
  return (
    <div className="deleteRow">
      <p>
        {numberOfSelectedEntries}
        &nbsp;
        {numberOfSelectedEntries > 1
          ? translatedNumberOfEntries
          : translatedNumberOfEntry}
        &nbsp; selected&nbsp;-&nbsp;
        <button onClick={onConfirmSelectAllAction} type="button">
          <p>{translatedActionInfo}</p>
          {actionInfoShape && <i className={`fa fa-${actionInfoShape}`} />}
        </button>
      </p>
    </div>
  );
}

ActionCollapse.defaultProps = {
  translatedNumberOfEntry: 'entry',
  translatedNumberOfEntries: 'entries',
  translatedActionInfo: '',
  actionInfoShape: null,
  numberOfSelectedEntries: 0,
  onConfirmSelectAllAction: () => {},
};

ActionCollapse.propTypes = {
  actionInfoShape: PropTypes.string,
  numberOfSelectedEntries: PropTypes.number,
  onConfirmSelectAllAction: PropTypes.func,
  translatedActionInfo: PropTypes.string,
  translatedNumberOfEntries: PropTypes.string,
  translatedNumberOfEntry: PropTypes.string,
};

export default ActionCollapse;
