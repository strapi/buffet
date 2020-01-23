'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _useEventListener = _interopRequireDefault(require('../useEventListener'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function useActiveKeys() {
  var isEnabled =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeKeys = _useState2[0],
    setActiveKeys = _useState2[1];

  (0, _useEventListener['default'])(
    'keydown',
    function(e) {
      if (!activeKeys.includes(e.keyCode)) {
        setActiveKeys(function(prevKeys) {
          return [].concat(_toConsumableArray(prevKeys), [e.keyCode]);
        });
      }
    },
    isEnabled
  );
  (0, _useEventListener['default'])(
    'keyup',
    function(e) {
      setActiveKeys(function(prevKeys) {
        return prevKeys.filter(function(key) {
          return key !== e.keyCode;
        });
      });
    },
    isEnabled
  );
  return activeKeys;
}

var _default = useActiveKeys;
exports['default'] = _default;
