import React from "react";
import StyleSheet from 'nestingstyles';
export default function pullQuoteFunction(type, props, state, self) {
    let cursor, PULLQUOTESTYLES = "";

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
                            display: state.smdis,
                        },
                        cite: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: state.mddis,
                        },
                        cite: {
                            display: state.mddis,
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
                    cite:{
                        margin: "5px",
                        color: "lightslategray",
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: state.smdis,
                        },
                        text: {
                            display: state.smdis,
                        },
                        cite: {
                            display: state.smdis,
                        },
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: state.mddis,
                        },
                        text: {
                            display: state.mddis,
                        },
                        cite: {
                            display: state.mddis,
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
                            display: state.smdis,
                        },
                        cite: {
                            display: state.smdis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: state.mddis,
                        },
                        cite: {
                            display: state.mddis,
                        }
                    }
                }),
            }
        default:
            return
    }
}