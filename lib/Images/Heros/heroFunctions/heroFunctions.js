import React from 'react';
import StyleSheet from 'nestingstyles';
export default function heroFunction(type, props, state, self) {
    let cursor = "";

    let background = props.background
    let backgroundImage = props.image
    let backgroundRepeat = props.imageRepeat || 'no-repeat'
    let backgroundPosition = props.backgroundPosition || 'center'
    let backgroundSize = props.imageSize || 'cover'
    let width = props.width || '100%'
    let height = props.height
    let bottomBoxWidth = props.bottomBoxWidth || '100%'
    let bottomBoxHeight = props.bottomBoxHeight || '25%'
    let bottomBoxPadding = props.bottomBoxPadding
    let bottomBoxBackgroundColor = props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)'
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    },
                    bottombackground: {
                        backgroundColor: bottomBoxBackgroundColor,
                        width: bottomBoxWidth,
                        height: bottomBoxHeight,
                        padding: bottomBoxPadding,
                        overflow: 'hidden',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis,
                        },
                        bottombackground: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis,
                        },
                        bottombackground: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '4'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '5'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: background,
                        backgroundImage: backgroundImage,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        width: width,
                        height: height,
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: mddis,
                        }
                    },
                })
            }
        default:
            return
    }
}