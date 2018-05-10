import React from 'react';
import StyleSheet from 'nestingstyles';
export default function modalFunction(type, props, state, self) {
    let cursor, show = "";
    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            show = arguments[4]
            return {
                BOXSTYLES: {
                    width: state.boxWidth,
                    height: state.boxHeight,
                    background: state.boxBackground,
                    position: state.boxPosition,
                    top: state.boxTop,
                    left: state.boxLeft,
                    right: state.boxRight,
                    bottom: state.boxBottom,
                    display: show ? 'flex' : 'none',
                    alignItems: state.boxAlign,
                    justifyContent: state.boxJustify,
                    boxShadow: state.boxShadow,
                    zIndex: '2000',
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
                },
                BTNSTYLE: {
                    borderRadius: '100%',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: state.boxWidth,
                    bottom: state.boxHeight,
                    background: state.btnBackground,
                }

            }
        case (type = '2'):
            cursor = "pointer"
            show = arguments[4]
            return {

                MODAL: {
                    display: show ? 'flex' : 'none',
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                },
                MODALCONTENT: {
                    backgroundColor: '#fff',
                    margin: '15% auto',
                    padding: '20px',
                    border: '1px solid #888',
                    width: '80%',
                },
                CLOSEBTN: {
                    color: '#aaa',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                },
                OPENERBTN: {
                    cursor: 'pointer',

                }
            }
        case (type = '3'):
            cursor = "pointer"
            show = arguments[4]
            return {
                MODAL: {
                    display: show ? 'flex' : 'none',
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                },
                MODALCONTENT: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    margin: 'auto',
                    padding: '0',
                    border: '1px solid #888',
                    width: '80%',
                },
                MODALHEADER: {
                    padding: '2px 16px',
                    backgroundColor: '#eee',
                    color: 'white'
                },
                MODALBODY: {
                    padding: '2px 16px',
                },
                MODALFOOTER: {
                    padding: '2px 16px',
                    position: 'relative',
                    backgroundColor: '#eee',
                    color: 'white',
                    bottom: '0',
                },
                CLOSEBTN: {
                    color: '#000',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                },
                OPENERBTN: {
                    cursor: 'pointer',

                }

            }
        default:
            return;
    }
}