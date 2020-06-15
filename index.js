"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            left: 0px;\n            height: 100vh;\n            transform: translateX(", ");\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            right: 0px;\n            height: 100vh;\n            transform: translateX(", ");\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            top: 0px;\n            width: 100vw;\n            transform: translateY(", ");\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            bottom: 0px;\n            width: 100vw;\n            transform: translateY(", ");\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\n    ", "\n\n\t&.noDragged {\n\t\ttransition: all 0.3s;\n\t}\n\n\tz-index: 999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSwiper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var pos = _ref.pos,
      trans = _ref.trans;
  return pos === 'down' && (0, _styledComponents.css)(_templateObject2(), trans) || pos === 'up' && (0, _styledComponents.css)(_templateObject3(), trans) || pos === 'right' && (0, _styledComponents.css)(_templateObject4(), trans) || pos === 'left' && (0, _styledComponents.css)(_templateObject5(), trans);
});

var SwipeMe = function SwipeMe(_ref2) {
  var children = _ref2.children,
      hide = _ref2.hide,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? "down" : _ref2$position,
      _ref2$handle = _ref2.handle,
      handle = _ref2$handle === void 0 ? 20 : _ref2$handle;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      startPosY = _useState2[0],
      setStartPosY = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      diff = _useState4[0],
      setDiff = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDragged = _useState6[0],
      setIsDragged = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isHidden = _useState8[0],
      setIsHidden = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      swipeableDivSizeY = _useState10[0],
      setSwipeableDivSizeY = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      swipeableDivSizeX = _useState12[0],
      setSwipeableDivSizeX = _useState12[1];

  var swipeableEl = (0, _react.useRef)();

  var onTouchMove = function onTouchMove(e) {
    switch (position) {
      default:
      case 'down':
      case 'up':
        setDiff(-(startPosY - e.touches[0].screenY));
        setIsDragged(true);
        break;

      case 'right':
      case 'left':
        setDiff(-(startPosY - e.touches[0].screenX));
        setIsDragged(true);
        console.log(diff);
        break;
    }
  };

  var getStartPos = function getStartPos(e) {
    switch (position) {
      default:
      case 'down':
      case 'up':
        setStartPosY(e.touches[0].screenY);
        break;

      case 'right':
      case 'left':
        setStartPosY(e.touches[0].screenX);
        break;
    }
  };

  var onTouchEnd = function onTouchEnd() {
    setIsDragged(false);

    switch (position) {
      default:
      case 'down':
        if (diff > swipeableDivSizeY / 2) {
          setIsHidden(true);
          setDiff(swipeableDivSizeY);
        } else {
          setIsHidden(false);
          setDiff(0);
        }

        break;

      case 'up':
        if (Math.abs(diff) > swipeableDivSizeY / 2) {
          setIsHidden(true);
          setDiff(0);
        } else {
          setIsHidden(false);
          setDiff(swipeableDivSizeY);
        }

        break;

      case 'right':
        if (diff > swipeableDivSizeX / 2) {
          setIsHidden(true);
          setDiff(swipeableDivSizeX);
        } else {
          setIsHidden(false);
          setDiff(0);
        }

        break;

      case 'left':
        if (Math.abs(diff) > swipeableDivSizeX / 2) {
          setIsHidden(true);
          setDiff(0);
        } else {
          setIsHidden(false);
          setDiff(swipeableDivSizeX);
        }

        break;
    }
  };

  (0, _react.useEffect)(function () {
    switch (position) {
      default:
      case 'down':
      case 'up':
        if (swipeableEl.current) {
          setSwipeableDivSizeY(swipeableEl.current.offsetHeight);
        }

        break;

      case 'right':
      case 'left':
        if (swipeableEl.current) {
          setSwipeableDivSizeX(swipeableEl.current.offsetWidth);
          console.log(swipeableDivSizeX);
        }

        break;
    }
  }, [isHidden]);
  (0, _react.useEffect)(function () {
    setIsHidden(hide);
  }, [hide]);

  var swipeable = function swipeable() {
    switch (position) {
      default:
      case 'down':
        return isHidden ? diff > 0 ? swipeableDivSizeY - handle : Math.max(swipeableDivSizeY - handle + diff, 0) : Math.max(diff, 0);

      case 'up':
        return isHidden ? diff < 0 ? -swipeableDivSizeY + handle : Math.min(-swipeableDivSizeY + handle + diff, 0) : Math.min(diff, 0);

      case 'right':
        return isHidden ? diff > 0 ? swipeableDivSizeX - handle : Math.max(swipeableDivSizeX - handle + diff, 0) : Math.max(diff, 0);

      case 'left':
        return isHidden ? diff < 0 ? -swipeableDivSizeX + handle : Math.min(-swipeableDivSizeX + handle + diff, 0) : Math.min(diff, 0);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(StyledSwiper, {
    ref: swipeableEl,
    onTouchMove: onTouchMove,
    onTouchStart: getStartPos,
    onTouchEnd: onTouchEnd,
    onClick: isHidden ? function () {
      return setIsHidden(false);
    } : function () {
      return setIsHidden(true);
    },
    trans: "".concat(swipeable(), "px"),
    className: isDragged ? '' : 'noDragged',
    pos: position
  }, children);
};

var _default = SwipeMe;
exports["default"] = _default;
