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
    var cursor = "";

    var background = props.background;
    var backgroundImage = props.image;
    var backgroundRepeat = props.imageRepeat || 'no-repeat';
    var backgroundPosition = props.backgroundPosition || 'center';
    var backgroundSize = props.imageSize || 'cover';
    var width = props.width || '100%';
    var height = props.height;
    var bottomBoxWidth = props.bottomBoxWidth || '100%';
    var bottomBoxHeight = props.bottomBoxHeight || '25%';
    var bottomBoxPadding = props.bottomBoxPadding;
    var bottomBoxBackgroundColor = props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)';
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    },
                    bottombackground: {
                        backgroundColor: bottomBoxBackgroundColor,
                        width: bottomBoxWidth,
                        height: bottomBoxHeight,
                        padding: bottomBoxPadding,
                        overflow: 'hidden'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis
                        },
                        bottombackground: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis
                        },
                        bottombackground: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '3':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '4':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '5':
            cursor = "pointer";
            return {
                HEROSTYLE: _nestingstyles2.default.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}