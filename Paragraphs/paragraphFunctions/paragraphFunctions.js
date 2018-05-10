"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = paragraphFunction;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require("nestingstyles");

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function paragraphFunction(type, props, state, self) {
    var size = "";

    var color = props.color;
    var colorRev = props.color;
    var textShadow = props.shadow;
    var fontFamily = props.font;
    var fontSize = props.size;
    var smFontSize = props.smSize || '1.3em';
    var mdFontSize = props.mdSize || '1.3em';
    var lineHeight = props.lineHeight || '1.5em';
    var fontWeight = props.weight || '400';
    var fontVariant = props.variant;
    var display = props.display || 'flex';
    var align = props.align || 'center';
    var textAlign = props.textAlign || 'center';
    var padding = props.padding || '5px';
    var margin = props.margin || '1px';
    var width = props.width;
    var height = props.height;
    var maxWidth = props.maxW;
    var maxHeight = props.maxH;
    var border = props.border;
    var bLeft = props.bLeft;
    var bRight = props.bRight;
    var bTop = props.bTop;
    var bBottom = props.bBottom;
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    var hoverColor = props.hovColor;
    var wordWrap = props.wordWrap || "break-word";

    switch (type) {
        case type = "1":
            size = fontSize || '1.333em';
            return {
                PARAGRAPHSTYLES: _nestingstyles2.default.create({
                    paragraph: {
                        flex: 1,
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontSize: size,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flexWrap: "wrap",
                        wordWrap: wordWrap
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
            };
        case type = '2':
            size = state.fontSize || '0.95em';
            return {
                PARAGRAPHSTYLES: _nestingstyles2.default.create({
                    paragraph: {
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontSize: size,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
            };
        case type = "3":
            size = fontSize || '1.6em';
            smFontSize = props.smSize || '1.5em';
            mdFontSize = props.mdSize || '1.6em';
            lineHeight = props.lineHeight || '1.8em';
            return {
                PARAGRAPHSTYLES: _nestingstyles2.default.create({
                    paragraph: {
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontSize: size,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
            };
        case type = '4':
            size = props.size || '1.6em';
            smFontSize = props.smSize || '1.5em';
            mdFontSize = props.mdSize || '1.6em';
            lineHeight = props.lineHeight || '1.8em';
            color = props.color || 'lightgray';
            colorRev = props.color || 'lightgray';
            hoverColor = props.hovColor || 'lightgray';
            return {
                PARAGRAPHSTYLES: _nestingstyles2.default.create({
                    paragraph: {
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontSize: size,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
            };
        case type = '5':
            size = '1.333em' || fontSize;
            return {
                PARAGRAPHSTYLES: _nestingstyles2.default.create({
                    paragraph: {
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontSize: size,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
            };
        default:
            return;
    }
}