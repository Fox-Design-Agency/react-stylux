'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buttonFunction;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function buttonFunction(type, props, state, self) {
    var _mdbuttonStyles, _mdbuttonStyles2;

    var buttonStyles = void 0,
        cursor = "";

    var width = props.width;
    var height = props.height;
    var fontSize = props.fontSize || '20px';
    var color = props.color || '#000000';
    var hoverColor = props.hover || 'white';
    var hoverBackground = props.hoverBackground || '#000000';
    var revColor = props.color || '#000000';
    var frev = props.color || 'white';
    var background = props.background || '#ffffff';
    var backgroundColor = props.background || 'white';
    var blockBackground = props.background || "black";
    var revBackground = props.background || '#ffffff';
    var borderRadius = props.borderRadius || '28px';
    var border = props.border || 'solid #000000 2px';
    var padding = props.padding || '10px 20px 10px 20px';
    var margin = props.margin || "0 0 17px 0";
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var trandform = props.transform;
    var trandformrev = props.transform || 'translateY(-4px)';
    var hovBackground = props.hovBackground || '#eee';
    var hovBoxShadow = props.hovBoxShadow || '0 5px #666';
    var floatBoxShadow = props.boxShadow;
    var boxShadow = props.boxShadow || '0 9px #999';
    var boxShadowRev = props.boxShadow || '0 9px #999';
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis;
    var mddis = props.mdDis;
    switch (type) {
        case '1':
            backgroundColor = arguments[4] || backgroundColor;
            color = arguments[5] || color;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var background = hoverBackground;
                    var color = hoverColor;
                    self.renderStuff(background, color);
                },
                changeHoverBack: function changeHoverBack() {
                    var revbackground = revBackground;
                    var revcolor = revColor;
                    self.renderStuff(revbackground, revcolor);
                },
                buttonStyles: {
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height
                },
                smbuttonStyles: {
                    display: smdis,
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height

                },
                mdbuttonStyles: {
                    display: mddis,
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height
                }
            };
        case '2':
            backgroundColor = arguments[4] || backgroundColor;
            boxxShadow = arguments[5] || boxShadow;
            var transform = arguments[6] || transform;
            margin = props.margin || "5px 0 17px 0";
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = hovBackground;
                    var boxShadow = hovBoxShadow;
                    var transform = 'translateY(4px)';
                    self.renderStuff(backgroundCol, boxShadow, transform);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = revBackground;
                    var boxShadow = boxShadowRev;
                    var transform = trandformrev;
                    self.renderStuff(backgroundCol, boxShadow, transform);
                },
                buttonStyles: {
                    display: 'inline-block',
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin
                },

                smbuttonStyles: {
                    display: smdis,
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin

                },
                mdbuttonStyles: {
                    display: mddis,
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin
                }

            };
        case '3':
            var boxxShadow = arguments[4] || floatBoxShadow;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var hovBoxShadow = '0 5px 7px 0 black, 0 10px 20px 0';
                    self.renderStuff(hovBoxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var revBoxShadow = floatBoxShadow;
                    self.renderStuff(revBoxShadow);
                },
                buttonStyles: {
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    boxShadow: boxxShadow,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    margin: margin
                },
                smbuttonStyles: {
                    display: smdis,
                    width: width,
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    boxShadow: boxxShadow,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    margin: margin

                },
                mdbuttonStyles: (_mdbuttonStyles = {
                    display: mddis,
                    width: width
                }, _defineProperty(_mdbuttonStyles, 'display', 'block'), _defineProperty(_mdbuttonStyles, 'border', 'none'), _defineProperty(_mdbuttonStyles, 'backgroundColor', backgroundColor), _defineProperty(_mdbuttonStyles, 'padding', '14px 28px'), _defineProperty(_mdbuttonStyles, 'fontSize', fontSize), _defineProperty(_mdbuttonStyles, 'cursor', cursor), _defineProperty(_mdbuttonStyles, 'textAlign', 'center'), _defineProperty(_mdbuttonStyles, 'color', color), _defineProperty(_mdbuttonStyles, 'boxShadow', boxxShadow), _defineProperty(_mdbuttonStyles, 'transform', transform), _defineProperty(_mdbuttonStyles, 'transformOrigin', transformOrigin), _defineProperty(_mdbuttonStyles, 'margin', margin), _mdbuttonStyles)
            };
        case '4':
            backgroundColor = arguments[4] || blockBackground;
            color = arguments[5] || frev;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = hovBackground;
                    var col = revColor;
                    self.renderStuff(backgroundCol, col);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = revColor;
                    var col = frev;
                    self.renderStuff(backgroundCol, col);
                },
                buttonStyles: {
                    width: '100%',
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin
                },
                smbuttonStyles: {
                    display: smdis,
                    width: '100%',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin

                },
                mdbuttonStyles: {
                    display: mddis,
                    width: '100%',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin
                }
            };
        case '5':
            backgroundColor = arguments[4] || backgroundColor;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = hovBackground;
                    self.renderStuff(backgroundCol);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = revBackground;
                    self.renderStuff(backgroundCol);
                },
                buttonStyles: {
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin
                },
                smbuttonStyles: {
                    display: smdis,
                    width: width,
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin

                },
                mdbuttonStyles: (_mdbuttonStyles2 = {
                    display: mddis,
                    width: width
                }, _defineProperty(_mdbuttonStyles2, 'display', 'block'), _defineProperty(_mdbuttonStyles2, 'border', 'none'), _defineProperty(_mdbuttonStyles2, 'backgroundColor', backgroundColor), _defineProperty(_mdbuttonStyles2, 'padding', '14px 28px'), _defineProperty(_mdbuttonStyles2, 'fontSize', fontSize), _defineProperty(_mdbuttonStyles2, 'cursor', 'pointer'), _defineProperty(_mdbuttonStyles2, 'textAlign', 'center'), _defineProperty(_mdbuttonStyles2, 'color', color), _defineProperty(_mdbuttonStyles2, 'transform', transform), _defineProperty(_mdbuttonStyles2, 'transformOrigin', transformOrigin), _mdbuttonStyles2)

            };
        default:
            return;
    }
}