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
    switch (type) {
        case type = 'flat':
            backgroundColor = arguments[4] || state.background;
            color = arguments[5] || state.color;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var background = self.state.hoverBackground;
                    var color = self.state.hoverColor;
                    self.renderStuff(background, color);
                },
                changeHoverBack: function changeHoverBack() {
                    var revbackground = self.state.revBackground;
                    var revcolor = self.state.revColor;
                    self.renderStuff(revbackground, revcolor);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        borderRadius: state.borderRadius,
                        color: color,
                        fontSize: state.fontSize,
                        background: backgroundColor,
                        padding: state.padding,
                        border: state.border,
                        cursor: cursor,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        width: state.width,
                        height: state.height
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })
            };
        case type = 'raised':
            backgroundColor = arguments[4] || state.backgroundColor;
            boxxShadow = arguments[5] || state.boxShadow;
            var transform = arguments[6] || state.transform;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = state.hovBackground;
                    var boxShadow = state.hovBoxShadow;
                    var transform = 'translateY(4px)';
                    self.renderStuff(backgroundCol, boxShadow, transform);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = state.backgroundRev;
                    var boxShadow = state.boxShadowRev;
                    var transform = state.transformrev;
                    self.renderStuff(backgroundCol, boxShadow, transform);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        display: 'inline-block',
                        padding: '15px 25px',
                        fontSize: state.fontSize,
                        cursor: cursor,
                        textAlign: 'center',
                        outline: 'none',
                        color: state.color,
                        backgroundColor: backgroundColor,
                        borderRadius: '15px',
                        boxShadow: boxxShadow,
                        transform: transform,
                        margin: state.margin
                    },

                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })

            };
        case type = 'floating':
            var boxxShadow = arguments[4] || state.floatBoxShadow;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var hovBoxShadow = '0 5px 7px 0 black, 0 10px 20px 0';
                    self.renderStuff(hovBoxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var revBoxShadow = state.floatBoxShadow;
                    self.renderStuff(revBoxShadow);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        width: state.width,
                        display: 'block',
                        border: 'none',
                        backgroundColor: state.backgroundColor,
                        padding: '14px 28px',
                        fontSize: state.fontSize,
                        cursor: cursor,
                        textAlign: 'center',
                        color: state.color,
                        boxShadow: boxxShadow,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        margin: state.margin
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })

            };
        case type = 'block':
            backgroundColor = arguments[4] || state.blockBackground;
            color = arguments[5] || state.frev;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = state.hovBackground;
                    var col = state.revColor;
                    self.renderStuff(backgroundCol, col);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = state.colorRev;
                    var col = state.frev;
                    self.renderStuff(backgroundCol, col);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        width: '100%',
                        display: 'block',
                        border: 'none',
                        backgroundColor: backgroundColor,
                        padding: '14px 28px',
                        fontSize: state.fontSize,
                        cursor: cursor,
                        textAlign: 'center',
                        color: color,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })

            };
        case type = 'text':
            backgroundColor = arguments[4] || state.backgroundColor;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var backgroundCol = state.hovBackground;
                    self.renderStuff(backgroundCol);
                },
                changeHoverBack: function changeHoverBack() {
                    var backgroundCol = state.colorRev;
                    self.renderStuff(backgroundCol);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        width: state.width,
                        display: 'block',
                        border: 'none',
                        backgroundColor: backgroundColor,
                        padding: '14px 28px',
                        fontSize: state.fontSize,
                        cursor: 'pointer',
                        textAlign: 'center',
                        color: state.color,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })

            };
        case type = 'custom':
            var background = arguments[4] || self.state.background;
            var color = arguments[5] || self.state.color;
            cursor = "pointer";
            return {
                changeHover: function changeHover() {
                    var background = self.state.hoverBackground;
                    var color = self.state.hoverColor;
                    self.renderStuff(background, color);
                },
                changeHoverBack: function changeHoverBack() {
                    var revbackground = self.state.revBackground;
                    var revcolor = self.state.revColor;
                    self.setState({ color: revcolor, background: revbackground });
                    self.renderStuff(revbackground, revcolor);
                },
                BUTTONSTYLES: _nestingstyles2.default.create({
                    buttonStyles: {
                        borderRadius: state.borderRadius,
                        color: color,
                        fontSize: state.fontSize,
                        background: background,
                        padding: state.padding,
                        border: state.border,
                        cursor: cursor,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        width: state.width,
                        height: state.height
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis
                        }
                    }
                })

            };
        default:
            return;
    }
}