import React from "react";
import StyleSheet from 'nestingstyles';

export default function paragraphFunction(type, props, state, self) {
    let paragraphStyles, cursor, size = "";
    switch (type) {
        case (type = "1"):
            size = state.fontSize|| '1.333em' 
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        flex: 1,
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        case (type = '2'):
            size = state.fontSize|| '0.95em' 
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        case (type = "3"):
            size = state.fontSize || '1.6em' 
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        case (type = '4'):
            size = state.fontSize || '1.6em'
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        case (type = '5'):
            size = '1.333em' || state.fontSize
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        case (type = 'custom'):
            size = '1.0em' || state.fontSize
            cursor = "pointer"
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        width: state.width,
                        height: state.height,
                        maxWidth: state.maxWidth,
                        maxHeight: state.maxHeight,
                        color: state.color,
                        textShadow: state.textShadow,
                        borderLeft: state.bLeft,
                        borderRight: state.bRight,
                        borderTop: state.bTop,
                        borderBottom: state.bBottom,
                        border: state.border,
                        fontFamily: state.fontFamily,
                        fontSize: size,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        fontVariant: state.fontVariant,
                        display: state.display,
                        alignItems: state.align,
                        justifyContent: state.align,
                        textAlign: state.textAlign,
                        padding: state.padding,
                        margin: state.margin,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        flex: 1,
                        flexWrap: "wrap",
                        wordWrap: state.wordWrap,
                    },
                    hoverStyle: {
                        color: state.hoverColor
                    },
                    '@media screen and (max-width: 768px)': {
                        paragraph: {
                            display: state.smDis,
                            color: state.color,
                            fontSize: state.smFontSize
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        paragraph: {
                            display: state.mdDis,
                            color: state.color,
                            fontSize: state.mdFontSize
                        }
                    },
                })
            }
        default:
            return
    }
}