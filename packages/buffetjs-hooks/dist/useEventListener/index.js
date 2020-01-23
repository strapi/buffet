'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

function useEventListener(event, eventListener) {
  var isEnabled =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var listenerRef = (0, _react.useRef)();
  listenerRef.current = eventListener;
  (0, _react.useEffect)(
    function() {
      function handleEvent(e) {
        listenerRef.current(e);
      }

      if (isEnabled) {
        window.addEventListener(event, handleEvent);
      } else {
        window.removeEventListener(event, handleEvent);
      }

      return function() {
        window.removeEventListener(event, handleEvent);
      };
    },
    [event, isEnabled]
  );
}

var _default = useEventListener;
exports['default'] = _default;
