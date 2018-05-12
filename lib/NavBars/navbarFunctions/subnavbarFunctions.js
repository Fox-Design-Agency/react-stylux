import React from 'react';
import StyleSheet from 'nestingstyles';
export default function subnavbarFunction(type, props, state, self) {
    let cursor = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                SUBNAVBAR: StyleSheet.create({
                    subnavbar: {
                        width: state.totalWidth,
                        height: state.totalHeight,
                        display: state.display,
                        flex: "1 0 auto",
                        flexDirection: 'column',
                        alignItems: state.alignItems,
                        margin: '0',
                        padding: state.padding,
                        background: state.mainBackground,
                        color: state.color,
                        top: state.top,
                        bottom: state.bottom,
                        left: state.left,
                        right: state.right,
                        position: state.position,
                        zIndex: state.zIndex,
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar: {
                            display: state.mddis,
                            alignItems: 'center',
                        }
                    },
                }),
                SUBNAVBAR_NAVBAR: StyleSheet.create({
                    subnavbar_navbar: {
                        width: state.navBarWidth,
                        height: 'inherit',
                        display: 'flex',
                        flex: "1 0 auto",
                        flexWrap: 'wrap',
                        alignItems: state.columnAlign,
                        fontFamily: state.fontFamily,
                        flexDirection: state.direction,
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar: {
                            display: state.mddis,
                            width: '90%'
                        }
                    },
                })

            }
        case (type = '2'):
            cursor = "pointer"
            return {
                SUBNAVBAR: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    color: state.color,
                    display: state.display,
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    posistion: 'sticky',
                    top: 0,
                },
                SUBNAVBAR_NAVBAR1: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: "1 0 auto",
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                },
                SUBNAVBAR_NAVBAR2: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: "1 0 auto",
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                }

            }
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