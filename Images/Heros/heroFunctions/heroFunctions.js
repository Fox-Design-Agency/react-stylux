'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = heroFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function heroFunction(type, props, state, self) {
    var cursor = void 0,
        HEROSTYLE = void 0,
        BOTTOMBACKGROUND = "";

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    },
                    bottombackground: {
                        backgroundColor: state.bottomBoxBackgroundColor,
                        width: state.bottomBoxWidth,
                        height: state.bottomBoxHeight,
                        padding: state.bottomBoxPadding,
                        overflow: 'hidden'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        },
                        bottombackground: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        },
                        bottombackground: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = '3':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = '4':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = '5':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = 'custom':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}