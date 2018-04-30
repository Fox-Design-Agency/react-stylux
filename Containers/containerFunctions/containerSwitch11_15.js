'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = containerSwitch11_15;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function containerSwitch11_15(num, props, state) {
    var blocks = '';
    switch (num) {
        case num = 11:
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
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: state.width,
                        maxWidth: state.width,
                        height: state.height,
                        maxHeight: state.maxHeight,
                        padding: state.padding,
                        margin: state.margin,
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
                    '@media (max-width: 768px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block5styles: {
                            display: blocks.block5mddis
                        }
                    }
                }),
                block6styles: _nestingstyles2.default.create({
                    block6styles: {
                        display: 'flex',
                        flex: blocks.block6,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock6,
                        borderLeft: blocks.block6BorderLeft,
                        borderRight: blocks.block6BorderRight,
                        borderTop: blocks.block6BorderTop,
                        borderBottom: blocks.block6BorderBottom,
                        border: blocks.b6Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock6
                    },
                    '@media screen and (max-width: 768px)': {
                        block6styles: {
                            display: blocks.block6smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block6styles: {
                            display: blocks.block6mddis
                        }
                    }
                }),
                block7styles: _nestingstyles2.default.create({
                    block7styles: {
                        display: 'flex',
                        flex: blocks.block7,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock7,
                        borderLeft: blocks.block7BorderLeft,
                        borderRight: blocks.block7BorderRight,
                        borderTop: blocks.block7BorderTop,
                        borderBottom: blocks.block7BorderBottom,
                        border: blocks.b7Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock7
                    },
                    '@media screen and (max-width: 768px)': {
                        block7styles: {
                            display: blocks.block7smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block7styles: {
                            display: blocks.block7mddis
                        }
                    }
                }),
                block8styles: _nestingstyles2.default.create({
                    block8styles: {
                        display: 'flex',
                        flex: blocks.block8,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock8,
                        borderLeft: blocks.block8BorderLeft,
                        borderRight: blocks.block8BorderRight,
                        borderTop: blocks.block8BorderTop,
                        borderBottom: blocks.block8BorderBottom,
                        border: blocks.b8Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock8
                    },
                    '@media screen and (max-width: 768px)': {
                        block8styles: {
                            display: blocks.block8smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block8styles: {
                            display: blocks.block8mddis
                        }
                    }
                }),
                block9styles: _nestingstyles2.default.create({
                    block9styles: {
                        display: 'flex',
                        flex: blocks.block9,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock9,
                        borderLeft: blocks.block9BorderLeft,
                        borderRight: blocks.block9BorderRight,
                        borderTop: blocks.block9BorderTop,
                        borderBottom: blocks.block9BorderBottom,
                        border: blocks.b9Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock9
                    },
                    '@media screen and (max-width: 768px)': {
                        block9styles: {
                            display: blocks.block9smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block9styles: {
                            display: blocks.block9mddis
                        }
                    }
                }),
                block10styles: _nestingstyles2.default.create({
                    block10styles: {
                        display: 'flex',
                        flex: blocks.block10,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock10,
                        borderLeft: blocks.block10BorderLeft,
                        borderRight: blocks.block10BorderRight,
                        borderTop: blocks.block10BorderTop,
                        borderBottom: blocks.block10BorderBottom,
                        border: blocks.b10Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock10
                    },
                    '@media screen and (max-width: 768px)': {
                        block10styles: {
                            display: blocks.block10smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block10styles: {
                            display: blocks.block10mddis
                        }
                    }
                }),
                block11styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block11,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock11,
                        borderLeft: blocks.block11BorderLeft,
                        borderRight: blocks.block11BorderRight,
                        borderTop: blocks.block11BorderTop,
                        borderBottom: blocks.block11BorderBottom,
                        border: blocks.b11Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock11
                    },
                    '@media screen and (max-width: 768px)': {
                        block11styles: {
                            display: blocks.block11smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block11styles: {
                            display: blocks.block11mddis
                        }
                    }
                })
            };
        case num = 12:
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
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: state.width,
                        maxWidth: state.width,
                        height: state.height,
                        maxHeight: state.maxHeight,
                        padding: state.padding,
                        margin: state.margin,
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
                    '@media (max-width: 768px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block5styles: {
                            display: blocks.block5mddis
                        }
                    }
                }),
                block6styles: _nestingstyles2.default.create({
                    block6styles: {
                        display: 'flex',
                        flex: blocks.block6,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock6,
                        borderLeft: blocks.block6BorderLeft,
                        borderRight: blocks.block6BorderRight,
                        borderTop: blocks.block6BorderTop,
                        borderBottom: blocks.block6BorderBottom,
                        border: blocks.b6Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock6
                    },
                    '@media screen and (max-width: 768px)': {
                        block6styles: {
                            display: blocks.block6smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block6styles: {
                            display: blocks.block6mddis
                        }
                    }
                }),
                block7styles: _nestingstyles2.default.create({
                    block7styles: {
                        display: 'flex',
                        flex: blocks.block7,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock7,
                        borderLeft: blocks.block7BorderLeft,
                        borderRight: blocks.block7BorderRight,
                        borderTop: blocks.block7BorderTop,
                        borderBottom: blocks.block7BorderBottom,
                        border: blocks.b7Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock7
                    },
                    '@media screen and (max-width: 768px)': {
                        block7styles: {
                            display: blocks.block7smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block7styles: {
                            display: blocks.block7mddis
                        }
                    }
                }),
                block8styles: _nestingstyles2.default.create({
                    block8styles: {
                        display: 'flex',
                        flex: blocks.block8,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock8,
                        borderLeft: blocks.block8BorderLeft,
                        borderRight: blocks.block8BorderRight,
                        borderTop: blocks.block8BorderTop,
                        borderBottom: blocks.block8BorderBottom,
                        border: blocks.b8Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock8
                    },
                    '@media screen and (max-width: 768px)': {
                        block8styles: {
                            display: blocks.block8smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block8styles: {
                            display: blocks.block8mddis
                        }
                    }
                }),
                block9styles: _nestingstyles2.default.create({
                    block9styles: {
                        display: 'flex',
                        flex: blocks.block9,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock9,
                        borderLeft: blocks.block9BorderLeft,
                        borderRight: blocks.block9BorderRight,
                        borderTop: blocks.block9BorderTop,
                        borderBottom: blocks.block9BorderBottom,
                        border: blocks.b9Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock9
                    },
                    '@media screen and (max-width: 768px)': {
                        block9styles: {
                            display: blocks.block9smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block9styles: {
                            display: blocks.block9mddis
                        }
                    }
                }),
                block10styles: _nestingstyles2.default.create({
                    block10styles: {
                        display: 'flex',
                        flex: blocks.block10,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock10,
                        borderLeft: blocks.block10BorderLeft,
                        borderRight: blocks.block10BorderRight,
                        borderTop: blocks.block10BorderTop,
                        borderBottom: blocks.block10BorderBottom,
                        border: blocks.b10Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock10
                    },
                    '@media screen and (max-width: 768px)': {
                        block10styles: {
                            display: blocks.block10smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block10styles: {
                            display: blocks.block10mddis
                        }
                    }
                }),
                block11styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block11,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock11,
                        borderLeft: blocks.block11BorderLeft,
                        borderRight: blocks.block11BorderRight,
                        borderTop: blocks.block11BorderTop,
                        borderBottom: blocks.block11BorderBottom,
                        border: blocks.b11Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock11
                    },
                    '@media screen and (max-width: 768px)': {
                        block11styles: {
                            display: blocks.block11smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block11styles: {
                            display: blocks.block11mddis
                        }
                    }
                }),
                block12styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block12,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock12,
                        borderLeft: blocks.block12BorderLeft,
                        borderRight: blocks.block12BorderRight,
                        borderTop: blocks.block12BorderTop,
                        borderBottom: blocks.block12BorderBottom,
                        border: blocks.b12Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock12
                    },
                    '@media screen and (max-width: 768px)': {
                        block12styles: {
                            display: blocks.block12smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block12styles: {
                            display: blocks.block12mddis
                        }
                    }
                })
            };
        case num = 13:
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
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: state.width,
                        maxWidth: state.width,
                        height: state.height,
                        maxHeight: state.maxHeight,
                        padding: state.padding,
                        margin: state.margin,
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
                    '@media (max-width: 768px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block5styles: {
                            display: blocks.block5mddis
                        }
                    }
                }),
                block6styles: _nestingstyles2.default.create({
                    block6styles: {
                        display: 'flex',
                        flex: blocks.block6,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock6,
                        borderLeft: blocks.block6BorderLeft,
                        borderRight: blocks.block6BorderRight,
                        borderTop: blocks.block6BorderTop,
                        borderBottom: blocks.block6BorderBottom,
                        border: blocks.b6Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock6
                    },
                    '@media screen and (max-width: 768px)': {
                        block6styles: {
                            display: blocks.block6smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block6styles: {
                            display: blocks.block6mddis
                        }
                    }
                }),
                block7styles: _nestingstyles2.default.create({
                    block7styles: {
                        display: 'flex',
                        flex: blocks.block7,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock7,
                        borderLeft: blocks.block7BorderLeft,
                        borderRight: blocks.block7BorderRight,
                        borderTop: blocks.block7BorderTop,
                        borderBottom: blocks.block7BorderBottom,
                        border: blocks.b7Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock7
                    },
                    '@media screen and (max-width: 768px)': {
                        block7styles: {
                            display: blocks.block7smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block7styles: {
                            display: blocks.block7mddis
                        }
                    }
                }),
                block8styles: _nestingstyles2.default.create({
                    block8styles: {
                        display: 'flex',
                        flex: blocks.block8,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock8,
                        borderLeft: blocks.block8BorderLeft,
                        borderRight: blocks.block8BorderRight,
                        borderTop: blocks.block8BorderTop,
                        borderBottom: blocks.block8BorderBottom,
                        border: blocks.b8Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock8
                    },
                    '@media screen and (max-width: 768px)': {
                        block8styles: {
                            display: blocks.block8smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block8styles: {
                            display: blocks.block8mddis
                        }
                    }
                }),
                block9styles: _nestingstyles2.default.create({
                    block9styles: {
                        display: 'flex',
                        flex: blocks.block9,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock9,
                        borderLeft: blocks.block9BorderLeft,
                        borderRight: blocks.block9BorderRight,
                        borderTop: blocks.block9BorderTop,
                        borderBottom: blocks.block9BorderBottom,
                        border: blocks.b9Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock9
                    },
                    '@media screen and (max-width: 768px)': {
                        block9styles: {
                            display: blocks.block9smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block9styles: {
                            display: blocks.block9mddis
                        }
                    }
                }),
                block10styles: _nestingstyles2.default.create({
                    block10styles: {
                        display: 'flex',
                        flex: blocks.block10,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock10,
                        borderLeft: blocks.block10BorderLeft,
                        borderRight: blocks.block10BorderRight,
                        borderTop: blocks.block10BorderTop,
                        borderBottom: blocks.block10BorderBottom,
                        border: blocks.b10Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock10
                    },
                    '@media screen and (max-width: 768px)': {
                        block10styles: {
                            display: blocks.block10smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block10styles: {
                            display: blocks.block10mddis
                        }
                    }
                }),
                block11styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block11,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock11,
                        borderLeft: blocks.block11BorderLeft,
                        borderRight: blocks.block11BorderRight,
                        borderTop: blocks.block11BorderTop,
                        borderBottom: blocks.block11BorderBottom,
                        border: blocks.b11Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock11
                    },
                    '@media screen and (max-width: 768px)': {
                        block11styles: {
                            display: blocks.block11smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block11styles: {
                            display: blocks.block11mddis
                        }
                    }
                }),
                block12styles: _nestingstyles2.default.create({
                    block12styles: {
                        display: 'flex',
                        flex: blocks.block12,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock12,
                        borderLeft: blocks.block12BorderLeft,
                        borderRight: blocks.block12BorderRight,
                        borderTop: blocks.block12BorderTop,
                        borderBottom: blocks.block12BorderBottom,
                        border: blocks.b12Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock12
                    },
                    '@media screen and (max-width: 768px)': {
                        block12styles: {
                            display: blocks.block12smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block12styles: {
                            display: blocks.block12mddis
                        }
                    }
                }),
                block13styles: _nestingstyles2.default.create({
                    block13styles: {
                        display: 'flex',
                        flex: blocks.block13,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock13,
                        borderLeft: blocks.block13BorderLeft,
                        borderRight: blocks.block13BorderRight,
                        borderTop: blocks.block13BorderTop,
                        borderBottom: blocks.block13BorderBottom,
                        border: blocks.b13Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock13
                    },
                    '@media screen and (max-width: 768px)': {
                        block13styles: {
                            display: blocks.block13smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block13styles: {
                            display: blocks.block13mddis
                        }
                    }
                })
            };
        case num = 14:
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
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: state.width,
                        maxWidth: state.width,
                        height: state.height,
                        maxHeight: state.maxHeight,
                        padding: state.padding,
                        margin: state.margin,
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
                    '@media (max-width: 768px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block5styles: {
                            display: blocks.block5mddis
                        }
                    }
                }),
                block6styles: _nestingstyles2.default.create({
                    block6styles: {
                        display: 'flex',
                        flex: blocks.block6,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock6,
                        borderLeft: blocks.block6BorderLeft,
                        borderRight: blocks.block6BorderRight,
                        borderTop: blocks.block6BorderTop,
                        borderBottom: blocks.block6BorderBottom,
                        border: blocks.b6Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock6
                    },
                    '@media screen and (max-width: 768px)': {
                        block6styles: {
                            display: blocks.block6smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block6styles: {
                            display: blocks.block6mddis
                        }
                    }
                }),
                block7styles: _nestingstyles2.default.create({
                    block7styles: {
                        display: 'flex',
                        flex: blocks.block7,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock7,
                        borderLeft: blocks.block7BorderLeft,
                        borderRight: blocks.block7BorderRight,
                        borderTop: blocks.block7BorderTop,
                        borderBottom: blocks.block7BorderBottom,
                        border: blocks.b7Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock7
                    },
                    '@media screen and (max-width: 768px)': {
                        block7styles: {
                            display: blocks.block7smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block7styles: {
                            display: blocks.block7mddis
                        }
                    }
                }),
                block8styles: _nestingstyles2.default.create({
                    block8styles: {
                        display: 'flex',
                        flex: blocks.block8,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock8,
                        borderLeft: blocks.block8BorderLeft,
                        borderRight: blocks.block8BorderRight,
                        borderTop: blocks.block8BorderTop,
                        borderBottom: blocks.block8BorderBottom,
                        border: blocks.b8Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock8
                    },
                    '@media screen and (max-width: 768px)': {
                        block8styles: {
                            display: blocks.block8smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block8styles: {
                            display: blocks.block8mddis
                        }
                    }
                }),
                block9styles: _nestingstyles2.default.create({
                    block9styles: {
                        display: 'flex',
                        flex: blocks.block9,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock9,
                        borderLeft: blocks.block9BorderLeft,
                        borderRight: blocks.block9BorderRight,
                        borderTop: blocks.block9BorderTop,
                        borderBottom: blocks.block9BorderBottom,
                        border: blocks.b9Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock9
                    },
                    '@media screen and (max-width: 768px)': {
                        block9styles: {
                            display: blocks.block9smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block9styles: {
                            display: blocks.block9mddis
                        }
                    }
                }),
                block10styles: _nestingstyles2.default.create({
                    block10styles: {
                        display: 'flex',
                        flex: blocks.block10,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock10,
                        borderLeft: blocks.block10BorderLeft,
                        borderRight: blocks.block10BorderRight,
                        borderTop: blocks.block10BorderTop,
                        borderBottom: blocks.block10BorderBottom,
                        border: blocks.b10Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock10
                    },
                    '@media screen and (max-width: 768px)': {
                        block10styles: {
                            display: blocks.block10smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block10styles: {
                            display: blocks.block10mddis
                        }
                    }
                }),
                block11styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block11,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock11,
                        borderLeft: blocks.block11BorderLeft,
                        borderRight: blocks.block11BorderRight,
                        borderTop: blocks.block11BorderTop,
                        borderBottom: blocks.block11BorderBottom,
                        border: blocks.b11Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock11
                    },
                    '@media screen and (max-width: 768px)': {
                        block11styles: {
                            display: blocks.block11smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block11styles: {
                            display: blocks.block11mddis
                        }
                    }
                }),
                block12styles: _nestingstyles2.default.create({
                    block12styles: {
                        display: 'flex',
                        flex: blocks.block12,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock12,
                        borderLeft: blocks.block12BorderLeft,
                        borderRight: blocks.block12BorderRight,
                        borderTop: blocks.block12BorderTop,
                        borderBottom: blocks.block12BorderBottom,
                        border: blocks.b12Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock12
                    },
                    '@media screen and (max-width: 768px)': {
                        block12styles: {
                            display: blocks.block12smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block12styles: {
                            display: blocks.block12mddis
                        }
                    }
                }),
                block13styles: _nestingstyles2.default.create({
                    block13styles: {
                        display: 'flex',
                        flex: blocks.block13,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock13,
                        borderLeft: blocks.block13BorderLeft,
                        borderRight: blocks.block13BorderRight,
                        borderTop: blocks.block13BorderTop,
                        borderBottom: blocks.block13BorderBottom,
                        border: blocks.b13Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock13
                    },
                    '@media screen and (max-width: 768px)': {
                        block13styles: {
                            display: blocks.block13smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block13styles: {
                            display: blocks.block13mddis
                        }
                    }
                }),
                block14styles: _nestingstyles2.default.create({
                    block14styles: {
                        display: 'flex',
                        flex: blocks.block14,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock14,
                        borderLeft: blocks.block14BorderLeft,
                        borderRight: blocks.block14BorderRight,
                        borderTop: blocks.block14BorderTop,
                        borderBottom: blocks.block14BorderBottom,
                        border: blocks.b14Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock14
                    },
                    '@media screen and (max-width: 768px)': {
                        block14styles: {
                            display: blocks.block14smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block14styles: {
                            display: blocks.block14mddis
                        }
                    }
                })
            };
        case num = 15:
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
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex'
            };
            return {
                holderstyles: _nestingstyles2.default.create({
                    holderstyles: {
                        width: state.width,
                        maxWidth: state.width,
                        height: state.height,
                        maxHeight: state.maxHeight,
                        padding: state.padding,
                        margin: state.margin,
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
                    '@media (max-width: 768px)': {
                        holderstyles: {
                            display: state.smdis,
                            flexDirection: state.smflexDir
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block1styles: {
                            display: blocks.block1smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block2styles: {
                            display: blocks.block2smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block3styles: {
                            display: blocks.block3smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block4styles: {
                            display: blocks.block4smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
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
                    '@media screen and (max-width: 768px)': {
                        block5styles: {
                            display: blocks.block5smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block5styles: {
                            display: blocks.block5mddis
                        }
                    }
                }),
                block6styles: _nestingstyles2.default.create({
                    block6styles: {
                        display: 'flex',
                        flex: blocks.block6,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock6,
                        borderLeft: blocks.block6BorderLeft,
                        borderRight: blocks.block6BorderRight,
                        borderTop: blocks.block6BorderTop,
                        borderBottom: blocks.block6BorderBottom,
                        border: blocks.b6Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock6
                    },
                    '@media screen and (max-width: 768px)': {
                        block6styles: {
                            display: blocks.block6smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block6styles: {
                            display: blocks.block6mddis
                        }
                    }
                }),
                block7styles: _nestingstyles2.default.create({
                    block7styles: {
                        display: 'flex',
                        flex: blocks.block7,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock7,
                        borderLeft: blocks.block7BorderLeft,
                        borderRight: blocks.block7BorderRight,
                        borderTop: blocks.block7BorderTop,
                        borderBottom: blocks.block7BorderBottom,
                        border: blocks.b7Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock7
                    },
                    '@media screen and (max-width: 768px)': {
                        block7styles: {
                            display: blocks.block7smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block7styles: {
                            display: blocks.block7mddis
                        }
                    }
                }),
                block8styles: _nestingstyles2.default.create({
                    block8styles: {
                        display: 'flex',
                        flex: blocks.block8,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock8,
                        borderLeft: blocks.block8BorderLeft,
                        borderRight: blocks.block8BorderRight,
                        borderTop: blocks.block8BorderTop,
                        borderBottom: blocks.block8BorderBottom,
                        border: blocks.b8Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock8
                    },
                    '@media screen and (max-width: 768px)': {
                        block8styles: {
                            display: blocks.block8smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block8styles: {
                            display: blocks.block8mddis
                        }
                    }
                }),
                block9styles: _nestingstyles2.default.create({
                    block9styles: {
                        display: 'flex',
                        flex: blocks.block9,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock9,
                        borderLeft: blocks.block9BorderLeft,
                        borderRight: blocks.block9BorderRight,
                        borderTop: blocks.block9BorderTop,
                        borderBottom: blocks.block9BorderBottom,
                        border: blocks.b9Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock9
                    },
                    '@media screen and (max-width: 768px)': {
                        block9styles: {
                            display: blocks.block9smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block9styles: {
                            display: blocks.block9mddis
                        }
                    }
                }),
                block10styles: _nestingstyles2.default.create({
                    block10styles: {
                        display: 'flex',
                        flex: blocks.block10,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock10,
                        borderLeft: blocks.block10BorderLeft,
                        borderRight: blocks.block10BorderRight,
                        borderTop: blocks.block10BorderTop,
                        borderBottom: blocks.block10BorderBottom,
                        border: blocks.b10Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock10
                    },
                    '@media screen and (max-width: 768px)': {
                        block10styles: {
                            display: blocks.block10smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block10styles: {
                            display: blocks.block10mddis
                        }
                    }
                }),
                block11styles: _nestingstyles2.default.create({
                    block11styles: {
                        display: 'flex',
                        flex: blocks.block11,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock11,
                        borderLeft: blocks.block11BorderLeft,
                        borderRight: blocks.block11BorderRight,
                        borderTop: blocks.block11BorderTop,
                        borderBottom: blocks.block11BorderBottom,
                        border: blocks.b11Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock11
                    },
                    '@media screen and (max-width: 768px)': {
                        block11styles: {
                            display: blocks.block11smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block11styles: {
                            display: blocks.block11mddis
                        }
                    }
                }),
                block12styles: _nestingstyles2.default.create({
                    block12styles: {
                        display: 'flex',
                        flex: blocks.block12,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock12,
                        borderLeft: blocks.block12BorderLeft,
                        borderRight: blocks.block12BorderRight,
                        borderTop: blocks.block12BorderTop,
                        borderBottom: blocks.block12BorderBottom,
                        border: blocks.b12Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock12
                    },
                    '@media screen and (max-width: 768px)': {
                        block12styles: {
                            display: blocks.block12smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block12styles: {
                            display: blocks.block12mddis
                        }
                    }
                }),
                block13styles: _nestingstyles2.default.create({
                    block13styles: {
                        display: 'flex',
                        flex: blocks.block13,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock13,
                        borderLeft: blocks.block13BorderLeft,
                        borderRight: blocks.block13BorderRight,
                        borderTop: blocks.block13BorderTop,
                        borderBottom: blocks.block13BorderBottom,
                        border: blocks.b13Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock13
                    },
                    '@media screen and (max-width: 768px)': {
                        block13styles: {
                            display: blocks.block13smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block13styles: {
                            display: blocks.block13mddis
                        }
                    }
                }),
                block14styles: _nestingstyles2.default.create({
                    block14styles: {
                        display: 'flex',
                        flex: blocks.block14,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock14,
                        borderLeft: blocks.block14BorderLeft,
                        borderRight: blocks.block14BorderRight,
                        borderTop: blocks.block14BorderTop,
                        borderBottom: blocks.block14BorderBottom,
                        border: blocks.b14Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock14
                    },
                    '@media screen and (max-width: 768px)': {
                        block14styles: {
                            display: blocks.block14smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block14styles: {
                            display: blocks.block14mddis
                        }
                    }
                }),
                block15styles: _nestingstyles2.default.create({
                    block15styles: {
                        display: 'flex',
                        flex: blocks.block15,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock15,
                        borderLeft: blocks.block15BorderLeft,
                        borderRight: blocks.block15BorderRight,
                        borderTop: blocks.block15BorderTop,
                        borderBottom: blocks.block15BorderBottom,
                        border: blocks.b15Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock15
                    },
                    '@media screen and (max-width: 768px)': {
                        block15styles: {
                            display: blocks.block15smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block15styles: {
                            display: blocks.block15mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}