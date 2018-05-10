import React from 'react';
import StyleSheet from 'nestingstyles';
export default function listFunction(type, props, state, self) {
    let cursor = "";
    let color = props.color || 'black'
    let fontFamily = props.font || 'serif'
    let fontSize = props.size || '1.333em'
    let lineHeight = props.lineHeight || '1.5em'
    let fontWeight = props.weight || '400'
    let paddingLeft = props.paddingLeft
    let listStyleType = props.listStyleType || 'decimal'
    let bulletStyleType = props.listStyleType || 'disc'
    let squareStyleType = props.listStyleType || 'square'
    let listStyleImage = props.listStyleImage || 'none'
    let listStylePosition = props.listStylePosition || 'inside'
    let smdis = props.smDis
    let mddis = props.mdDis
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let width = props.width || "100%"
    let itemPadding = props.itemPadding
    let itemBGImage = props.itemBGImage
    let itemBGPosition = props.itemBGPosition
    let itemBGSize = props.itemBGSize

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                LISTSTYLE: StyleSheet.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight:lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: listStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width,
                    },
                    listitemstyle: {
                        paddingLeft: itemPadding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis,
                        },
                        listitemstyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis,
                        },
                        listitemstyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                LISTSTYLE: StyleSheet.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        position: 'relative',
                        width: width,


                    },
                    listitemstyle: {
                        paddingLeft: '70px',
                        counterIncrement: 'aCounter',

                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis,
                        },
                        listitemstyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis,
                        },
                        listitemstyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            return {
                LISTSTYLE: StyleSheet.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: bulletStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width,
                    },
                    listitemstyle: {
                        paddingLeft: itemPadding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat',
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis,
                        },
                        listitemstyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis,
                        },
                        listitemstyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '4'):
            cursor = "pointer"
            listStyleType = "none"
            let border = props.border || "1px solid black"
            let padding = props.itemPadding || "15px"
            let margin = props.itemMargin || "5px 0 0 0"
            width= props.width;
            let itemWidth = props.itemWidth || "250px"
            return {
                LISTSTYLE: StyleSheet.create({
                    liststyle: {
                        color: color,
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight,
                        paddingLeft: paddingLeft,
                        listStyleType: listStyleType,
                        listStyleImage: listStyleImage,
                        listStylePosition: listStylePosition,
                        width: width,
                    },
                    listitemstyle: {
                        margin: margin,
                        border: border,
                        padding: padding,
                        backgroundImage: itemBGImage,
                        backgroundPosition: itemBGPosition,
                        backgroundSize: itemBGSize,
                        backgroundRepeat: 'no-repeat',
                        width: itemWidth
                    },
                    '@media screen and (max-width: 768px)': {
                        liststyle: {
                            display: smdis,
                        },
                        listitemstyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        liststyle: {
                            display: mddis,
                        },
                        listitemstyle: {
                            display: mddis,
                        }
                    },
                })
            }
        default:
            return
    }
}