"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = exports.theme = {
  "0": {
    background: "#fff",
    secondaryBackground: "#eee"
  },
  "1": {
    background: "#eee",
    secondaryBackground: "#000"
  },
  "2": {
    background: "#000",
    secondaryBackground: "#eee",
    color: "#fff"
  }
};

var ThemeContext = _react2.default.createContext(); //passing initial value


exports.default = ThemeContext;