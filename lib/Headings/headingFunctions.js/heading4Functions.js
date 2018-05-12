import React from 'react';
import StyleSheet from 'nestingstyles';
export default function heading4Function(type, props, state, self) {
    let color = props.color
    let colorRev = props.color
    let textShadow = props.shadow
    let fontFamily = props.font
    let fontSize = props.size || '3.489em'
    let smFontSize = props.smSize || '2.5em'
    let mdFontSize = props.mdSize || '3em'
    let fontWeight = props.weight || '600'
    let fontVariant = props.variant
    let display = props.display || 'flex'
    let align = props.align || 'center'
    let textAlign = props.textAlign || 'center'
    let padding = props.padding || '0 0 5px 0'
    let margin = props.margin || '1px'
    let width = props.width
    let height = props.height
    let maxWidth = props.maxW
    let maxHeight = props.maxH
    let bLeft = props.bLeft
    let bRight = props.bRight
    let bTop = props.bTop
    let bBottom = props.bBottom
    let border = props.border
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
    let cursor = props.cursor

    switch (type) {
        case (type = '1'):
        cursor = props.cursor
            return {
                HEADING: StyleSheet.create({
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
                        flex: "1 0 auto",
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor,
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
                    },
                })

            }
        case (type = '2'):
       
        fontSize = props.size || '3.489em'
     smFontSize = props.smSize || '2.5em'
        mdFontSize = props.mdSize || '3em'
        fontWeight = props.weight || '600'
       
            return {

                HEADING: StyleSheet.create({
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
                        flex: "1 0 auto",
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor,
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
                    },
                })

            }
        case (type = '3'):
        
        fontSize = props.size || '3.489em'
        smFontSize = props.smSize || '2.5em'
        mdFontSize = props.mdSize || '3em'
        fontWeight = props.weight || '600'
        
            return {
                HEADING: StyleSheet.create({
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
                        flex: "1 0 auto",
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor,
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
                    },
                })

            }
        case (type = '4'):
       
        fontSize = props.size || '3.489em'
        smFontSize = props.smSize || '2.5em'
        mdFontSize = props.mdSize || '3em'
        fontWeight = props.weight || '600'
        
            return {
                HEADING: StyleSheet.create({
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
                        flex: "1 0 auto",
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor,
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
                    },
                })

            }
        // case (type = '5'):
        //     cursor = "pointer"
        //     return {


        //     }
        default:
            return;
    }
}