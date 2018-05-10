'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = listFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listFunction(type, props, state, self) {
    var cursor = "";
    var color = props.color || 'black';
    var fontFamily = props.font || 'serif';
    var fontSize = props.size || '1.333em';
    var lineHeight = props.lineHeight || '1.5em';
    var fontWeight = props.weight || '400';
    var paddingLeft = props.paddingLeft;
    var listStyleType = props.listStyleType || 'decimal';
    var bulletStyleType = props.listStyleType || 'disc';
    var squareStyleType = props.listStyleType || 'square';
    var listStyleImage = props.listStyleImage || 'none';
    var listStylePosition = props.listStylePosition || 'inside';
    var smdis = props.smDis;
    var mddis = props.mdDis;
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var width = props.width || "100%";
    var itemPadding = props.itemPadding;
    var itemBGImage = props.itemBGImage;
    var itemBGPosition = props.itemBGPosition;
    var itemBGSize = props.itemBGSize;

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                LISTSTYLE: _nestingstyles2.default.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: listStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width
                    },
                    listitemstyle: {
                        paddingLeft: itemPadding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat'
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis
                        },
                        listitemstyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis
                        },
                        listitemstyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            return {
                LISTSTYLE: _nestingstyles2.default.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        position: 'relative',
                        width: width

                    },
                    listitemstyle: {
                        paddingLeft: '70px',
                        counterIncrement: 'aCounter'

                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis
                        },
                        listitemstyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis
                        },
                        listitemstyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '3':
            cursor = "pointer";
            return {
                LISTSTYLE: _nestingstyles2.default.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: bulletStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width
                    },
                    listitemstyle: {
                        paddingLeft: itemPadding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat'
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis
                        },
                        listitemstyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis
                        },
                        listitemstyle: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '4':
            cursor = "pointer";
            listStyleType = "none";
            var border = props.border || "1px solid black";
            var padding = props.itemPadding || "15px";
            var margin = props.itemMargin || "5px 0 0 0";
            width = props.width;
            var itemWidth = props.itemWidth || "250px";
            return {
                LISTSTYLE: _nestingstyles2.default.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: listStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width
                    },
                    listitemstyle: {
                        margin: margin,
                        border: border,
                        padding: padding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat',
                        width: itemWidth
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis
                        },
                        listitemstyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis
                        },
                        listitemstyle: {
                            display: mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}