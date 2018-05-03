import React from 'react';
import StyleSheet from 'nestingstyles';
export default function heroFunction(type, props, state, self) {
    let cursor, HEROSTYLE ,BOTTOMBACKGROUND= "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    },
                    bottombackground: {
                        backgroundColor: state.bottomBoxBackgroundColor,
                        width: state.bottomBoxWidth,
                        height: state.bottomBoxHeight,
                        padding: state.bottomBoxPadding,
                        overflow: 'hidden',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        },
                        bottombackground: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        },
                        bottombackground: {
                            display: state.mddis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        }
                    },
                })
            }
        case (type = '4'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        }
                    },
                })
            }
        case (type = '5'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        }
                    },
                })
            }
        case (type = 'custom'):
            cursor = "pointer"
            return {
                HEROSTYLE: StyleSheet.create({
                    herostyle: {
                        background: state.background,
                        backgroundImage: state.backgroundImage,
                        backgroundRepeat: state.backgroundRepeat,
                        backgroundPosition: state.backgroundPosition,
                        backgroundSize: state.backgroundSize,
                        width: state.width,
                        height: state.height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    '@media screen and (max-width: 768px)': {
                        herostyle: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        herostyle: {
                            display: state.mddis,
                        }
                    },
                })
            }
        default:
            return
    }
}