'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = containerSwitch0_5;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function containerSwitch0_5(num, props, state) {
    var blocks = void 0,
        holderstyles = void 0,
        block1styles = void 0,
        block2styles = void 0,
        block3styles = void 0,
        block4styles = void 0,
        block5styles = '';
    switch (num) {
        case num = 1:
            blocks = {
                block1Direction: props.block1direction || 'column',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: '100%',
                        height: state.height,
                        display: state.display,
                        flexDirection: state.direction,
                        flexWrap: 'wrap',
                        background: state.text,
                        justifyContent: state.alignBlocks,
                        overflow: 'hidden',
                        borderLeft: state.borderLeft,
                        borderRight: state.borderRight,
                        borderTop: state.borderTop,
                        borderBottom: state.borderBottom,
                        border: state.border
                    },
                    '@media (max-width: 440px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        holderstyles: {
                            display: state.mddis,
                            flexDirection: state.mdflexDir
                        }
                    }
                }),
                block1styles: _nestingstyles2.default.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || state.block1,
                        flexDirection: blocks.block1Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis
                        }
                    }
                })
            };
        case num = 2:
            blocks = {
                block1Direction: props.block1direction || 'column',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2Direction: props.block2direction || 'column',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: '100%',
                        height: state.height,
                        display: state.display,
                        flexDirection: state.direction,
                        flexWrap: 'wrap',
                        background: state.text,
                        justifyContent: state.alignBlocks,
                        overflow: 'hidden',
                        borderLeft: state.borderLeft,
                        borderRight: state.borderRight,
                        borderTop: state.borderTop,
                        borderBottom: state.borderBottom,
                        border: state.border
                    },
                    '@media (max-width: 440px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        holderstyles: {
                            display: state.mddis,
                            flexDirection: state.mdflexDir
                        }
                    }
                }),
                block1styles: _nestingstyles2.default.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || state.block1,
                        flexDirection: blocks.block1Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis
                        }
                    }
                }),
                block2styles: _nestingstyles2.default.create({
                    block2styles: {
                        display: 'flex',
                        flex: blocks.block2,
                        flexDirection: blocks.block2Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock2,
                        borderLeft: blocks.block2BorderLeft,
                        borderRight: blocks.block2BorderRight,
                        borderTop: blocks.block2BorderTop,
                        borderBottom: blocks.block2BorderBottom,
                        border: blocks.b2Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock2
                    },
                    '@media screen and (max-width: 440px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block2styles: {
                            display: blocks.block2mddis
                        }
                    }
                }) };

        case num = 3:
            blocks = {
                block1Direction: props.block1direction || 'column',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2Direction: props.block2direction || 'column',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
                block3Direction: props.block3direction || 'column',
                block3: props.block3 || '1',
                block3BorderLeft: props.b3BLeft,
                block3BorderRight: props.b3BRight,
                block3BorderTop: props.b3BTop,
                block3BorderBottom: props.b3BBottom,
                block3Border: props.b3Border,
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block3smdis: props.block3smdis || 'flex',
                block3mddis: props.block3mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: '100%',
                        height: state.height,
                        display: state.display,
                        flexDirection: state.direction,
                        flexWrap: 'wrap',
                        background: state.text,
                        justifyContent: state.alignBlocks,
                        overflow: 'hidden',
                        borderLeft: state.borderLeft,
                        borderRight: state.borderRight,
                        borderTop: state.borderTop,
                        borderBottom: state.borderBottom,
                        border: state.border
                    },
                    '@media (max-width: 440px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        holderstyles: {
                            display: state.mddis,
                            flexDirection: state.mdflexDir
                        }
                    }
                }),
                block1styles: _nestingstyles2.default.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis
                        }
                    }
                }),
                block2styles: _nestingstyles2.default.create({
                    block2styles: {
                        display: 'flex',
                        flex: blocks.block2,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock2,
                        borderLeft: blocks.block2BorderLeft,
                        borderRight: blocks.block2BorderRight,
                        borderTop: blocks.block2BorderTop,
                        borderBottom: blocks.block2BorderBottom,
                        border: blocks.b2Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock2
                    },
                    '@media screen and (max-width: 440px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block2styles: {
                            display: blocks.block2mddis
                        }
                    }
                }),
                block3styles: _nestingstyles2.default.create({
                    block3styles: {
                        display: 'flex',
                        flex: blocks.block3,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock3,
                        borderLeft: blocks.block3BorderLeft,
                        borderRight: blocks.block3BorderRight,
                        borderTop: blocks.block3BorderTop,
                        borderBottom: blocks.block3BorderBottom,
                        border: blocks.b3Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock3
                    },
                    '@media screen and (max-width: 440px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block3styles: {
                            display: blocks.block3mddis
                        }
                    }
                })
            };
        case num = 4:
            blocks = {
                block1Direction: props.block1direction || 'column',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2Direction: props.block2direction || 'column',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
                block3Direction: props.block3direction || 'column',
                block3: props.block3 || '1',
                block3BorderLeft: props.b3BLeft,
                block3BorderRight: props.b3BRight,
                block3BorderTop: props.b3BTop,
                block3BorderBottom: props.b3BBottom,
                block3Border: props.b3Border,
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block3smdis: props.block3smdis || 'flex',
                block3mddis: props.block3mddis || 'flex',
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: '100%',
                        height: state.height,
                        display: state.display,
                        flexDirection: state.direction,
                        flexWrap: 'wrap',
                        background: state.text,
                        justifyContent: state.alignBlocks,
                        overflow: 'hidden',
                        borderLeft: state.borderLeft,
                        borderRight: state.borderRight,
                        borderTop: state.borderTop,
                        borderBottom: state.borderBottom,
                        border: state.border
                    },
                    '@media (max-width: 440px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        holderstyles: {
                            display: state.mddis,
                            flexDirection: state.mdflexDir
                        }
                    }
                }),
                block1styles: _nestingstyles2.default.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis
                        }
                    }
                }),
                block2styles: _nestingstyles2.default.create({
                    block2styles: {
                        display: 'flex',
                        flex: blocks.block2,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock2,
                        borderLeft: blocks.block2BorderLeft,
                        borderRight: blocks.block2BorderRight,
                        borderTop: blocks.block2BorderTop,
                        borderBottom: blocks.block2BorderBottom,
                        border: blocks.b2Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock2
                    },
                    '@media screen and (max-width: 440px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block2styles: {
                            display: blocks.block2mddis
                        }
                    }
                }),
                block3styles: _nestingstyles2.default.create({
                    block3styles: {
                        display: 'flex',
                        flex: blocks.block3,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock3,
                        borderLeft: blocks.block3BorderLeft,
                        borderRight: blocks.block3BorderRight,
                        borderTop: blocks.block3BorderTop,
                        borderBottom: blocks.block3BorderBottom,
                        border: blocks.b3Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock3
                    },
                    '@media screen and (max-width: 440px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block3styles: {
                            display: blocks.block3mddis
                        }
                    }
                }),
                block4styles: _nestingstyles2.default.create({
                    block4styles: {
                        display: 'flex',
                        flex: blocks.block4,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock4,
                        borderLeft: blocks.block4BorderLeft,
                        borderRight: blocks.block4BorderRight,
                        borderTop: blocks.block4BorderTop,
                        borderBottom: blocks.block4BorderBottom,
                        border: blocks.b4Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock4
                    },
                    '@media screen and (max-width: 440px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block4styles: {
                            display: blocks.block4mddis
                        }
                    }
                })
            };
        case num = 5:
            blocks = {
                block1Direction: props.block1direction || 'column',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2Direction: props.block2direction || 'column',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
                block3Direction: props.block3direction || 'column',
                block3: props.block3 || '1',
                block3BorderLeft: props.b3BLeft,
                block3BorderRight: props.b3BRight,
                block3BorderTop: props.b3BTop,
                block3BorderBottom: props.b3BBottom,
                block3Border: props.b3Border,
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block3smdis: props.block3smdis || 'flex',
                block3mddis: props.block3mddis || 'flex',
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: '100%',
                        height: state.height,
                        display: state.display,
                        flexDirection: state.direction,
                        flexWrap: 'wrap',
                        background: state.text,
                        justifyContent: state.alignBlocks,
                        overflow: 'hidden',
                        borderLeft: state.borderLeft,
                        borderRight: state.borderRight,
                        borderTop: state.borderTop,
                        borderBottom: state.borderBottom,
                        border: state.border
                    },
                    '@media (max-width: 440px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        holderstyles: {
                            display: state.mddis,
                            flexDirection: state.mdflexDir
                        }
                    }
                }),
                block1styles: _nestingstyles2.default.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis
                        }
                    }
                }),
                block2styles: _nestingstyles2.default.create({
                    block2styles: {
                        display: 'flex',
                        flex: blocks.block2,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock2,
                        borderLeft: blocks.block2BorderLeft,
                        borderRight: blocks.block2BorderRight,
                        borderTop: blocks.block2BorderTop,
                        borderBottom: blocks.block2BorderBottom,
                        border: blocks.b2Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock2
                    },
                    '@media screen and (max-width: 440px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block2styles: {
                            display: blocks.block2mddis
                        }
                    }
                }),
                block3styles: _nestingstyles2.default.create({
                    block3styles: {
                        display: 'flex',
                        flex: blocks.block3,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock3,
                        borderLeft: blocks.block3BorderLeft,
                        borderRight: blocks.block3BorderRight,
                        borderTop: blocks.block3BorderTop,
                        borderBottom: blocks.block3BorderBottom,
                        border: blocks.b3Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock3
                    },
                    '@media screen and (max-width: 440px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block3styles: {
                            display: blocks.block3mddis
                        }
                    }
                }),
                block4styles: _nestingstyles2.default.create({
                    block4styles: {
                        display: 'flex',
                        flex: blocks.block4,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock4,
                        borderLeft: blocks.block4BorderLeft,
                        borderRight: blocks.block4BorderRight,
                        borderTop: blocks.block4BorderTop,
                        borderBottom: blocks.block4BorderBottom,
                        border: blocks.b4Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock4
                    },
                    '@media screen and (max-width: 440px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block4styles: {
                            display: blocks.block4mddis
                        }
                    }
                }),
                block5styles: _nestingstyles2.default.create({
                    block5styles: {
                        display: 'flex',
                        flex: blocks.block5,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock5,
                        borderLeft: blocks.block5BorderLeft,
                        borderRight: blocks.block5BorderRight,
                        borderTop: blocks.block5BorderTop,
                        borderBottom: blocks.block5BorderBottom,
                        border: blocks.b5Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock5
                    },
                    '@media screen and (max-width: 440px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block5styles: {
                            display: blocks.block4mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}