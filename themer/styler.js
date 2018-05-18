"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styler = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styler = exports.styler = {
  "0": {
    font: "A font!!!"
  },
  "1": {
    background: "#eee"
  },
  "2": {
    background: "#000",
    color: "#fff"
  }
};

var StyleContext = _react2.default.createContext(); //passing initial value


exports.default = StyleContext;