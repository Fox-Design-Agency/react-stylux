'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbarFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function navbarFunction(type, props, state, self) {
    var _hamestnav;

    var cursor = void 0,
        smdis = void 0,
        show = void 0,
        display = "";

    switch (type) {
        case type = '1':
            cursor = "pointer";
            smdis = state.smdis || arguments[4];
            show = arguments[5];
            return {
                NAVBAR: _nestingstyles2.default.create({
                    navbar: {
                        width: state.totalWidth,
                        height: state.totalHeight,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: state.alignItems,
                        margin: '0',
                        padding: state.padding,
                        background: state.mainBackground,
                        color: state.color

                    },
                    '@media screen and (max-width: 768px)': {
                        navbar: {
                            display: 'flex'
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        navbar: {
                            display: 'flex'
                        }
                    }
                }),
                NAVBAR_NAVBAR: _nestingstyles2.default.create({
                    navbar_navbar: {
                        width: state.navBarWidth,
                        height: 'inherit',
                        display: state.display,
                        flexWrap: 'wrap',
                        alignItems: state.columnAlign,
                        fontFamily: state.fontFamily,
                        flexDirection: state.direction,
                        top: state.top,
                        right: state.right,
                        left: state.left,
                        bottom: state.bottom,
                        position: state.position,
                        zIndex: 200
                    },
                    '@media screen and (max-width: 768px)': {
                        navbar_navbar: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        navbar_navbar: {
                            display: state.mddis
                        }
                    }
                }),
                HAMNAV: _nestingstyles2.default.create({
                    HAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: state.hamMenuDis,
                        cursor: 'pointer',
                        flexDirection: 'column'

                    },
                    '@media screen and (max-width: 768px)': {
                        HAMNAV: {
                            width: '50px',
                            height: '50px',
                            display: state.hamSmDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        HAMNAV: {
                            width: '50px',
                            height: '50px',
                            display: state.hamMdDis
                        }
                    }
                }),
                HAMLINES: {
                    display: 'flex',
                    width: '25px',
                    height: '5px',
                    backgroundColor: 'black',
                    margin: '3px 0'
                },
                HAMESTNAV: _nestingstyles2.default.create({
                    hamestnav: (_hamestnav = {
                        visibility: 'hidden',
                        width: '100%',
                        flexDirection: 'column',
                        position: state.hamPosition,
                        top: state.hamTop,
                        left: state.hamLeft,
                        background: state.hamBackground,
                        display: 'flex'
                    }, _defineProperty(_hamestnav, 'flexDirection', 'column'), _defineProperty(_hamestnav, 'alignItems', 'center'), _defineProperty(_hamestnav, 'boxShadow', state.hamShadow), _defineProperty(_hamestnav, 'animationIterationCount', state.animationIterationCount), _defineProperty(_hamestnav, 'animationTimingFunction', state.animationTimingFunction), _defineProperty(_hamestnav, 'animationName', state.animationName), _defineProperty(_hamestnav, 'animationDuration', state.animationDuration), _defineProperty(_hamestnav, 'transformOrigin', state.transformOrigin), _defineProperty(_hamestnav, 'animationFillMode', state.animationFillMode), _hamestnav),
                    '@media screen and (max-width: 768px)': {
                        hamestnav: {
                            visibility: show ? 'visible' : 'hidden'
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        hamestnav: {
                            visibility: show ? 'visible' : 'hidden'
                        }
                    }
                })
                // case (type = '2'):
                //     cursor = "pointer"
                //     return {

                //     }
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