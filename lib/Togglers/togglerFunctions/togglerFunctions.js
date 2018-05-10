import React from 'react';
import StyleSheet from 'nestingstyles';
export default function togglerFunction(type, props, state, self) {
    let cursor, display, show = "";

    let position = props.position || 'fixed'
    let width = props.width
    let height = props.height
    let top = props.top
    let background = props.background || 'white'
    let bColor = props.bColor || 'black'
    let bBackground = props.bBackground
    let bFontSize = props.bFontSize || '1.333em'
    let bFontVariant = props.bFontVariant
    let bFontWeight = props.bFontWeight
    let bTextShadow = props.bTextShadow
    let bMargin = props.bMargin
    let bPadding = props.bPadding
    let bBorderLeft = props.bBorderLeft
    let bBorderRight = props.bBorderRight
    let bBorderTop = props.bBorderTop
    let bBorderBottom = props.bBorderBottom
    let bBorder = props.bBorder
    let border = props.border
    let bLeft = props.bLeft
    let bRight = props.bRight
    let bTop = props.bTop
    let bBottom = props.bBottom
    let left = props.left
    let right = props.right
    let boxShadow = props.shadow || '1px 2px 2px black'
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'
    let textvertical = props.textVertical || 'center'
    let texthorizontal = props.textHorizontal || 'center'
    let textheight = props.textHeight || '200px'
    let textwidth = props.textWidth || '300px'
    let boxBorderLeft = props.boxBorderLeft
    let boxBorderRight = props.boxBorderRight
    let boxBorderTop = props.boxBorderTop
    let boxBorderBottom = props.boxBorderBottom
    let boxBorder = props.boxBorder || '1px solid black'
    let boxMargin = props.boxMargin || '5px'
    let padding = props.padding
    let bWidth = props.bwidth
    let bHeight = props.bHeight
    let borderLeft = props.boxBorderLeft
    let borderRight = props.boxBorderRight
    let borderTop = props.boxBorderTop
    let borderBottom = props.boxBorderBottom 
    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            show = arguments[4]
            display = show ? 'inline' : 'none'
            height = height || '100%'
            top = top || "0"
            return {
                TOGGLERBOX: {
                    display: display,
                    width: width,
                    height: height,
                    boxShadow: boxShadow,
                    position: position,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    right: right,
                    left: left,
                    top: top,
                    zIndex: 2000,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                CLICKBOX: {
                    cursor: cursor,
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder,
                }

            }
        case (type = '2'):
            cursor = "pointer"
            show = arguments[4]
            display = show ? 'flex' : 'none'
            width = width || '400px'
            let bMargin = props.bMargin || '-15px 0 0 0'
            let togglePlace = props.togglePlace || 'column'
            let offset = props.offset + '%'
            position= props.position || 'absolute'
            width = props.width || '400px'
            return {
                FULLELEMENT: {
                    display: 'flex',
                    flexDirection: togglePlace,
                    margin: '20px 0 10px 0',
                },
                TOGGLERBOX: {
                    display: display,
                    flexDirection: 'column-reverse',
                    alignItems: "center",

                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    padding: padding,
                    margin: `0 0 0 ${offset}`,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    boxShadow: boxShadow,
                    overflow: 'hidden',
                    zIndex: 2000,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                CLICKBOX: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    width: bWidth,
                    height: bHeight,
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder,
                }

            }
        case (type = '3'):
            cursor = "pointer"
            width=  props.width || '400px'
            position= props.position
            return {
                CHECKSSTYLE: {
                    display: "none",
                },
                PANELS: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    top: top,
                    overflow: 'hidden',
                },
                TEXTBOX: {
                    height: textheight,
                    width: textwidth,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: texthorizontal,
                    justifyContent: textvertical,
                    margin: boxMargin,
                    borderLeft: borderLeft,
                    borderRight: borderRight,
                    borderTop: borderTop,
                    borderBottom: borderBottom,
                    border: boxBorder,
                },
                LABELSSTYLES: {
                    cursor: 'pointer',
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black',
                    margin: '3px',
                    padding: '5px',

                    trasition: '0.3s',
                }

            }
        case (type = '4'):
            cursor = "pointer"
            position= props.position
            return {
                CHECKSSTYLE: {
                    display: "none",
                },
                PANELS: {
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    top: top,
                    overflow: 'hidden',
                },
                TEXTBOX: {
                    height: textheight,
                    width: textwidth,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: texthorizontal,
                    justifyContent: textvertical,
                    margin: boxMargin,
                    borderLeft: borderLeft,
                    borderRight: borderRight,
                    borderTop: borderTop,
                    borderBottom: borderBottom,
                    border: boxBorder,
                },
                LABELSSTYLES: {
                    cursor: 'pointer',
                    borderTop: '1px solid black',
                    borderLeft: '1px solid black',
                    margin: '3px',
                    padding: '5px',
                    width: '150px',
                    trasition: '0.3s',
                },
                LABELTITLES: {
                    display: 'flex',
                    flexDirection: 'column',


                }

            }
        default:
            return;
    }
}