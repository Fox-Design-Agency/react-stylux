import React from 'react';
import StyleSheet from 'nestingstyles';
export default function navbarFunction(type, props, state, self) {
    let cursor, smdis, show, display = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            smdis = state.smdis || arguments[4]
            show = arguments[5]
            return {
                NAVBAR: StyleSheet.create({
                    navbar: {
                        width: state.totalWidth,
                        height: state.totalHeight,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: state.alignItems,
                        margin: '0',
                        padding: state.padding,
                        background: state.mainBackground,
                        color: state.color,

                    },
                    '@media screen and (max-width: 768px)': {
                        navbar: {
                            display: 'flex',
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        navbar: {
                            display: 'flex',
                        }
                    },
                }),
                NAVBAR_NAVBAR: StyleSheet.create({
                    navbar_navbar: {
                        width: state.navBarWidth,
                        height: 'inherit',
                        display: state.display,
                        flexWrap: 'wrap',
                        alignItems: state.columnAlign,
                        fontFamily: state.fontFamily,
                        flexDirection: state.direction,
                        top: state.top,
                        right: state.right,
                        left: state.left,
                        bottom: state.bottom,
                        position: state.position,
                        zIndex: 200,
                    },
                    '@media screen and (max-width: 768px)': {
                        navbar_navbar: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        navbar_navbar: {
                            display: state.mddis,
                        }
                    },
                }),
                HAMNAV: StyleSheet.create({
                    HAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: state.hamMenuDis,
                        cursor: 'pointer',
                        flexDirection: 'column'

                    },
                    '@media screen and (max-width: 768px)': {
                        HAMNAV: {
                            width: '50px',
                            height: '50px',
                            display: state.hamSmDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        HAMNAV: {
                            width: '50px',
                            height: '50px',
                            display: state.hamMdDis
                        }
                    },
                }),
                HAMLINES: {
                    display: 'flex',
                    width: '25px',
                    height: '5px',
                    backgroundColor: 'black',
                    margin: '3px 0',
                },
                HAMESTNAV: StyleSheet.create({
                    hamestnav: {
                        visibility: 'hidden',
                        width: '100%',
                        flexDirection: 'column',
                        position: state.hamPosition,
                        top: state.hamTop,
                        left: state.hamLeft,
                        background: state.hamBackground,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: state.hamShadow,
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                    },
                    '@media screen and (max-width: 768px)': {
                        hamestnav: {
                            visibility: show ? 'visible' : 'hidden',
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        hamestnav: {
                            visibility: show ? 'visible' : 'hidden',
                        }
                    },
                })

            }
        // case (type = '2'):
        //     cursor = "pointer"
        //     return {
               
        //     }
        // case (type = '3'):
        //     cursor = "pointer"
        //     return {


        //     }
        // case (type = '4'):
        //     cursor = "pointer"
        //     return {


        //     }
        // case (type = '5'):
        //     cursor = "pointer"
        //     return {


        //     }
        default:
            return;
    }
}