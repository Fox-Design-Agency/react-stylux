import React from "react";
import StyleSheet from 'nestingstyles';

export default function buttonFunction(type, props, state, self) {
    let buttonStyles, cursor = "";
    switch (type) {
        case (type = 'flat'):
            cursor = "pointer"
            return {
                changeHover: function () {
                    let background = self.state.hoverBackground;
                    let color = self.state.hoverColor;
                    self.setState({ color: color, background: background })
                    self.renderStuff()
                },
                changeHoverBack: function () {
                    let revbackground = self.state.revBackground;
                    let revcolor = self.state.revColor;
                    self.setState({ color: revcolor, background: revbackground })
                    self.renderStuff()
                },
                BUTTONSTYLES: StyleSheet.create({
                    buttonStyles: {
                        borderRadius: state.borderRadius,
                        color: state.color,
                        fontSize: state.fontSize,
                        background: state.background,
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
            cursor = "pointer"
            return {
                changeHover: function () {
                    self.setState({ backgroundColor: state.backgroundRev, boxShadow: state.boxShadowRev, transform: state.transformrev })
                    self.renderStuff()
                },
                changeHoverBack: function () {
                    self.setState({ backgroundColor: state.hovBackground, boxShadow: state.hovBoxShadow, transform: 'translateY(4px)' })
                    self.renderStuff()
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
                        backgroundColor: state.backgroundColor,
                        borderRadius: '15px',
                        boxShadow: state.boxShadow,
                        transform: state.transform,
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
            let revBoxShadow = state.floatBoxShadow;
            let hovBoxShadow = '0 5px 7px 0 black, 0 10px 20px 0';
            cursor = "pointer"
            return {
                changeHover: function () {
                    self.setState({ floatBoxShadow: hovBoxShadow })
                    self.renderStuff()
                },
                changeHoverBack: function () {
                    self.setState({ floatBoxShadow: revBoxShadow })
                    self.renderStuff()
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
                        boxShadow: state.floatBoxShadow,
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

            cursor = "pointer"
            return {
                changeHover: function () {
                    self.setState({ backgroundColor: state.hovColor, color: state.colorRev })
                    self.renderStuff()
                },
                changeHoverBack: function () {
                    self.setState({ backgroundColor: state.colorRev, color: state.frev  })
                    self.renderStuff()
                },
                BUTTONSTYLES: StyleSheet.create({
                    buttonStyles: {
                        width: '100%',
                        display: 'block',
                        border: 'none',
                        backgroundColor: state.backgroundColor,
                        padding: '14px 28px',
                        fontSize: state.fontSize,
                        cursor: cursor,
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
        case (type = 'text'):
            cursor = "pointer"
            return {
                changeHover: function () {
                    self.setState({ backgroundColor: state.hoverColor})
                    self.renderStuff()
                },
                changeHoverBack: function () {
                    self.setState({ backgroundColor: state.colorRev })
                    self.renderStuff()
                },
                BUTTONSTYLES: StyleSheet.create({
                    buttonStyles: {
                        width: state.width,
                        display: 'block',
                        border: 'none',
                        backgroundColor: state.backgroundColor,
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

            cursor = "pointer"
            return {
                BUTTONSTYLES: StyleSheet.create({
                    buttonStyles: {
                        borderRadius: state.borderRadius,
                        color: state.color,
                        fontSize: state.fontSize,
                        background: state.background,
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