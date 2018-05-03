import React from 'react';
import StyleSheet from 'nestingstyles';

export default function cardFunction(type, props, state, self) {
    let cursor, CARDSTYLE, boxShadow = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            boxShadow = arguments[4] || state.boxShadow
            return {
                changeHover: function () {
                    let boxShadow = state.hovBoxShadow;
                    self.renderStuff(boxShadow)
                },
                changeHoverBack: function () {
                    let boxShadow = state.revBoxShadow;
                    self.renderStuff(boxShadow)
                },
                CARDSTYLE: StyleSheet.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        borderRadius: state.borderRadius,
                    },
                    imgstyle: {
                        height: '300px',
                        width: '250px',
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: state.smDis,
                        },
                        imgstyle: {
                            display: state.smDis,
                        },
                        cardheading: {
                            display: state.smDis,
                        },
                        cardbody: {
                            display: state.smDis,
                        },
                        cardcontent: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: state.mdDis,
                        },
                        imgstyle: {
                            display: state.mdDis,
                        },
                        cardheading: {
                            display: state.mdDis,
                        },
                        cardbody: {
                            display: state.mdDis,
                        },
                        cardcontent: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = '2'):
            cursor = "pointer"
            boxShadow = arguments[4] || state.boxShadow
            return {
                changeHover: function () {
                    let boxShadow = state.hovBoxShadow;
                    self.renderStuff(boxShadow)
                },
                changeHoverBack: function () {
                    let boxShadow = state.revBoxShadow;
                    self.renderStuff(boxShadow)
                },
                CARDSTYLE: StyleSheet.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        borderRadius: state.borderRadius,
                    },
                    imgstyle: {
                        height: '300px',
                        width: '250px',
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },
                    btnstyle: {
                        backgroundColor: 'black',
                        color: 'white',
                        height: '30px',
                        border: 'none',
                        cursor: 'pointer',
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: state.smDis,
                        },
                        imgstyle: {
                            display: state.smDis,
                        },
                        cardheading: {
                            display: state.smDis,
                        },
                        cardbody: {
                            display: state.smDis,
                        },
                        cardcontent: {
                            display: state.smDis,
                        },
                        btnstyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: state.mdDis,
                        },
                        imgstyle: {
                            display: state.mdDis,
                        },
                        cardheading: {
                            display: state.mdDis,
                        },
                        cardbody: {
                            display: state.mdDis,
                        },
                        cardcontent: {
                            display: state.mdDis,
                        },
                        btnstyle: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = '3'):
            cursor = "pointer"
            let height = state.height || '398px'
            let width = state.width || '250px'
            boxShadow = arguments[4] || state.boxShadow
            return {
                changeHover: function () {
                    let boxShadow = state.hovBoxShadow;
                    self.renderStuff(boxShadow)
                },
                changeHoverBack: function () {
                    let boxShadow = state.revBoxShadow;
                    self.renderStuff(boxShadow)
                },
                CARDSTYLE: StyleSheet.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        height: height,
                        width: width,
                        borderRadius: state.borderRadius,
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },
                    item: {
                        padding: '20px',
                        borderBottom: '1px solid #eee'
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: state.smDis,
                        },
                        imgstyle: {
                            display: state.smDis,
                        },
                        cardheading: {
                            display: state.smDis,
                        },
                        cardbody: {
                            display: state.smDis,
                        },
                        cardcontent: {
                            display: state.smDis,
                        },
                        item: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: state.mdDis,
                        },
                        imgstyle: {
                            display: state.mdDis,
                        },
                        cardheading: {
                            display: state.mdDis,
                        },
                        cardbody: {
                            display: state.mdDis,
                        },
                        cardcontent: {
                            display: state.mdDis,
                        },
                        item: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        case (type = 'custom'):
            cursor = "pointer"
            boxShadow = arguments[4] || state.boxShadow
            return {
                changeHover: function () {
                    let boxShadow = state.hovBoxShadow;
                    self.renderStuff(boxShadow)
                },
                changeHoverBack: function () {
                    let boxShadow = state.revBoxShadow;
                    self.renderStuff(boxShadow)
                },
                CARDSTYLE: StyleSheet.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        borderRadius: state.borderRadius,
                    },
                    imgstyle: {
                        height: '300px',
                        width: '250px',
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: state.smDis,
                        },
                        imgstyle: {
                            display: state.smDis,
                        },
                        cardheading: {
                            display: state.smDis,
                        },
                        cardbody: {
                            display: state.smDis,
                        },
                        cardcontent: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: state.mdDis,
                        },
                        imgstyle: {
                            display: state.mdDis,
                        },
                        cardheading: {
                            display: state.mdDis,
                        },
                        cardbody: {
                            display: state.mdDis,
                        },
                        cardcontent: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        default:
            return
    }
}