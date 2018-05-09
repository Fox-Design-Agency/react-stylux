'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tableFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tableFunction(type, props, state, self) {
    var cursor = "";

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                TABLESTYLE: _nestingstyles2.default.create({
                    tablestyle: {
                        borderTop: state.tableBorderTop,
                        borderRight: state.tableBorderRight,
                        borderBottom: state.tableBorderBottom,
                        borderLeft: state.tableBorderLeft,
                        border: state.tableBorder,
                        margin: state.tableMargin,
                        padding: state.tablePadding,
                        textAlign: 'center',
                        width: state.tableWidth,
                        height: state.tableHeight,
                        borderCollapse: state.tableBorderCollapse,
                        cursor: 'default'
                    },
                    '@media screen and (max-width: 768px)': {
                        tablestyle: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tablestyle: {
                            display: state.mdDis
                        }
                    }
                }),
                TABLERES: _nestingstyles2.default.create({
                    tableres: {
                        overflowX: 'auto'
                    },
                    '@media screen and (max-width: 768px)': {
                        tableres: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tableres: {
                            display: state.mdDis
                        }
                    }
                })
            };
        default:
            return;
    }
}