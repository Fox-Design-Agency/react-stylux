'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = popupFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popupFunction(type, props, state, self) {
    var cursor = "";
    var visibility = arguments[4];
    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                POPUPCLICK: {
                    cursor: 'pointer'
                },
                POPUPSTYLE: {
                    visibility: visibility ? "visible" : "hidden",
                    backgroundColor: '#333',
                    minWidth: '250px',
                    color: '#fff',
                    textAlign: 'center',
                    borderRadius: '2px',
                    padding: '16px',
                    position: 'fixed',
                    // zIndex: '1',
                    // left: '50%',
                    bottom: '30px'
                }

            };
        case type = '2':
            cursor = "pointer";
            return {
                POPUPCLICK: {
                    cursor: 'pointer'
                },
                POPUPSTYLE: {
                    visibility: visibility ? "visible" : "hidden",

                    backgroundColor: '#333',
                    minWidth: '250px',
                    color: '#fff',
                    textAlign: 'center',
                    borderRadius: '2px',
                    padding: '16px',
                    position: 'absolute'
                    // zIndex: '1',
                    // left: '50%',
                }

            };
        default:
            return;
    }
}