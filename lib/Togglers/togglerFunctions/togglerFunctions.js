import React from 'react';
import StyleSheet from 'nestingstyles';
export default function togglerFunction(type, props, state, self) {
    let cursor, display, show, width, height = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            show = arguments[4]
            display = show ? 'inline' : 'none'
            width = state.width || '100px'
            height = state.height || '100%'
            let top = state.top || "0"
            return {
                TOGGLERBOX: {
                    display: display,
                    width: width,
                    height: height,
                    boxShadow: state.boxShadow,
                    position: state.position,
                    background: state.background,
                    borderLeft: state.bLeft,
                    borderRight: state.bRight,
                    borderTop: state.bTop,
                    borderBottom: state.bBottom,
                    border: state.border,
                    right: state.right,
                    left: state.left,
                    top: top,
                    zIndex: 2000,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                },
                CLICKBOX: {
                    cursor: cursor,
                    color: state.bColor,
                    background: state.bBackground,
                    fontSize: state.bFontSize,
                    fontVariant: state.bFontVariant,
                    fontWeight: state.bFontWeight,
                    textShadow: state.bTextShadow,
                    margin: state.bMargin,
                    padding: state.bPadding,
                    borderLeft: state.bBorderLeft,
                    borderRight: state.bBorderRight,
                    borderTop: state.bBorderTop,
                    borderBottom: state.bBorderBottom,
                    border: state.bBorder,
                }

            }
        case (type = '2'):
            cursor = "pointer"
            show = arguments[4]
            display = show ? 'inline' : 'none'
            width = state.width || '400px'
            let bMargin = props.bMargin || '-15px 0 0 0'
            return {
                FULLELEMENT: {
                    display: 'flex',
                    flexDirection: state.togglePlace,
                    margin: '20px 0 10px 0',
                },
                TOGGLERBOX: {
                    display: display,
                    flexDirection: 'column-reverse',
                    position: state.position,
                    width: width,
                    height: state.height,
                    background: state.background,
                    padding: state.padding,
                    margin: `0 0 0 ${state.offset}`,
                    borderLeft: state.bLeft,
                    borderRight: state.bRight,
                    borderTop: state.bTop,
                    borderBottom: state.bBottom,
                    border: state.border,
                    boxShadow: state.boxShadow,
                    overflow: 'hidden',
                    zIndex: 2000,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                },
                CLICKBOX: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    width: state.bWidth,
                    height: state.bHeight,
                    color: state.bColor,
                    background: state.bBackground,
                    fontSize: state.bFontSize,
                    fontVariant: state.bFontVariant,
                    fontWeight: state.bFontWeight,
                    textShadow: state.bTextShadow,
                    margin: bMargin,
                    padding: state.bPadding,
                    borderLeft: state.bBorderLeft,
                    borderRight: state.bBorderRight,
                    borderTop: state.bBorderTop,
                    borderBottom: state.bBorderBottom,
                    border: state.bBorder,
                }

            }
        case (type = '3'):
            cursor = "pointer"
            return {
                CHECKSSTYLE: {
                    display: "none",
                },
                PANELS: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: state.position,
                    width: state.width,
                    height: state.height,
                    background: state.background,
                    top: state.top,
                    overflow: 'hidden',
                },
                TEXTBOX: {
                    height: state.textheight,
                    width: state.textwidth,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: state.texthorizontal,
                    justifyContent: state.textvertical,
                    margin: state.boxMargin,
                    borderLeft: state.borderLeft,
                    borderRight: state.borderRight,
                    borderTop: state.borderTop,
                    borderBottom: state.borderBottom,
                    border: state.boxBorder,
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
                    position: state.position,
                    width: state.width,
                    height: state.height,
                    background: state.background,
                    top: state.top,
                    overflow: 'hidden',
                },
                TEXTBOX: {
                    height: state.textheight,
                    width: state.textwidth,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: state.texthorizontal,
                    justifyContent: state.textvertical,
                    margin: state.boxMargin,
                    borderLeft: state.borderLeft,
                    borderRight: state.borderRight,
                    borderTop: state.borderTop,
                    borderBottom: state.borderBottom,
                    border: state.boxBorder,
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