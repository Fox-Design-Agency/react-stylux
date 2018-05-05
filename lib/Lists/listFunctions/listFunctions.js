import React from 'react';
import StyleSheet from 'nestingstyles';
export default function listFunction(type, props, state, self) {
    let cursor, LISTSTYLE = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                LISTSTYLE :StyleSheet.create({
                    liststyle: {
                        color: state.color,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        paddingLeft: state.paddingLeft,
                        listStyleType: state.listStyleType,
                        listStyleImage: state.listStyleImage,
                        listStylePosition: state.listStylePosition,
                        width: state.width,
                    },
                    listitemstyle: {
                        paddingLeft: state.itemPadding,
                        backgroundImage: state.itemBGImage,
                        backgroundPosition: state.itemBGPosition,
                        backgroundSize: state.itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: state.smDis,
                        },
                        listitemstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: state.mdDis,
                        },
                        listitemstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                LISTSTYLE : StyleSheet.create({
                    liststyle: {
                        color: state.color,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        paddingLeft: state.paddingLeft,
                        position: 'relative',
                        width: state.width,


                    },
                    listitemstyle: {
                        paddingLeft: '70px',
                        counterIncrement: 'aCounter',

                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: state.smDis,
                        },
                        listitemstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: state.mdDis,
                        },
                        listitemstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            return {
                LISTSTYLE :StyleSheet.create({
                    liststyle: {
                        color: state.color,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        paddingLeft: state.paddingLeft,
                        listStyleType: state.bulletStyleType,
                        listStyleImage: state.listStyleImage,
                        listStylePosition: state.listStylePosition,
                        width: state.width,
                    },
                    listitemstyle: {
                        paddingLeft: state.itemPadding,
                        backgroundImage: state.itemBGImage,
                        backgroundPosition: state.itemBGPosition,
                        backgroundSize: state.itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: state.smDis,
                        },
                        listitemstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: state.mdDis,
                        },
                        listitemstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = '4'):
            cursor = "pointer"
            return {
                LISTSTYLE : StyleSheet.create({
                    liststyle: {
                        color: state.color,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        paddingLeft: state.paddingLeft,
                        listStyleType: state.squareStyleType,
                        listStyleImage: state.listStyleImage,
                        listStylePosition: state.listStylePosition,
                        width: state.width,
                    },
                    listitemstyle: {
                        paddingLeft: state.itemPadding,
                        backgroundImage: state.itemBGImage,
                        backgroundPosition: state.itemBGPosition,
                        backgroundSize: state.itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: state.smDis,
                        },
                        listitemstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: state.mdDis,
                        },
                        listitemstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = 'custom'):
            cursor = "pointer"
            return {
                LISTSTYLE : StyleSheet.create({
                    liststyle: {
                        color: state.color,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        lineHeight: state.lineHeight,
                        fontWeight: state.fontWeight,
                        paddingLeft: state.paddingLeft,
                        listStyleType: state.listStyleType,
                        listStyleImage: state.listStyleImage,
                        listStylePosition: state.listStylePosition,
                        width: state.width,
                    },
                    listitemstyle: {
                        paddingLeft: state.itemPadding,
                        backgroundImage: state.itemBGImage,
                        backgroundPosition: state.itemBGPosition,
                        backgroundSize: state.itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: state.smDis,
                        },
                        listitemstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: state.mdDis,
                        },
                        listitemstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        default:
            return
    }
}