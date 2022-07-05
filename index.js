'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject$1;
var Blob$1 = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  background-color: #72a0c1;\n  color: #e52b50;\n  position: relative;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n"])));

var Blobby$1 = function Blobby() {
  return /*#__PURE__*/React__default["default"].createElement(Blob$1, null, /*#__PURE__*/React__default["default"].createElement("p", null, "/-(_)-\\"), /*#__PURE__*/React__default["default"].createElement("p", null, "+-^U_U^-+"), /*#__PURE__*/React__default["default"].createElement("p", null, " \\|/\\|/ "));
};

var _templateObject;
var Blob = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  background-color: #72a0c1;\n  color: #e52b50;\n  position: relative;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n"])));

var Blobby = function Blobby(props) {
  return /*#__PURE__*/React__default["default"].createElement(Blob, null, /*#__PURE__*/React__default["default"].createElement("p", null, "OK"), /*#__PURE__*/React__default["default"].createElement("p", null, "OK"), /*#__PURE__*/React__default["default"].createElement("h3", null, props.name));
};

exports.Blobbi = Blobby;
exports.Blobby = Blobby$1;
