import React from "react";
import StyleSheet from 'nestingstyles';
export default function pullQuoteFunction(type, props, state, self) {
    let cursor = ""
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transform = props.transform
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'
    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                PULLQUOTESTYLES: StyleSheet.create({
                    pullquotestyles: {
                        padding: "0px 12%",
                        margin: "20px 0 40px 0",
                        position: "relative",
                    },
                    cite: {
                        fontSize: "1.333em",
                        paddingLeft: "50px",
                        color: "lightslategray",
                        display: "block",
                        position: "absolute",
                        bottom: "-30px",
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis,
                        },
                        cite: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis,
                        },
                        cite: {
                            display: mddis,
                        }
                    }
                }),
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                PULLQUOTESTYLES: StyleSheet.create({
                    pullquotestyles: {
                        width: "250px",
                        padding: "5px",
                        fontSize: "1.333em",
                        borderTop: "2px solid lightgray",
                        borderBottom: "2px solid lightgray",
                        margin: "0 auto",
                    },
                    text: {
                        fontSize: "1.333em",
                        margin: "5px",
                    },
                    cite: {
                        margin: "5px",
                        color: "lightslategray",
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis,
                        },
                        text: {
                            display: smdis,
                        },
                        cite: {
                            display: smdis,
                        },
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis,
                        },
                        text: {
                            display: mddis,
                        },
                        cite: {
                            display: mddis,
                        },
                    }
                }),
            }
        case (type = 'custom'):
            cursor = "pointer"
            return {
                PULLQUOTESTYLES: StyleSheet.create({
                    pullquotestyles: {
                        padding: "0px 12%",
                        margin: "20px 0 40px 0",
                        position: "relative",
                    },
                    cite: {
                        fontSize: "1.333em",
                        paddingLeft: "50px",
                        color: "lightslategray",
                        display: "block",
                        position: "absolute",
                        bottom: "-30px",
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis,
                        },
                        cite: {
                            display: smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis,
                        },
                        cite: {
                            display: mddis,
                        }
                    }
                }),
            }
        default:
            return
    }
}