'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = subnavbarFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function subnavbarFunction(type, props, state, self) {
    var cursor = "";

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                SUBNAVBAR: _nestingstyles2.default.create({
                    subnavbar: {
                        width: state.totalWidth,
                        height: state.totalHeight,
                        display: state.display,
                        flexDirection: 'column',
                        alignItems: state.alignItems,
                        margin: '0',
                        padding: state.padding,
                        background: state.mainBackground,
                        color: state.color,
                        top: state.top,
                        bottom: state.bottom,
                        left: state.left,
                        right: state.right,
                        position: state.position,
                        zIndex: state.zIndex
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar: {
                            display: state.mddis,
                            alignItems: 'center'
                        }
                    }
                }),
                SUBNAVBAR_NAVBAR: _nestingstyles2.default.create({
                    subnavbar_navbar: {
                        width: state.navBarWidth,
                        height: 'inherit',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flex: 1,
                        alignItems: state.columnAlign,
                        fontFamily: state.fontFamily,
                        flexDirection: state.direction
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar: {
                            display: state.mddis,
                            width: '90%'
                        }
                    }
                })

            };
        case type = '2':
            cursor = "pointer";
            return {
                SUBNAVBAR: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    color: state.color,
                    display: state.display,
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    posistion: 'sticky',
                    top: 0
                },
                SUBNAVBAR_NAVBAR1: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction
                },
                SUBNAVBAR_NAVBAR2: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction
                }
                // case (type = '3'):
                //     cursor = "pointer"
                //     return {


                //     }
                // case (type = '4'):
                //     cursor = "pointer"
                //     return {


                //     }
                // case (type = '5'):
                //     cursor = "pointer"
                //     return {


                //     }
            };default:
            return;
    }
}