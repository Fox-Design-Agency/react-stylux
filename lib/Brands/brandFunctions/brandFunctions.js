import React from 'react';
import StyleSheet from 'nestingstyles';

export default function brandFunction(type, props, state, self) {
    let cursor = "";

    let display = props.display || 'flex'
    let direction = props.direction || 'row'
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                BRAND: StyleSheet.create({
                    brand: {
                        display: display,
                        flex: "1 0 auto",
                        flexDirection: direction,
                        //width: '15%',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                    },
                    brand_name: {
                        display: 'flex',
                        fontWeight: '900',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,

                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis,
                        },
                        brand_name: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis,
                        },
                        brand_name: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                BRAND: StyleSheet.create({
                    brand: {
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode:animationFillMode,
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            return {
                BRAND: StyleSheet.create({
                    brand: {
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '4'):
            cursor = "pointer"
            return {
                BRAND: StyleSheet.create({
                    brand: {
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis,
                        }
                    },
                })
            }
        case (type = '5'):
            cursor = "pointer"
            return {
                BRAND: StyleSheet.create({
                    brand: {
                        display: 'flex',
                        flex: "1 0 auto",
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis,
                        }
                    },
                })
            }
        default:
            return
    }
}