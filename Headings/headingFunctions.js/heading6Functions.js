'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = heading6Function;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function heading6Function(type, props, state, self) {
    var color = props.color;
    var colorRev = props.color;
    var textShadow = props.shadow;
    var fontFamily = props.font;
    var fontSize = props.size || '3.489em';
    var smFontSize = props.smSize || '2.5em';
    var mdFontSize = props.mdSize || '3em';
    var fontWeight = props.weight || '600';
    var fontVariant = props.variant;
    var display = props.display || 'flex';
    var align = props.align || 'center';
    var textAlign = props.textAlign || 'center';
    var padding = props.padding || '0 0 5px 0';
    var margin = props.margin || '1px';
    var width = props.width;
    var height = props.height;
    var maxWidth = props.maxW;
    var maxHeight = props.maxH;
    var bLeft = props.bLeft;
    var bRight = props.bRight;
    var bTop = props.bTop;
    var bBottom = props.bBottom;
    var border = props.border;
    var id = props.id;
    var className = props.className;
    var childs = '';
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
    var cursor = props.cursor;

    switch (type) {
        case type = '1':
            cursor = props.cursor;
            return {
                HEADING: _nestingstyles2.default.create({
                    heading: {
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
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        heading: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        heading: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })

            };

        case type = '2':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {

                HEADING: _nestingstyles2.default.create({
                    heading: {
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
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        heading: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        heading: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })

            };
        case type = '3':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {

                HEADING: _nestingstyles2.default.create({
                    heading: {
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
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        heading: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        heading: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })

            };
        case type = '4':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {
                HEADING: _nestingstyles2.default.create({
                    heading: {
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
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        display: display,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor
                    },
                    hoverStyle: {
                        color: hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        heading: {
                            display: smdis,
                            color: color,
                            fontSize: smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        heading: {
                            display: mddis,
                            color: color,
                            fontSize: mdFontSize
                        }
                    }
                })
                // case (type = '5'):
                //     cursor = "pointer"
                //     return {


                //     }
            };default:
            return;
    }
}