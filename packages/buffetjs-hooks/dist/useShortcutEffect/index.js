'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _useActiveKeys = _interopRequireDefault(require('../useActiveKeys'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var keyCodes = {
  alt: 18,
  arrowup: 38,
  arrowdown: 40,
  enter: 13,
  f: 70,
  tab: 9,
};

function getShortcutKeys(keys) {
  return keys.split('+').map(function(value) {
    return keyCodes[value.toLowerCase()];
  });
}

function useShortcutEffect(shortcut, listener) {
  var isEnabled =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var activeKeys = (0, _useActiveKeys['default'])(isEnabled);
  var listenerRef = (0, _react.useRef)();
  listenerRef.current = listener;
  (0, _react.useEffect)(
    function() {
      var match = getShortcutKeys(shortcut).every(function(key) {
        return activeKeys.includes(key);
      });

      if (match) {
        listenerRef.current();
      }
    },
    [activeKeys, shortcut]
  );
}

var _default = useShortcutEffect;
exports['default'] = _default;
