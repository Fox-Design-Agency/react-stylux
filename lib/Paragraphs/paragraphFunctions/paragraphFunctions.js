import React from "react";
import StyleSheet from 'nestingstyles';

export default function paragraphFunction(type, props, state, self) {
    let size = "";

    let color = props.color || "black"
    let colorRev = props.color
    let textShadow = props.shadow
    let fontFamily = props.font
    let fontSize = props.size
    let smFontSize = props.smSize || '1.3em'
    let mdFontSize = props.mdSize || '1.3em'
    let lineHeight = props.lineHeight || '1.5em'
    let fontWeight = props.weight || '400'
    let fontVariant = props.variant
    let display = props.display || 'flex'
    let align = props.align || 'center'
    let textAlign = props.textAlign || 'center'
    let padding = props.padding || '5px'
    let margin = props.margin || '1px'
    let width = props.width
    let height = props.height
    let maxWidth = props.maxW
    let maxHeight = props.maxH
    let border = props.border
    let bLeft = props.bLeft
    let bRight = props.bRight
    let bTop = props.bTop
    let bBottom = props.bBottom
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transform = props.transform
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'
    let hoverColor = props.hovColor
    let wordWrap = props.wordWrap || "break-word"

    switch (type) {
        case (type = "1"):
            size = fontSize || '1.333em'
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
                    paragraph: {
                        flex: 1,
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color:  color,
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
                        wordWrap: wordWrap,
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
                    },
                })
            }
        case (type = '2'):
            size = state.fontSize || '0.95em'
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
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
                        wordWrap: wordWrap,
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
                    },
                })
            }
        case (type = "3"):
            size = fontSize || '1.6em'
            smFontSize = props.smSize || '1.5em'
            mdFontSize = props.mdSize || '1.6em'
            lineHeight = props.lineHeight || '1.8em'
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
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
                        wordWrap: wordWrap,
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
                    },
                })
            }
        case (type = '4'):
            size = props.size || '1.6em'
            smFontSize = props.smSize || '1.5em'
            mdFontSize = props.mdSize || '1.6em'
            lineHeight = props.lineHeight || '1.8em'
            color = props.color || 'lightgray'
            colorRev = props.color || 'lightgray'
            hoverColor = props.hovColor || 'lightgray'
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
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
                        wordWrap: wordWrap,
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
                    },
                })
            }
        case (type = '5'):
            size = '1.333em' || fontSize
            return {
                PARAGRAPHSTYLES: StyleSheet.create({
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
                        wordWrap: wordWrap,
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
                    },
                })
            }
        default:
            return
    }
}