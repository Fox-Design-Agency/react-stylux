"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buttonFunction;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require("nestingstyles");

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonFunction(type, props, state, self) {
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
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    switch (type) {
        case type = '1':
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
                BUTTONSTYLES: _nestingstyles2.default.create({
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
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '2':
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
                BUTTONSTYLES: _nestingstyles2.default.create({
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

                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })

            };
        case type = '3':
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
                BUTTONSTYLES: _nestingstyles2.default.create({
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
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })

            };
        case type = '4':
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
                BUTTONSTYLES: _nestingstyles2.default.create({
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
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })

            };
        case type = '5':
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
                BUTTONSTYLES: _nestingstyles2.default.create({
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
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })

            };
        case type = 'custom':
            background = arguments[4] || background;
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
                    self.setState({ color: revcolor, background: revbackground });
                    self.renderStuff(revbackground, revcolor);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        borderRadius: borderRadius,
                        color: color,
                        fontSize: fontSize,
                        background: background,
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
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: mddis
                        }
                    }
                })

            };
        default:
            return;
    }
}