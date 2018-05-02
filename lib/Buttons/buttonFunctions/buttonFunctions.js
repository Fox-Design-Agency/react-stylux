import React from "react";
import StyleSheet from 'nestingstyles';

export default function buttonFunction(type, props, state, self) {
    let buttonStyles, cursor, backgroundColor, color = "";
    switch (type) {
        case (type = 'flat'):
            backgroundColor = arguments[4] || state.background
            color = arguments[5] || state.color
            cursor = "pointer"
            return {
                changeHover: function () {
                    let background = self.state.hoverBackground;
                    let color = self.state.hoverColor;
                    self.renderStuff(background, color)
                },
                changeHoverBack: function () {
                    let revbackground = self.state.revBackground;
                    let revcolor = self.state.revColor;
                    self.renderStuff(revbackground, revcolor)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        height: state.height,
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),
            }
        case (type = 'raised'):
            backgroundColor = arguments[4] || state.backgroundColor
            boxxShadow = arguments[5] || state.boxShadow
            let transform = arguments[6] || state.transform
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = state.hovBackground
                    let boxShadow = state.hovBoxShadow
                    let transform = 'translateY(4px)'
                    self.renderStuff(backgroundCol, boxShadow, transform)
                },
                changeHoverBack: function () {
                    let backgroundCol = state.backgroundRev
                    let boxShadow = state.boxShadowRev
                    let transform = state.transformrev
                    self.renderStuff(backgroundCol, boxShadow, transform)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        margin: state.margin,
                    },

                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),

            }
        case (type = 'floating'):
            let boxxShadow = arguments[4] || state.floatBoxShadow
            cursor = "pointer"
            return {
                changeHover: function () {
                    let hovBoxShadow = '0 5px 7px 0 black, 0 10px 20px 0';
                    self.renderStuff(hovBoxShadow)
                },
                changeHoverBack: function () {
                    let revBoxShadow = state.floatBoxShadow;
                    self.renderStuff(revBoxShadow)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        margin: state.margin,
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),

            }
        case (type = 'block'):
            backgroundColor = arguments[4] || state.blockBackground
            color = arguments[5] || state.frev
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = state.hovBackground
                    let col = state.revColor
                    self.renderStuff(backgroundCol, col)
                },
                changeHoverBack: function () {
                    let backgroundCol = state.colorRev
                    let col = state.frev
                    self.renderStuff(backgroundCol, col)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        transformOrigin: state.transformOrigin,
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),

            }
        case (type = 'text'):
            backgroundColor = arguments[4] || state.backgroundColor
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = state.hovBackground
                    self.renderStuff(backgroundCol)
                },
                changeHoverBack: function () {
                    let backgroundCol = state.colorRev
                    self.renderStuff(backgroundCol)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        transformOrigin: state.transformOrigin,
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),

            }
        case (type = 'custom'):
            let background = arguments[4] || self.state.background
            let color = arguments[5] || self.state.color
            cursor = "pointer"
            return {
                changeHover: function () {
                    let background = self.state.hoverBackground;
                    let color = self.state.hoverColor;
                    self.renderStuff(background, color)
                },
                changeHoverBack: function () {
                    let revbackground = self.state.revBackground;
                    let revcolor = self.state.revColor;
                    self.setState({ color: revcolor, background: revbackground })
                    self.renderStuff(revbackground, revcolor)
                },
                BUTTONSTYLES: StyleSheet.create({
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
                        height: state.height,
                    },
                    '@media (max-width: 768px)': {
                        buttonStyles: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        buttonStyles: {
                            display: state.mddis,
                        }
                    }
                }),

            }
        default:
            return
    }
}