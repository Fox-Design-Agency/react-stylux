'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = containerSwitch31_35;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function containerSwitch31_35(num, props, state) {
    var blocks = '';

    switch (num) {
        case num = 31:
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
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
                block21Direction: props.block21direction || 'column',
                block21: props.block21 || '1',
                block21BorderLeft: props.b21BLeft,
                block21BorderRight: props.b21BRight,
                block21BorderTop: props.b21BTop,
                block21BorderBottom: props.b21BBottom,
                block21Border: props.b21Border,
                alignBlock21: props.alignBlock21 || 'center',
                justifyBlock21: props.justifyBlock21 || 'center',
                block21smdis: props.block21smdis || 'flex',
                block21mddis: props.block21mddis || 'flex',
                block22Direction: props.block22direction || 'column',
                block22: props.block22 || '1',
                block22BorderLeft: props.b22BLeft,
                block22BorderRight: props.b22BRight,
                block22BorderTop: props.b22BTop,
                block22BorderBottom: props.b22BBottom,
                block22Border: props.b22Border,
                alignBlock22: props.alignBlock22 || 'center',
                justifyBlock22: props.justifyBlock22 || 'center',
                block22smdis: props.block22smdis || 'flex',
                block22mddis: props.block22mddis || 'flex',
                block23Direction: props.block23direction || 'column',
                block23: props.block23 || '1',
                block23BorderLeft: props.b23BLeft,
                block23BorderRight: props.b23BRight,
                block23BorderTop: props.b23BTop,
                block23BorderBottom: props.b23BBottom,
                block23Border: props.b23Border,
                alignBlock23: props.alignBlock23 || 'center',
                justifyBlock23: props.justifyBlock23 || 'center',
                block23smdis: props.block23smdis || 'flex',
                block23mddis: props.block23mddis || 'flex',
                block24Direction: props.block24direction || 'column',
                block24: props.block24 || '1',
                block24BorderLeft: props.b24BLeft,
                block24BorderRight: props.b24BRight,
                block24BorderTop: props.b24BTop,
                block24BorderBottom: props.b24BBottom,
                block24Border: props.b24Border,
                alignBlock24: props.alignBlock24 || 'center',
                justifyBlock24: props.justifyBlock24 || 'center',
                block24smdis: props.block24smdis || 'flex',
                block24mddis: props.block24mddis || 'flex',
                block25Direction: props.block25direction || 'column',
                block25: props.block25 || '1',
                block25BorderLeft: props.b25BLeft,
                block25BorderRight: props.b25BRight,
                block25BorderTop: props.b25BTop,
                block25BorderBottom: props.b25BBottom,
                block25Border: props.b25Border,
                alignBlock25: props.alignBlock25 || 'center',
                justifyBlock25: props.justifyBlock25 || 'center',
                block25smdis: props.block25smdis || 'flex',
                block25mddis: props.block25mddis || 'flex',
                block26Direction: props.block26direction || 'column',
                block26: props.block26 || '1',
                block26BorderLeft: props.b26BLeft,
                block26BorderRight: props.b26BRight,
                block26BorderTop: props.b26BTop,
                block26BorderBottom: props.b26BBottom,
                block26Border: props.b26Border,
                alignBlock26: props.alignBlock26 || 'center',
                justifyBlock26: props.justifyBlock26 || 'center',
                block26smdis: props.block26smdis || 'flex',
                block26mddis: props.block26mddis || 'flex',
                block27Direction: props.block27direction || 'column',
                block27: props.block27 || '1',
                block27BorderLeft: props.b27BLeft,
                block27BorderRight: props.b27BRight,
                block27BorderTop: props.b27BTop,
                block27BorderBottom: props.b27BBottom,
                block27Border: props.b27Border,
                alignBlock27: props.alignBlock27 || 'center',
                justifyBlock27: props.justifyBlock27 || 'center',
                block27smdis: props.block27smdis || 'flex',
                block27mddis: props.block27mddis || 'flex',
                block28Direction: props.block28direction || 'column',
                block28: props.block28 || '1',
                block28BorderLeft: props.b28BLeft,
                block28BorderRight: props.b28BRight,
                block28BorderTop: props.b28BTop,
                block28BorderBottom: props.b28BBottom,
                block28Border: props.b28Border,
                alignBlock28: props.alignBlock28 || 'center',
                justifyBlock28: props.justifyBlock28 || 'center',
                block28smdis: props.block28smdis || 'flex',
                block28mddis: props.block28mddis || 'flex',
                block29Direction: props.block29direction || 'column',
                block29: props.block29 || '1',
                block29BorderLeft: props.b29BLeft,
                block29BorderRight: props.b29BRight,
                block29BorderTop: props.b29BTop,
                block29BorderBottom: props.b29BBottom,
                block29Border: props.b29Border,
                alignBlock29: props.alignBlock29 || 'center',
                justifyBlock29: props.justifyBlock29 || 'center',
                block29smdis: props.block29smdis || 'flex',
                block29mddis: props.block29mddis || 'flex',
                block30Direction: props.block30direction || 'column',
                block30: props.block30 || '1',
                block30BorderLeft: props.b30BLeft,
                block30BorderRight: props.b30BRight,
                block30BorderTop: props.b30BTop,
                block30BorderBottom: props.b30BBottom,
                block30Border: props.b30Border,
                alignBlock30: props.alignBlock30 || 'center',
                justifyBlock30: props.justifyBlock30 || 'center',
                block30smdis: props.block30smdis || 'flex',
                block30mddis: props.block30mddis || 'flex',
                block31Direction: props.block31direction || 'column',
                block31: props.block31 || '1',
                block31BorderLeft: props.b31BLeft,
                block31BorderRight: props.b31BRight,
                block31BorderTop: props.b31BTop,
                block31BorderBottom: props.b31BBottom,
                block31Border: props.b31Border,
                alignBlock31: props.alignBlock31 || 'center',
                justifyBlock31: props.justifyBlock31 || 'center',
                block31smdis: props.block31smdis || 'flex',
                block31mddis: props.block31mddis || 'flex'
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
                        flexDirection: blocks.block3Direction,
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
                        flexDirection: blocks.block4Direction,
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
                        flexDirection: blocks.block5Direction,
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
                        flexDirection: blocks.block6Direction,
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
                        flexDirection: blocks.block7Direction,
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
                        flexDirection: blocks.block8Direction,
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
                        flexDirection: blocks.block9Direction,
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
                        flexDirection: blocks.block10Direction,
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
                        flexDirection: blocks.block11Direction,
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
                        flexDirection: blocks.block12Direction,
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
                        flexDirection: blocks.block13Direction,
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
                        flexDirection: blocks.block14Direction,
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
                        flexDirection: blocks.block15Direction,
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
                }),
                block16styles: _nestingstyles2.default.create({
                    block16styles: {
                        display: 'flex',
                        flex: blocks.block16,
                        flexDirection: blocks.block16Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock16,
                        borderLeft: blocks.block16BorderLeft,
                        borderRight: blocks.block16BorderRight,
                        borderTop: blocks.block16BorderTop,
                        borderBottom: blocks.block16BorderBottom,
                        border: blocks.b16Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock16
                    },
                    '@media screen and (max-width: 768px)': {
                        block16styles: {
                            display: blocks.block16smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block16styles: {
                            display: blocks.block16mddis
                        }
                    }
                }),
                block17styles: _nestingstyles2.default.create({
                    block17styles: {
                        display: 'flex',
                        flex: blocks.block17,
                        flexDirection: blocks.block17Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock17,
                        borderLeft: blocks.block17BorderLeft,
                        borderRight: blocks.block17BorderRight,
                        borderTop: blocks.block17BorderTop,
                        borderBottom: blocks.block17BorderBottom,
                        border: blocks.b17Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock17
                    },
                    '@media screen and (max-width: 768px)': {
                        block17styles: {
                            display: blocks.block17smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block17styles: {
                            display: blocks.block17mddis
                        }
                    }
                }),
                block18styles: _nestingstyles2.default.create({
                    block18styles: {
                        display: 'flex',
                        flex: blocks.block18,
                        flexDirection: blocks.block18Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock18,
                        borderLeft: blocks.block18BorderLeft,
                        borderRight: blocks.block18BorderRight,
                        borderTop: blocks.block18BorderTop,
                        borderBottom: blocks.block18BorderBottom,
                        border: blocks.b18Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock18
                    },
                    '@media screen and (max-width: 768px)': {
                        block18styles: {
                            display: blocks.block18smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block18styles: {
                            display: blocks.block18mddis
                        }
                    }
                }),
                block19styles: _nestingstyles2.default.create({
                    block19styles: {
                        display: 'flex',
                        flex: blocks.block19,
                        flexDirection: blocks.block19Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock19,
                        borderLeft: blocks.block19BorderLeft,
                        borderRight: blocks.block19BorderRight,
                        borderTop: blocks.block19BorderTop,
                        borderBottom: blocks.block19BorderBottom,
                        border: blocks.b19Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock19
                    },
                    '@media screen and (max-width: 768px)': {
                        block19styles: {
                            display: blocks.block19smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block19styles: {
                            display: blocks.block19mddis
                        }
                    }
                }),
                block20styles: _nestingstyles2.default.create({
                    block20styles: {
                        display: 'flex',
                        flex: blocks.block20,
                        flexDirection: blocks.block20Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock20,
                        borderLeft: blocks.block20BorderLeft,
                        borderRight: blocks.block20BorderRight,
                        borderTop: blocks.block20BorderTop,
                        borderBottom: blocks.block20BorderBottom,
                        border: blocks.b20Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock20
                    },
                    '@media screen and (max-width: 768px)': {
                        block20styles: {
                            display: blocks.block20smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block20styles: {
                            display: blocks.block20mddis
                        }
                    }
                }),
                block21styles: _nestingstyles2.default.create({
                    block21styles: {
                        display: 'flex',
                        flex: blocks.block21,
                        flexDirection: blocks.block21Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock21,
                        borderLeft: blocks.block21BorderLeft,
                        borderRight: blocks.block21BorderRight,
                        borderTop: blocks.block21BorderTop,
                        borderBottom: blocks.block21BorderBottom,
                        border: blocks.b21Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock21
                    },
                    '@media screen and (max-width: 768px)': {
                        block21styles: {
                            display: blocks.block21smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block21styles: {
                            display: blocks.block21mddis
                        }
                    }
                }),
                block22styles: _nestingstyles2.default.create({
                    block22styles: {
                        display: 'flex',
                        flex: blocks.block22,
                        flexDirection: blocks.block22Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock22,
                        borderLeft: blocks.block22BorderLeft,
                        borderRight: blocks.block22BorderRight,
                        borderTop: blocks.block22BorderTop,
                        borderBottom: blocks.block22BorderBottom,
                        border: blocks.b22Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock22
                    },
                    '@media screen and (max-width: 768px)': {
                        block22styles: {
                            display: blocks.block22smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block22styles: {
                            display: blocks.block22mddis
                        }
                    }
                }),
                block23styles: _nestingstyles2.default.create({
                    block23styles: {
                        display: 'flex',
                        flex: blocks.block23,
                        flexDirection: blocks.block23Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock23,
                        borderLeft: blocks.block23BorderLeft,
                        borderRight: blocks.block23BorderRight,
                        borderTop: blocks.block23BorderTop,
                        borderBottom: blocks.block23BorderBottom,
                        border: blocks.b23Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock23
                    },
                    '@media screen and (max-width: 768px)': {
                        block23styles: {
                            display: blocks.block23smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block23styles: {
                            display: blocks.block23mddis
                        }
                    }
                }),
                block24styles: _nestingstyles2.default.create({
                    block24styles: {
                        display: 'flex',
                        flex: blocks.block24,
                        flexDirection: blocks.block24Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock24,
                        borderLeft: blocks.block24BorderLeft,
                        borderRight: blocks.block24BorderRight,
                        borderTop: blocks.block24BorderTop,
                        borderBottom: blocks.block24BorderBottom,
                        border: blocks.b24Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock24
                    },
                    '@media screen and (max-width: 768px)': {
                        block24styles: {
                            display: blocks.block24smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block24styles: {
                            display: blocks.block24mddis
                        }
                    }
                }),
                block25styles: _nestingstyles2.default.create({
                    block25styles: {
                        display: 'flex',
                        flex: blocks.block25,
                        flexDirection: blocks.block25Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock25,
                        borderLeft: blocks.block25BorderLeft,
                        borderRight: blocks.block25BorderRight,
                        borderTop: blocks.block25BorderTop,
                        borderBottom: blocks.block25BorderBottom,
                        border: blocks.b25Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock25
                    },
                    '@media screen and (max-width: 768px)': {
                        block25styles: {
                            display: blocks.block25smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block25styles: {
                            display: blocks.block25mddis
                        }
                    }
                }),
                block26styles: _nestingstyles2.default.create({
                    block26styles: {
                        display: 'flex',
                        flex: blocks.block26,
                        flexDirection: blocks.block26Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock26,
                        borderLeft: blocks.block26BorderLeft,
                        borderRight: blocks.block26BorderRight,
                        borderTop: blocks.block26BorderTop,
                        borderBottom: blocks.block26BorderBottom,
                        border: blocks.b26Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock26
                    },
                    '@media screen and (max-width: 768px)': {
                        block26styles: {
                            display: blocks.block26smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block26styles: {
                            display: blocks.block26mddis
                        }
                    }
                }),
                block27styles: _nestingstyles2.default.create({
                    block27styles: {
                        display: 'flex',
                        flex: blocks.block27,
                        flexDirection: blocks.block27Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock27,
                        borderLeft: blocks.block27BorderLeft,
                        borderRight: blocks.block27BorderRight,
                        borderTop: blocks.block27BorderTop,
                        borderBottom: blocks.block27BorderBottom,
                        border: blocks.b27Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock27
                    },
                    '@media screen and (max-width: 768px)': {
                        block27styles: {
                            display: blocks.block27smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block27styles: {
                            display: blocks.block27mddis
                        }
                    }
                }),
                block28styles: _nestingstyles2.default.create({
                    block28styles: {
                        display: 'flex',
                        flex: blocks.block28,
                        flexDirection: blocks.block28Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock28,
                        borderLeft: blocks.block28BorderLeft,
                        borderRight: blocks.block28BorderRight,
                        borderTop: blocks.block28BorderTop,
                        borderBottom: blocks.block28BorderBottom,
                        border: blocks.b28Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock28
                    },
                    '@media screen and (max-width: 768px)': {
                        block28styles: {
                            display: blocks.block28smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block28styles: {
                            display: blocks.block28mddis
                        }
                    }
                }),
                block29styles: _nestingstyles2.default.create({
                    block29styles: {
                        display: 'flex',
                        flex: blocks.block29,
                        flexDirection: blocks.block29Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock29,
                        borderLeft: blocks.block29BorderLeft,
                        borderRight: blocks.block29BorderRight,
                        borderTop: blocks.block29BorderTop,
                        borderBottom: blocks.block29BorderBottom,
                        border: blocks.b29Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock29
                    },
                    '@media screen and (max-width: 768px)': {
                        block29styles: {
                            display: blocks.block29smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block29styles: {
                            display: blocks.block29mddis
                        }
                    }
                }),
                block30styles: _nestingstyles2.default.create({
                    block30styles: {
                        display: 'flex',
                        flex: blocks.block30,
                        flexDirection: blocks.block30Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock30,
                        borderLeft: blocks.block30BorderLeft,
                        borderRight: blocks.block30BorderRight,
                        borderTop: blocks.block30BorderTop,
                        borderBottom: blocks.block30BorderBottom,
                        border: blocks.b30Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock30
                    },
                    '@media screen and (max-width: 768px)': {
                        block30styles: {
                            display: blocks.block30smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block30styles: {
                            display: blocks.block30mddis
                        }
                    }
                }),
                block31styles: _nestingstyles2.default.create({
                    block31styles: {
                        display: 'flex',
                        flex: blocks.block31,
                        flexDirection: blocks.block31Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock31,
                        borderLeft: blocks.block31BorderLeft,
                        borderRight: blocks.block31BorderRight,
                        borderTop: blocks.block31BorderTop,
                        borderBottom: blocks.block31BorderBottom,
                        border: blocks.b31Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock31
                    },
                    '@media screen and (max-width: 768px)': {
                        block31styles: {
                            display: blocks.block31smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block31styles: {
                            display: blocks.block31mddis
                        }
                    }
                })
            };

        case num = 32:
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
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
                block21Direction: props.block21direction || 'column',
                block21: props.block21 || '1',
                block21BorderLeft: props.b21BLeft,
                block21BorderRight: props.b21BRight,
                block21BorderTop: props.b21BTop,
                block21BorderBottom: props.b21BBottom,
                block21Border: props.b21Border,
                alignBlock21: props.alignBlock21 || 'center',
                justifyBlock21: props.justifyBlock21 || 'center',
                block21smdis: props.block21smdis || 'flex',
                block21mddis: props.block21mddis || 'flex',
                block22Direction: props.block22direction || 'column',
                block22: props.block22 || '1',
                block22BorderLeft: props.b22BLeft,
                block22BorderRight: props.b22BRight,
                block22BorderTop: props.b22BTop,
                block22BorderBottom: props.b22BBottom,
                block22Border: props.b22Border,
                alignBlock22: props.alignBlock22 || 'center',
                justifyBlock22: props.justifyBlock22 || 'center',
                block22smdis: props.block22smdis || 'flex',
                block22mddis: props.block22mddis || 'flex',
                block23Direction: props.block23direction || 'column',
                block23: props.block23 || '1',
                block23BorderLeft: props.b23BLeft,
                block23BorderRight: props.b23BRight,
                block23BorderTop: props.b23BTop,
                block23BorderBottom: props.b23BBottom,
                block23Border: props.b23Border,
                alignBlock23: props.alignBlock23 || 'center',
                justifyBlock23: props.justifyBlock23 || 'center',
                block23smdis: props.block23smdis || 'flex',
                block23mddis: props.block23mddis || 'flex',
                block24Direction: props.block24direction || 'column',
                block24: props.block24 || '1',
                block24BorderLeft: props.b24BLeft,
                block24BorderRight: props.b24BRight,
                block24BorderTop: props.b24BTop,
                block24BorderBottom: props.b24BBottom,
                block24Border: props.b24Border,
                alignBlock24: props.alignBlock24 || 'center',
                justifyBlock24: props.justifyBlock24 || 'center',
                block24smdis: props.block24smdis || 'flex',
                block24mddis: props.block24mddis || 'flex',
                block25Direction: props.block25direction || 'column',
                block25: props.block25 || '1',
                block25BorderLeft: props.b25BLeft,
                block25BorderRight: props.b25BRight,
                block25BorderTop: props.b25BTop,
                block25BorderBottom: props.b25BBottom,
                block25Border: props.b25Border,
                alignBlock25: props.alignBlock25 || 'center',
                justifyBlock25: props.justifyBlock25 || 'center',
                block25smdis: props.block25smdis || 'flex',
                block25mddis: props.block25mddis || 'flex',
                block26Direction: props.block26direction || 'column',
                block26: props.block26 || '1',
                block26BorderLeft: props.b26BLeft,
                block26BorderRight: props.b26BRight,
                block26BorderTop: props.b26BTop,
                block26BorderBottom: props.b26BBottom,
                block26Border: props.b26Border,
                alignBlock26: props.alignBlock26 || 'center',
                justifyBlock26: props.justifyBlock26 || 'center',
                block26smdis: props.block26smdis || 'flex',
                block26mddis: props.block26mddis || 'flex',
                block27Direction: props.block27direction || 'column',
                block27: props.block27 || '1',
                block27BorderLeft: props.b27BLeft,
                block27BorderRight: props.b27BRight,
                block27BorderTop: props.b27BTop,
                block27BorderBottom: props.b27BBottom,
                block27Border: props.b27Border,
                alignBlock27: props.alignBlock27 || 'center',
                justifyBlock27: props.justifyBlock27 || 'center',
                block27smdis: props.block27smdis || 'flex',
                block27mddis: props.block27mddis || 'flex',
                block28Direction: props.block28direction || 'column',
                block28: props.block28 || '1',
                block28BorderLeft: props.b28BLeft,
                block28BorderRight: props.b28BRight,
                block28BorderTop: props.b28BTop,
                block28BorderBottom: props.b28BBottom,
                block28Border: props.b28Border,
                alignBlock28: props.alignBlock28 || 'center',
                justifyBlock28: props.justifyBlock28 || 'center',
                block28smdis: props.block28smdis || 'flex',
                block28mddis: props.block28mddis || 'flex',
                block29Direction: props.block29direction || 'column',
                block29: props.block29 || '1',
                block29BorderLeft: props.b29BLeft,
                block29BorderRight: props.b29BRight,
                block29BorderTop: props.b29BTop,
                block29BorderBottom: props.b29BBottom,
                block29Border: props.b29Border,
                alignBlock29: props.alignBlock29 || 'center',
                justifyBlock29: props.justifyBlock29 || 'center',
                block29smdis: props.block29smdis || 'flex',
                block29mddis: props.block29mddis || 'flex',
                block30Direction: props.block30direction || 'column',
                block30: props.block30 || '1',
                block30BorderLeft: props.b30BLeft,
                block30BorderRight: props.b30BRight,
                block30BorderTop: props.b30BTop,
                block30BorderBottom: props.b30BBottom,
                block30Border: props.b30Border,
                alignBlock30: props.alignBlock30 || 'center',
                justifyBlock30: props.justifyBlock30 || 'center',
                block30smdis: props.block30smdis || 'flex',
                block30mddis: props.block30mddis || 'flex',
                block31Direction: props.block31direction || 'column',
                block31: props.block31 || '1',
                block31BorderLeft: props.b31BLeft,
                block31BorderRight: props.b31BRight,
                block31BorderTop: props.b31BTop,
                block31BorderBottom: props.b31BBottom,
                block31Border: props.b31Border,
                alignBlock31: props.alignBlock31 || 'center',
                justifyBlock31: props.justifyBlock31 || 'center',
                block31smdis: props.block31smdis || 'flex',
                block31mddis: props.block31mddis || 'flex',
                block32Direction: props.block32direction || 'column',
                block32: props.block32 || '1',
                block32BorderLeft: props.b32BLeft,
                block32BorderRight: props.b32BRight,
                block32BorderTop: props.b32BTop,
                block32BorderBottom: props.b32BBottom,
                block32Border: props.b32Border,
                alignBlock32: props.alignBlock32 || 'center',
                justifyBlock32: props.justifyBlock32 || 'center',
                block32smdis: props.block32smdis || 'flex',
                block32mddis: props.block32mddis || 'flex'
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
                        flexDirection: blocks.block3Direction,
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
                        flexDirection: blocks.block4Direction,
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
                        flexDirection: blocks.block5Direction,
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
                        flexDirection: blocks.block6Direction,
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
                        flexDirection: blocks.block7Direction,
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
                        flexDirection: blocks.block8Direction,
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
                        flexDirection: blocks.block9Direction,
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
                        flexDirection: blocks.block10Direction,
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
                        flexDirection: blocks.block11Direction,
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
                        flexDirection: blocks.block12Direction,
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
                        flexDirection: blocks.block13Direction,
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
                        flexDirection: blocks.block14Direction,
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
                        flexDirection: blocks.block15Direction,
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
                }),
                block16styles: _nestingstyles2.default.create({
                    block16styles: {
                        display: 'flex',
                        flex: blocks.block16,
                        flexDirection: blocks.block16Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock16,
                        borderLeft: blocks.block16BorderLeft,
                        borderRight: blocks.block16BorderRight,
                        borderTop: blocks.block16BorderTop,
                        borderBottom: blocks.block16BorderBottom,
                        border: blocks.b16Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock16
                    },
                    '@media screen and (max-width: 768px)': {
                        block16styles: {
                            display: blocks.block16smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block16styles: {
                            display: blocks.block16mddis
                        }
                    }
                }),
                block17styles: _nestingstyles2.default.create({
                    block17styles: {
                        display: 'flex',
                        flex: blocks.block17,
                        flexDirection: blocks.block17Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock17,
                        borderLeft: blocks.block17BorderLeft,
                        borderRight: blocks.block17BorderRight,
                        borderTop: blocks.block17BorderTop,
                        borderBottom: blocks.block17BorderBottom,
                        border: blocks.b17Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock17
                    },
                    '@media screen and (max-width: 768px)': {
                        block17styles: {
                            display: blocks.block17smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block17styles: {
                            display: blocks.block17mddis
                        }
                    }
                }),
                block18styles: _nestingstyles2.default.create({
                    block18styles: {
                        display: 'flex',
                        flex: blocks.block18,
                        flexDirection: blocks.block18Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock18,
                        borderLeft: blocks.block18BorderLeft,
                        borderRight: blocks.block18BorderRight,
                        borderTop: blocks.block18BorderTop,
                        borderBottom: blocks.block18BorderBottom,
                        border: blocks.b18Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock18
                    },
                    '@media screen and (max-width: 768px)': {
                        block18styles: {
                            display: blocks.block18smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block18styles: {
                            display: blocks.block18mddis
                        }
                    }
                }),
                block19styles: _nestingstyles2.default.create({
                    block19styles: {
                        display: 'flex',
                        flex: blocks.block19,
                        flexDirection: blocks.block19Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock19,
                        borderLeft: blocks.block19BorderLeft,
                        borderRight: blocks.block19BorderRight,
                        borderTop: blocks.block19BorderTop,
                        borderBottom: blocks.block19BorderBottom,
                        border: blocks.b19Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock19
                    },
                    '@media screen and (max-width: 768px)': {
                        block19styles: {
                            display: blocks.block19smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block19styles: {
                            display: blocks.block19mddis
                        }
                    }
                }),
                block20styles: _nestingstyles2.default.create({
                    block20styles: {
                        display: 'flex',
                        flex: blocks.block20,
                        flexDirection: blocks.block20Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock20,
                        borderLeft: blocks.block20BorderLeft,
                        borderRight: blocks.block20BorderRight,
                        borderTop: blocks.block20BorderTop,
                        borderBottom: blocks.block20BorderBottom,
                        border: blocks.b20Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock20
                    },
                    '@media screen and (max-width: 768px)': {
                        block20styles: {
                            display: blocks.block20smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block20styles: {
                            display: blocks.block20mddis
                        }
                    }
                }),
                block21styles: _nestingstyles2.default.create({
                    block21styles: {
                        display: 'flex',
                        flex: blocks.block21,
                        flexDirection: blocks.block21Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock21,
                        borderLeft: blocks.block21BorderLeft,
                        borderRight: blocks.block21BorderRight,
                        borderTop: blocks.block21BorderTop,
                        borderBottom: blocks.block21BorderBottom,
                        border: blocks.b21Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock21
                    },
                    '@media screen and (max-width: 768px)': {
                        block21styles: {
                            display: blocks.block21smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block21styles: {
                            display: blocks.block21mddis
                        }
                    }
                }),
                block22styles: _nestingstyles2.default.create({
                    block22styles: {
                        display: 'flex',
                        flex: blocks.block22,
                        flexDirection: blocks.block22Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock22,
                        borderLeft: blocks.block22BorderLeft,
                        borderRight: blocks.block22BorderRight,
                        borderTop: blocks.block22BorderTop,
                        borderBottom: blocks.block22BorderBottom,
                        border: blocks.b22Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock22
                    },
                    '@media screen and (max-width: 768px)': {
                        block22styles: {
                            display: blocks.block22smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block22styles: {
                            display: blocks.block22mddis
                        }
                    }
                }),
                block23styles: _nestingstyles2.default.create({
                    block23styles: {
                        display: 'flex',
                        flex: blocks.block23,
                        flexDirection: blocks.block23Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock23,
                        borderLeft: blocks.block23BorderLeft,
                        borderRight: blocks.block23BorderRight,
                        borderTop: blocks.block23BorderTop,
                        borderBottom: blocks.block23BorderBottom,
                        border: blocks.b23Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock23
                    },
                    '@media screen and (max-width: 768px)': {
                        block23styles: {
                            display: blocks.block23smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block23styles: {
                            display: blocks.block23mddis
                        }
                    }
                }),
                block24styles: _nestingstyles2.default.create({
                    block24styles: {
                        display: 'flex',
                        flex: blocks.block24,
                        flexDirection: blocks.block24Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock24,
                        borderLeft: blocks.block24BorderLeft,
                        borderRight: blocks.block24BorderRight,
                        borderTop: blocks.block24BorderTop,
                        borderBottom: blocks.block24BorderBottom,
                        border: blocks.b24Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock24
                    },
                    '@media screen and (max-width: 768px)': {
                        block24styles: {
                            display: blocks.block24smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block24styles: {
                            display: blocks.block24mddis
                        }
                    }
                }),
                block25styles: _nestingstyles2.default.create({
                    block25styles: {
                        display: 'flex',
                        flex: blocks.block25,
                        flexDirection: blocks.block25Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock25,
                        borderLeft: blocks.block25BorderLeft,
                        borderRight: blocks.block25BorderRight,
                        borderTop: blocks.block25BorderTop,
                        borderBottom: blocks.block25BorderBottom,
                        border: blocks.b25Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock25
                    },
                    '@media screen and (max-width: 768px)': {
                        block25styles: {
                            display: blocks.block25smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block25styles: {
                            display: blocks.block25mddis
                        }
                    }
                }),
                block26styles: _nestingstyles2.default.create({
                    block26styles: {
                        display: 'flex',
                        flex: blocks.block26,
                        flexDirection: blocks.block26Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock26,
                        borderLeft: blocks.block26BorderLeft,
                        borderRight: blocks.block26BorderRight,
                        borderTop: blocks.block26BorderTop,
                        borderBottom: blocks.block26BorderBottom,
                        border: blocks.b26Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock26
                    },
                    '@media screen and (max-width: 768px)': {
                        block26styles: {
                            display: blocks.block26smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block26styles: {
                            display: blocks.block26mddis
                        }
                    }
                }),
                block27styles: _nestingstyles2.default.create({
                    block27styles: {
                        display: 'flex',
                        flex: blocks.block27,
                        flexDirection: blocks.block27Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock27,
                        borderLeft: blocks.block27BorderLeft,
                        borderRight: blocks.block27BorderRight,
                        borderTop: blocks.block27BorderTop,
                        borderBottom: blocks.block27BorderBottom,
                        border: blocks.b27Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock27
                    },
                    '@media screen and (max-width: 768px)': {
                        block27styles: {
                            display: blocks.block27smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block27styles: {
                            display: blocks.block27mddis
                        }
                    }
                }),
                block28styles: _nestingstyles2.default.create({
                    block28styles: {
                        display: 'flex',
                        flex: blocks.block28,
                        flexDirection: blocks.block28Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock28,
                        borderLeft: blocks.block28BorderLeft,
                        borderRight: blocks.block28BorderRight,
                        borderTop: blocks.block28BorderTop,
                        borderBottom: blocks.block28BorderBottom,
                        border: blocks.b28Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock28
                    },
                    '@media screen and (max-width: 768px)': {
                        block28styles: {
                            display: blocks.block28smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block28styles: {
                            display: blocks.block28mddis
                        }
                    }
                }),
                block29styles: _nestingstyles2.default.create({
                    block29styles: {
                        display: 'flex',
                        flex: blocks.block29,
                        flexDirection: blocks.block29Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock29,
                        borderLeft: blocks.block29BorderLeft,
                        borderRight: blocks.block29BorderRight,
                        borderTop: blocks.block29BorderTop,
                        borderBottom: blocks.block29BorderBottom,
                        border: blocks.b29Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock29
                    },
                    '@media screen and (max-width: 768px)': {
                        block29styles: {
                            display: blocks.block29smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block29styles: {
                            display: blocks.block29mddis
                        }
                    }
                }),
                block30styles: _nestingstyles2.default.create({
                    block30styles: {
                        display: 'flex',
                        flex: blocks.block30,
                        flexDirection: blocks.block30Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock30,
                        borderLeft: blocks.block30BorderLeft,
                        borderRight: blocks.block30BorderRight,
                        borderTop: blocks.block30BorderTop,
                        borderBottom: blocks.block30BorderBottom,
                        border: blocks.b30Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock30
                    },
                    '@media screen and (max-width: 768px)': {
                        block30styles: {
                            display: blocks.block30smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block30styles: {
                            display: blocks.block30mddis
                        }
                    }
                }),
                block31styles: _nestingstyles2.default.create({
                    block31styles: {
                        display: 'flex',
                        flex: blocks.block31,
                        flexDirection: blocks.block31Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock31,
                        borderLeft: blocks.block31BorderLeft,
                        borderRight: blocks.block31BorderRight,
                        borderTop: blocks.block31BorderTop,
                        borderBottom: blocks.block31BorderBottom,
                        border: blocks.b31Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock31
                    },
                    '@media screen and (max-width: 768px)': {
                        block31styles: {
                            display: blocks.block31smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block31styles: {
                            display: blocks.block31mddis
                        }
                    }
                }),
                block32styles: _nestingstyles2.default.create({
                    block32styles: {
                        display: 'flex',
                        flex: blocks.block32,
                        flexDirection: blocks.block32Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock32,
                        borderLeft: blocks.block32BorderLeft,
                        borderRight: blocks.block32BorderRight,
                        borderTop: blocks.block32BorderTop,
                        borderBottom: blocks.block32BorderBottom,
                        border: blocks.b32Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock32
                    },
                    '@media screen and (max-width: 768px)': {
                        block32styles: {
                            display: blocks.block32smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block32styles: {
                            display: blocks.block32mddis
                        }
                    }
                })
            };
        case num = 33:
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
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
                block21Direction: props.block21direction || 'column',
                block21: props.block21 || '1',
                block21BorderLeft: props.b21BLeft,
                block21BorderRight: props.b21BRight,
                block21BorderTop: props.b21BTop,
                block21BorderBottom: props.b21BBottom,
                block21Border: props.b21Border,
                alignBlock21: props.alignBlock21 || 'center',
                justifyBlock21: props.justifyBlock21 || 'center',
                block21smdis: props.block21smdis || 'flex',
                block21mddis: props.block21mddis || 'flex',
                block22Direction: props.block22direction || 'column',
                block22: props.block22 || '1',
                block22BorderLeft: props.b22BLeft,
                block22BorderRight: props.b22BRight,
                block22BorderTop: props.b22BTop,
                block22BorderBottom: props.b22BBottom,
                block22Border: props.b22Border,
                alignBlock22: props.alignBlock22 || 'center',
                justifyBlock22: props.justifyBlock22 || 'center',
                block22smdis: props.block22smdis || 'flex',
                block22mddis: props.block22mddis || 'flex',
                block23Direction: props.block23direction || 'column',
                block23: props.block23 || '1',
                block23BorderLeft: props.b23BLeft,
                block23BorderRight: props.b23BRight,
                block23BorderTop: props.b23BTop,
                block23BorderBottom: props.b23BBottom,
                block23Border: props.b23Border,
                alignBlock23: props.alignBlock23 || 'center',
                justifyBlock23: props.justifyBlock23 || 'center',
                block23smdis: props.block23smdis || 'flex',
                block23mddis: props.block23mddis || 'flex',
                block24Direction: props.block24direction || 'column',
                block24: props.block24 || '1',
                block24BorderLeft: props.b24BLeft,
                block24BorderRight: props.b24BRight,
                block24BorderTop: props.b24BTop,
                block24BorderBottom: props.b24BBottom,
                block24Border: props.b24Border,
                alignBlock24: props.alignBlock24 || 'center',
                justifyBlock24: props.justifyBlock24 || 'center',
                block24smdis: props.block24smdis || 'flex',
                block24mddis: props.block24mddis || 'flex',
                block25Direction: props.block25direction || 'column',
                block25: props.block25 || '1',
                block25BorderLeft: props.b25BLeft,
                block25BorderRight: props.b25BRight,
                block25BorderTop: props.b25BTop,
                block25BorderBottom: props.b25BBottom,
                block25Border: props.b25Border,
                alignBlock25: props.alignBlock25 || 'center',
                justifyBlock25: props.justifyBlock25 || 'center',
                block25smdis: props.block25smdis || 'flex',
                block25mddis: props.block25mddis || 'flex',
                block26Direction: props.block26direction || 'column',
                block26: props.block26 || '1',
                block26BorderLeft: props.b26BLeft,
                block26BorderRight: props.b26BRight,
                block26BorderTop: props.b26BTop,
                block26BorderBottom: props.b26BBottom,
                block26Border: props.b26Border,
                alignBlock26: props.alignBlock26 || 'center',
                justifyBlock26: props.justifyBlock26 || 'center',
                block26smdis: props.block26smdis || 'flex',
                block26mddis: props.block26mddis || 'flex',
                block27Direction: props.block27direction || 'column',
                block27: props.block27 || '1',
                block27BorderLeft: props.b27BLeft,
                block27BorderRight: props.b27BRight,
                block27BorderTop: props.b27BTop,
                block27BorderBottom: props.b27BBottom,
                block27Border: props.b27Border,
                alignBlock27: props.alignBlock27 || 'center',
                justifyBlock27: props.justifyBlock27 || 'center',
                block27smdis: props.block27smdis || 'flex',
                block27mddis: props.block27mddis || 'flex',
                block28Direction: props.block28direction || 'column',
                block28: props.block28 || '1',
                block28BorderLeft: props.b28BLeft,
                block28BorderRight: props.b28BRight,
                block28BorderTop: props.b28BTop,
                block28BorderBottom: props.b28BBottom,
                block28Border: props.b28Border,
                alignBlock28: props.alignBlock28 || 'center',
                justifyBlock28: props.justifyBlock28 || 'center',
                block28smdis: props.block28smdis || 'flex',
                block28mddis: props.block28mddis || 'flex',
                block29Direction: props.block29direction || 'column',
                block29: props.block29 || '1',
                block29BorderLeft: props.b29BLeft,
                block29BorderRight: props.b29BRight,
                block29BorderTop: props.b29BTop,
                block29BorderBottom: props.b29BBottom,
                block29Border: props.b29Border,
                alignBlock29: props.alignBlock29 || 'center',
                justifyBlock29: props.justifyBlock29 || 'center',
                block29smdis: props.block29smdis || 'flex',
                block29mddis: props.block29mddis || 'flex',
                block30Direction: props.block30direction || 'column',
                block30: props.block30 || '1',
                block30BorderLeft: props.b30BLeft,
                block30BorderRight: props.b30BRight,
                block30BorderTop: props.b30BTop,
                block30BorderBottom: props.b30BBottom,
                block30Border: props.b30Border,
                alignBlock30: props.alignBlock30 || 'center',
                justifyBlock30: props.justifyBlock30 || 'center',
                block30smdis: props.block30smdis || 'flex',
                block30mddis: props.block30mddis || 'flex',
                block31Direction: props.block31direction || 'column',
                block31: props.block31 || '1',
                block31BorderLeft: props.b31BLeft,
                block31BorderRight: props.b31BRight,
                block31BorderTop: props.b31BTop,
                block31BorderBottom: props.b31BBottom,
                block31Border: props.b31Border,
                alignBlock31: props.alignBlock31 || 'center',
                justifyBlock31: props.justifyBlock31 || 'center',
                block31smdis: props.block31smdis || 'flex',
                block31mddis: props.block31mddis || 'flex',
                block32Direction: props.block32direction || 'column',
                block32: props.block32 || '1',
                block32BorderLeft: props.b32BLeft,
                block32BorderRight: props.b32BRight,
                block32BorderTop: props.b32BTop,
                block32BorderBottom: props.b32BBottom,
                block32Border: props.b32Border,
                alignBlock32: props.alignBlock32 || 'center',
                justifyBlock32: props.justifyBlock32 || 'center',
                block32smdis: props.block32smdis || 'flex',
                block32mddis: props.block32mddis || 'flex',
                block33Direction: props.block33direction || 'column',
                block33: props.block33 || '1',
                block33BorderLeft: props.b33BLeft,
                block33BorderRight: props.b33BRight,
                block33BorderTop: props.b33BTop,
                block33BorderBottom: props.b33BBottom,
                block33Border: props.b33Border,
                alignBlock33: props.alignBlock33 || 'center',
                justifyBlock33: props.justifyBlock33 || 'center',
                block33smdis: props.block33smdis || 'flex',
                block33mddis: props.block33mddis || 'flex'
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
                        flexDirection: blocks.block3Direction,
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
                        flexDirection: blocks.block4Direction,
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
                        flexDirection: blocks.block5Direction,
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
                        flexDirection: blocks.block6Direction,
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
                        flexDirection: blocks.block7Direction,
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
                        flexDirection: blocks.block8Direction,
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
                        flexDirection: blocks.block9Direction,
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
                        flexDirection: blocks.block10Direction,
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
                        flexDirection: blocks.block11Direction,
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
                        flexDirection: blocks.block12Direction,
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
                        flexDirection: blocks.block13Direction,
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
                        flexDirection: blocks.block14Direction,
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
                        flexDirection: blocks.block15Direction,
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
                }),
                block16styles: _nestingstyles2.default.create({
                    block16styles: {
                        display: 'flex',
                        flex: blocks.block16,
                        flexDirection: blocks.block16Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock16,
                        borderLeft: blocks.block16BorderLeft,
                        borderRight: blocks.block16BorderRight,
                        borderTop: blocks.block16BorderTop,
                        borderBottom: blocks.block16BorderBottom,
                        border: blocks.b16Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock16
                    },
                    '@media screen and (max-width: 768px)': {
                        block16styles: {
                            display: blocks.block16smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block16styles: {
                            display: blocks.block16mddis
                        }
                    }
                }),
                block17styles: _nestingstyles2.default.create({
                    block17styles: {
                        display: 'flex',
                        flex: blocks.block17,
                        flexDirection: blocks.block17Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock17,
                        borderLeft: blocks.block17BorderLeft,
                        borderRight: blocks.block17BorderRight,
                        borderTop: blocks.block17BorderTop,
                        borderBottom: blocks.block17BorderBottom,
                        border: blocks.b17Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock17
                    },
                    '@media screen and (max-width: 768px)': {
                        block17styles: {
                            display: blocks.block17smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block17styles: {
                            display: blocks.block17mddis
                        }
                    }
                }),
                block18styles: _nestingstyles2.default.create({
                    block18styles: {
                        display: 'flex',
                        flex: blocks.block18,
                        flexDirection: blocks.block18Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock18,
                        borderLeft: blocks.block18BorderLeft,
                        borderRight: blocks.block18BorderRight,
                        borderTop: blocks.block18BorderTop,
                        borderBottom: blocks.block18BorderBottom,
                        border: blocks.b18Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock18
                    },
                    '@media screen and (max-width: 768px)': {
                        block18styles: {
                            display: blocks.block18smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block18styles: {
                            display: blocks.block18mddis
                        }
                    }
                }),
                block19styles: _nestingstyles2.default.create({
                    block19styles: {
                        display: 'flex',
                        flex: blocks.block19,
                        flexDirection: blocks.block19Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock19,
                        borderLeft: blocks.block19BorderLeft,
                        borderRight: blocks.block19BorderRight,
                        borderTop: blocks.block19BorderTop,
                        borderBottom: blocks.block19BorderBottom,
                        border: blocks.b19Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock19
                    },
                    '@media screen and (max-width: 768px)': {
                        block19styles: {
                            display: blocks.block19smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block19styles: {
                            display: blocks.block19mddis
                        }
                    }
                }),
                block20styles: _nestingstyles2.default.create({
                    block20styles: {
                        display: 'flex',
                        flex: blocks.block20,
                        flexDirection: blocks.block20Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock20,
                        borderLeft: blocks.block20BorderLeft,
                        borderRight: blocks.block20BorderRight,
                        borderTop: blocks.block20BorderTop,
                        borderBottom: blocks.block20BorderBottom,
                        border: blocks.b20Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock20
                    },
                    '@media screen and (max-width: 768px)': {
                        block20styles: {
                            display: blocks.block20smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block20styles: {
                            display: blocks.block20mddis
                        }
                    }
                }),
                block21styles: _nestingstyles2.default.create({
                    block21styles: {
                        display: 'flex',
                        flex: blocks.block21,
                        flexDirection: blocks.block21Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock21,
                        borderLeft: blocks.block21BorderLeft,
                        borderRight: blocks.block21BorderRight,
                        borderTop: blocks.block21BorderTop,
                        borderBottom: blocks.block21BorderBottom,
                        border: blocks.b21Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock21
                    },
                    '@media screen and (max-width: 768px)': {
                        block21styles: {
                            display: blocks.block21smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block21styles: {
                            display: blocks.block21mddis
                        }
                    }
                }),
                block22styles: _nestingstyles2.default.create({
                    block22styles: {
                        display: 'flex',
                        flex: blocks.block22,
                        flexDirection: blocks.block22Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock22,
                        borderLeft: blocks.block22BorderLeft,
                        borderRight: blocks.block22BorderRight,
                        borderTop: blocks.block22BorderTop,
                        borderBottom: blocks.block22BorderBottom,
                        border: blocks.b22Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock22
                    },
                    '@media screen and (max-width: 768px)': {
                        block22styles: {
                            display: blocks.block22smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block22styles: {
                            display: blocks.block22mddis
                        }
                    }
                }),
                block23styles: _nestingstyles2.default.create({
                    block23styles: {
                        display: 'flex',
                        flex: blocks.block23,
                        flexDirection: blocks.block23Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock23,
                        borderLeft: blocks.block23BorderLeft,
                        borderRight: blocks.block23BorderRight,
                        borderTop: blocks.block23BorderTop,
                        borderBottom: blocks.block23BorderBottom,
                        border: blocks.b23Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock23
                    },
                    '@media screen and (max-width: 768px)': {
                        block23styles: {
                            display: blocks.block23smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block23styles: {
                            display: blocks.block23mddis
                        }
                    }
                }),
                block24styles: _nestingstyles2.default.create({
                    block24styles: {
                        display: 'flex',
                        flex: blocks.block24,
                        flexDirection: blocks.block24Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock24,
                        borderLeft: blocks.block24BorderLeft,
                        borderRight: blocks.block24BorderRight,
                        borderTop: blocks.block24BorderTop,
                        borderBottom: blocks.block24BorderBottom,
                        border: blocks.b24Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock24
                    },
                    '@media screen and (max-width: 768px)': {
                        block24styles: {
                            display: blocks.block24smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block24styles: {
                            display: blocks.block24mddis
                        }
                    }
                }),
                block25styles: _nestingstyles2.default.create({
                    block25styles: {
                        display: 'flex',
                        flex: blocks.block25,
                        flexDirection: blocks.block25Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock25,
                        borderLeft: blocks.block25BorderLeft,
                        borderRight: blocks.block25BorderRight,
                        borderTop: blocks.block25BorderTop,
                        borderBottom: blocks.block25BorderBottom,
                        border: blocks.b25Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock25
                    },
                    '@media screen and (max-width: 768px)': {
                        block25styles: {
                            display: blocks.block25smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block25styles: {
                            display: blocks.block25mddis
                        }
                    }
                }),
                block26styles: _nestingstyles2.default.create({
                    block26styles: {
                        display: 'flex',
                        flex: blocks.block26,
                        flexDirection: blocks.block26Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock26,
                        borderLeft: blocks.block26BorderLeft,
                        borderRight: blocks.block26BorderRight,
                        borderTop: blocks.block26BorderTop,
                        borderBottom: blocks.block26BorderBottom,
                        border: blocks.b26Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock26
                    },
                    '@media screen and (max-width: 768px)': {
                        block26styles: {
                            display: blocks.block26smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block26styles: {
                            display: blocks.block26mddis
                        }
                    }
                }),
                block27styles: _nestingstyles2.default.create({
                    block27styles: {
                        display: 'flex',
                        flex: blocks.block27,
                        flexDirection: blocks.block27Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock27,
                        borderLeft: blocks.block27BorderLeft,
                        borderRight: blocks.block27BorderRight,
                        borderTop: blocks.block27BorderTop,
                        borderBottom: blocks.block27BorderBottom,
                        border: blocks.b27Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock27
                    },
                    '@media screen and (max-width: 768px)': {
                        block27styles: {
                            display: blocks.block27smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block27styles: {
                            display: blocks.block27mddis
                        }
                    }
                }),
                block28styles: _nestingstyles2.default.create({
                    block28styles: {
                        display: 'flex',
                        flex: blocks.block28,
                        flexDirection: blocks.block28Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock28,
                        borderLeft: blocks.block28BorderLeft,
                        borderRight: blocks.block28BorderRight,
                        borderTop: blocks.block28BorderTop,
                        borderBottom: blocks.block28BorderBottom,
                        border: blocks.b28Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock28
                    },
                    '@media screen and (max-width: 768px)': {
                        block28styles: {
                            display: blocks.block28smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block28styles: {
                            display: blocks.block28mddis
                        }
                    }
                }),
                block29styles: _nestingstyles2.default.create({
                    block29styles: {
                        display: 'flex',
                        flex: blocks.block29,
                        flexDirection: blocks.block29Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock29,
                        borderLeft: blocks.block29BorderLeft,
                        borderRight: blocks.block29BorderRight,
                        borderTop: blocks.block29BorderTop,
                        borderBottom: blocks.block29BorderBottom,
                        border: blocks.b29Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock29
                    },
                    '@media screen and (max-width: 768px)': {
                        block29styles: {
                            display: blocks.block29smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block29styles: {
                            display: blocks.block29mddis
                        }
                    }
                }),
                block30styles: _nestingstyles2.default.create({
                    block30styles: {
                        display: 'flex',
                        flex: blocks.block30,
                        flexDirection: blocks.block30Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock30,
                        borderLeft: blocks.block30BorderLeft,
                        borderRight: blocks.block30BorderRight,
                        borderTop: blocks.block30BorderTop,
                        borderBottom: blocks.block30BorderBottom,
                        border: blocks.b30Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock30
                    },
                    '@media screen and (max-width: 768px)': {
                        block30styles: {
                            display: blocks.block30smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block30styles: {
                            display: blocks.block30mddis
                        }
                    }
                }),
                block31styles: _nestingstyles2.default.create({
                    block31styles: {
                        display: 'flex',
                        flex: blocks.block31,
                        flexDirection: blocks.block31Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock31,
                        borderLeft: blocks.block31BorderLeft,
                        borderRight: blocks.block31BorderRight,
                        borderTop: blocks.block31BorderTop,
                        borderBottom: blocks.block31BorderBottom,
                        border: blocks.b31Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock31
                    },
                    '@media screen and (max-width: 768px)': {
                        block31styles: {
                            display: blocks.block31smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block31styles: {
                            display: blocks.block31mddis
                        }
                    }
                }),
                block32styles: _nestingstyles2.default.create({
                    block32styles: {
                        display: 'flex',
                        flex: blocks.block32,
                        flexDirection: blocks.block32Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock32,
                        borderLeft: blocks.block32BorderLeft,
                        borderRight: blocks.block32BorderRight,
                        borderTop: blocks.block32BorderTop,
                        borderBottom: blocks.block32BorderBottom,
                        border: blocks.b32Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock32
                    },
                    '@media screen and (max-width: 768px)': {
                        block32styles: {
                            display: blocks.block32smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block32styles: {
                            display: blocks.block32mddis
                        }
                    }
                }),
                block33styles: _nestingstyles2.default.create({
                    block33styles: {
                        display: 'flex',
                        flex: blocks.block33,
                        flexDirection: blocks.block33Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock33,
                        borderLeft: blocks.block33BorderLeft,
                        borderRight: blocks.block33BorderRight,
                        borderTop: blocks.block33BorderTop,
                        borderBottom: blocks.block33BorderBottom,
                        border: blocks.b33Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock33
                    },
                    '@media screen and (max-width: 768px)': {
                        block33styles: {
                            display: blocks.block33smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block33styles: {
                            display: blocks.block33mddis
                        }
                    }
                })
            };
        case num = 34:
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
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
                block21Direction: props.block21direction || 'column',
                block21: props.block21 || '1',
                block21BorderLeft: props.b21BLeft,
                block21BorderRight: props.b21BRight,
                block21BorderTop: props.b21BTop,
                block21BorderBottom: props.b21BBottom,
                block21Border: props.b21Border,
                alignBlock21: props.alignBlock21 || 'center',
                justifyBlock21: props.justifyBlock21 || 'center',
                block21smdis: props.block21smdis || 'flex',
                block21mddis: props.block21mddis || 'flex',
                block22Direction: props.block22direction || 'column',
                block22: props.block22 || '1',
                block22BorderLeft: props.b22BLeft,
                block22BorderRight: props.b22BRight,
                block22BorderTop: props.b22BTop,
                block22BorderBottom: props.b22BBottom,
                block22Border: props.b22Border,
                alignBlock22: props.alignBlock22 || 'center',
                justifyBlock22: props.justifyBlock22 || 'center',
                block22smdis: props.block22smdis || 'flex',
                block22mddis: props.block22mddis || 'flex',
                block23Direction: props.block23direction || 'column',
                block23: props.block23 || '1',
                block23BorderLeft: props.b23BLeft,
                block23BorderRight: props.b23BRight,
                block23BorderTop: props.b23BTop,
                block23BorderBottom: props.b23BBottom,
                block23Border: props.b23Border,
                alignBlock23: props.alignBlock23 || 'center',
                justifyBlock23: props.justifyBlock23 || 'center',
                block23smdis: props.block23smdis || 'flex',
                block23mddis: props.block23mddis || 'flex',
                block24Direction: props.block24direction || 'column',
                block24: props.block24 || '1',
                block24BorderLeft: props.b24BLeft,
                block24BorderRight: props.b24BRight,
                block24BorderTop: props.b24BTop,
                block24BorderBottom: props.b24BBottom,
                block24Border: props.b24Border,
                alignBlock24: props.alignBlock24 || 'center',
                justifyBlock24: props.justifyBlock24 || 'center',
                block24smdis: props.block24smdis || 'flex',
                block24mddis: props.block24mddis || 'flex',
                block25Direction: props.block25direction || 'column',
                block25: props.block25 || '1',
                block25BorderLeft: props.b25BLeft,
                block25BorderRight: props.b25BRight,
                block25BorderTop: props.b25BTop,
                block25BorderBottom: props.b25BBottom,
                block25Border: props.b25Border,
                alignBlock25: props.alignBlock25 || 'center',
                justifyBlock25: props.justifyBlock25 || 'center',
                block25smdis: props.block25smdis || 'flex',
                block25mddis: props.block25mddis || 'flex',
                block26Direction: props.block26direction || 'column',
                block26: props.block26 || '1',
                block26BorderLeft: props.b26BLeft,
                block26BorderRight: props.b26BRight,
                block26BorderTop: props.b26BTop,
                block26BorderBottom: props.b26BBottom,
                block26Border: props.b26Border,
                alignBlock26: props.alignBlock26 || 'center',
                justifyBlock26: props.justifyBlock26 || 'center',
                block26smdis: props.block26smdis || 'flex',
                block26mddis: props.block26mddis || 'flex',
                block27Direction: props.block27direction || 'column',
                block27: props.block27 || '1',
                block27BorderLeft: props.b27BLeft,
                block27BorderRight: props.b27BRight,
                block27BorderTop: props.b27BTop,
                block27BorderBottom: props.b27BBottom,
                block27Border: props.b27Border,
                alignBlock27: props.alignBlock27 || 'center',
                justifyBlock27: props.justifyBlock27 || 'center',
                block27smdis: props.block27smdis || 'flex',
                block27mddis: props.block27mddis || 'flex',
                block28Direction: props.block28direction || 'column',
                block28: props.block28 || '1',
                block28BorderLeft: props.b28BLeft,
                block28BorderRight: props.b28BRight,
                block28BorderTop: props.b28BTop,
                block28BorderBottom: props.b28BBottom,
                block28Border: props.b28Border,
                alignBlock28: props.alignBlock28 || 'center',
                justifyBlock28: props.justifyBlock28 || 'center',
                block28smdis: props.block28smdis || 'flex',
                block28mddis: props.block28mddis || 'flex',
                block29Direction: props.block29direction || 'column',
                block29: props.block29 || '1',
                block29BorderLeft: props.b29BLeft,
                block29BorderRight: props.b29BRight,
                block29BorderTop: props.b29BTop,
                block29BorderBottom: props.b29BBottom,
                block29Border: props.b29Border,
                alignBlock29: props.alignBlock29 || 'center',
                justifyBlock29: props.justifyBlock29 || 'center',
                block29smdis: props.block29smdis || 'flex',
                block29mddis: props.block29mddis || 'flex',
                block30Direction: props.block30direction || 'column',
                block30: props.block30 || '1',
                block30BorderLeft: props.b30BLeft,
                block30BorderRight: props.b30BRight,
                block30BorderTop: props.b30BTop,
                block30BorderBottom: props.b30BBottom,
                block30Border: props.b30Border,
                alignBlock30: props.alignBlock30 || 'center',
                justifyBlock30: props.justifyBlock30 || 'center',
                block30smdis: props.block30smdis || 'flex',
                block30mddis: props.block30mddis || 'flex',
                block31Direction: props.block31direction || 'column',
                block31: props.block31 || '1',
                block31BorderLeft: props.b31BLeft,
                block31BorderRight: props.b31BRight,
                block31BorderTop: props.b31BTop,
                block31BorderBottom: props.b31BBottom,
                block31Border: props.b31Border,
                alignBlock31: props.alignBlock31 || 'center',
                justifyBlock31: props.justifyBlock31 || 'center',
                block31smdis: props.block31smdis || 'flex',
                block31mddis: props.block31mddis || 'flex',
                block32Direction: props.block32direction || 'column',
                block32: props.block32 || '1',
                block32BorderLeft: props.b32BLeft,
                block32BorderRight: props.b32BRight,
                block32BorderTop: props.b32BTop,
                block32BorderBottom: props.b32BBottom,
                block32Border: props.b32Border,
                alignBlock32: props.alignBlock32 || 'center',
                justifyBlock32: props.justifyBlock32 || 'center',
                block32smdis: props.block32smdis || 'flex',
                block32mddis: props.block32mddis || 'flex',
                block33Direction: props.block33direction || 'column',
                block33: props.block33 || '1',
                block33BorderLeft: props.b33BLeft,
                block33BorderRight: props.b33BRight,
                block33BorderTop: props.b33BTop,
                block33BorderBottom: props.b33BBottom,
                block33Border: props.b33Border,
                alignBlock33: props.alignBlock33 || 'center',
                justifyBlock33: props.justifyBlock33 || 'center',
                block33smdis: props.block33smdis || 'flex',
                block33mddis: props.block33mddis || 'flex',
                block34Direction: props.block34direction || 'column',
                block34: props.block34 || '1',
                block34BorderLeft: props.b34BLeft,
                block34BorderRight: props.b34BRight,
                block34BorderTop: props.b34BTop,
                block34BorderBottom: props.b34BBottom,
                block34Border: props.b34Border,
                alignBlock34: props.alignBlock34 || 'center',
                justifyBlock34: props.justifyBlock34 || 'center',
                block34smdis: props.block34smdis || 'flex',
                block34mddis: props.block34mddis || 'flex'
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
                        flexDirection: blocks.block3Direction,
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
                        flexDirection: blocks.block4Direction,
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
                        flexDirection: blocks.block5Direction,
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
                        flexDirection: blocks.block6Direction,
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
                        flexDirection: blocks.block7Direction,
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
                        flexDirection: blocks.block8Direction,
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
                        flexDirection: blocks.block9Direction,
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
                        flexDirection: blocks.block10Direction,
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
                        flexDirection: blocks.block11Direction,
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
                        flexDirection: blocks.block12Direction,
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
                        flexDirection: blocks.block13Direction,
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
                        flexDirection: blocks.block14Direction,
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
                        flexDirection: blocks.block15Direction,
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
                }),
                block16styles: _nestingstyles2.default.create({
                    block16styles: {
                        display: 'flex',
                        flex: blocks.block16,
                        flexDirection: blocks.block16Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock16,
                        borderLeft: blocks.block16BorderLeft,
                        borderRight: blocks.block16BorderRight,
                        borderTop: blocks.block16BorderTop,
                        borderBottom: blocks.block16BorderBottom,
                        border: blocks.b16Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock16
                    },
                    '@media screen and (max-width: 768px)': {
                        block16styles: {
                            display: blocks.block16smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block16styles: {
                            display: blocks.block16mddis
                        }
                    }
                }),
                block17styles: _nestingstyles2.default.create({
                    block17styles: {
                        display: 'flex',
                        flex: blocks.block17,
                        flexDirection: blocks.block17Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock17,
                        borderLeft: blocks.block17BorderLeft,
                        borderRight: blocks.block17BorderRight,
                        borderTop: blocks.block17BorderTop,
                        borderBottom: blocks.block17BorderBottom,
                        border: blocks.b17Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock17
                    },
                    '@media screen and (max-width: 768px)': {
                        block17styles: {
                            display: blocks.block17smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block17styles: {
                            display: blocks.block17mddis
                        }
                    }
                }),
                block18styles: _nestingstyles2.default.create({
                    block18styles: {
                        display: 'flex',
                        flex: blocks.block18,
                        flexDirection: blocks.block18Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock18,
                        borderLeft: blocks.block18BorderLeft,
                        borderRight: blocks.block18BorderRight,
                        borderTop: blocks.block18BorderTop,
                        borderBottom: blocks.block18BorderBottom,
                        border: blocks.b18Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock18
                    },
                    '@media screen and (max-width: 768px)': {
                        block18styles: {
                            display: blocks.block18smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block18styles: {
                            display: blocks.block18mddis
                        }
                    }
                }),
                block19styles: _nestingstyles2.default.create({
                    block19styles: {
                        display: 'flex',
                        flex: blocks.block19,
                        flexDirection: blocks.block19Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock19,
                        borderLeft: blocks.block19BorderLeft,
                        borderRight: blocks.block19BorderRight,
                        borderTop: blocks.block19BorderTop,
                        borderBottom: blocks.block19BorderBottom,
                        border: blocks.b19Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock19
                    },
                    '@media screen and (max-width: 768px)': {
                        block19styles: {
                            display: blocks.block19smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block19styles: {
                            display: blocks.block19mddis
                        }
                    }
                }),
                block20styles: _nestingstyles2.default.create({
                    block20styles: {
                        display: 'flex',
                        flex: blocks.block20,
                        flexDirection: blocks.block20Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock20,
                        borderLeft: blocks.block20BorderLeft,
                        borderRight: blocks.block20BorderRight,
                        borderTop: blocks.block20BorderTop,
                        borderBottom: blocks.block20BorderBottom,
                        border: blocks.b20Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock20
                    },
                    '@media screen and (max-width: 768px)': {
                        block20styles: {
                            display: blocks.block20smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block20styles: {
                            display: blocks.block20mddis
                        }
                    }
                }),
                block21styles: _nestingstyles2.default.create({
                    block21styles: {
                        display: 'flex',
                        flex: blocks.block21,
                        flexDirection: blocks.block21Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock21,
                        borderLeft: blocks.block21BorderLeft,
                        borderRight: blocks.block21BorderRight,
                        borderTop: blocks.block21BorderTop,
                        borderBottom: blocks.block21BorderBottom,
                        border: blocks.b21Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock21
                    },
                    '@media screen and (max-width: 768px)': {
                        block21styles: {
                            display: blocks.block21smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block21styles: {
                            display: blocks.block21mddis
                        }
                    }
                }),
                block22styles: _nestingstyles2.default.create({
                    block22styles: {
                        display: 'flex',
                        flex: blocks.block22,
                        flexDirection: blocks.block22Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock22,
                        borderLeft: blocks.block22BorderLeft,
                        borderRight: blocks.block22BorderRight,
                        borderTop: blocks.block22BorderTop,
                        borderBottom: blocks.block22BorderBottom,
                        border: blocks.b22Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock22
                    },
                    '@media screen and (max-width: 768px)': {
                        block22styles: {
                            display: blocks.block22smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block22styles: {
                            display: blocks.block22mddis
                        }
                    }
                }),
                block23styles: _nestingstyles2.default.create({
                    block23styles: {
                        display: 'flex',
                        flex: blocks.block23,
                        flexDirection: blocks.block23Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock23,
                        borderLeft: blocks.block23BorderLeft,
                        borderRight: blocks.block23BorderRight,
                        borderTop: blocks.block23BorderTop,
                        borderBottom: blocks.block23BorderBottom,
                        border: blocks.b23Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock23
                    },
                    '@media screen and (max-width: 768px)': {
                        block23styles: {
                            display: blocks.block23smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block23styles: {
                            display: blocks.block23mddis
                        }
                    }
                }),
                block24styles: _nestingstyles2.default.create({
                    block24styles: {
                        display: 'flex',
                        flex: blocks.block24,
                        flexDirection: blocks.block24Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock24,
                        borderLeft: blocks.block24BorderLeft,
                        borderRight: blocks.block24BorderRight,
                        borderTop: blocks.block24BorderTop,
                        borderBottom: blocks.block24BorderBottom,
                        border: blocks.b24Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock24
                    },
                    '@media screen and (max-width: 768px)': {
                        block24styles: {
                            display: blocks.block24smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block24styles: {
                            display: blocks.block24mddis
                        }
                    }
                }),
                block25styles: _nestingstyles2.default.create({
                    block25styles: {
                        display: 'flex',
                        flex: blocks.block25,
                        flexDirection: blocks.block25Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock25,
                        borderLeft: blocks.block25BorderLeft,
                        borderRight: blocks.block25BorderRight,
                        borderTop: blocks.block25BorderTop,
                        borderBottom: blocks.block25BorderBottom,
                        border: blocks.b25Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock25
                    },
                    '@media screen and (max-width: 768px)': {
                        block25styles: {
                            display: blocks.block25smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block25styles: {
                            display: blocks.block25mddis
                        }
                    }
                }),
                block26styles: _nestingstyles2.default.create({
                    block26styles: {
                        display: 'flex',
                        flex: blocks.block26,
                        flexDirection: blocks.block26Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock26,
                        borderLeft: blocks.block26BorderLeft,
                        borderRight: blocks.block26BorderRight,
                        borderTop: blocks.block26BorderTop,
                        borderBottom: blocks.block26BorderBottom,
                        border: blocks.b26Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock26
                    },
                    '@media screen and (max-width: 768px)': {
                        block26styles: {
                            display: blocks.block26smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block26styles: {
                            display: blocks.block26mddis
                        }
                    }
                }),
                block27styles: _nestingstyles2.default.create({
                    block27styles: {
                        display: 'flex',
                        flex: blocks.block27,
                        flexDirection: blocks.block27Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock27,
                        borderLeft: blocks.block27BorderLeft,
                        borderRight: blocks.block27BorderRight,
                        borderTop: blocks.block27BorderTop,
                        borderBottom: blocks.block27BorderBottom,
                        border: blocks.b27Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock27
                    },
                    '@media screen and (max-width: 768px)': {
                        block27styles: {
                            display: blocks.block27smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block27styles: {
                            display: blocks.block27mddis
                        }
                    }
                }),
                block28styles: _nestingstyles2.default.create({
                    block28styles: {
                        display: 'flex',
                        flex: blocks.block28,
                        flexDirection: blocks.block28Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock28,
                        borderLeft: blocks.block28BorderLeft,
                        borderRight: blocks.block28BorderRight,
                        borderTop: blocks.block28BorderTop,
                        borderBottom: blocks.block28BorderBottom,
                        border: blocks.b28Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock28
                    },
                    '@media screen and (max-width: 768px)': {
                        block28styles: {
                            display: blocks.block28smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block28styles: {
                            display: blocks.block28mddis
                        }
                    }
                }),
                block29styles: _nestingstyles2.default.create({
                    block29styles: {
                        display: 'flex',
                        flex: blocks.block29,
                        flexDirection: blocks.block29Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock29,
                        borderLeft: blocks.block29BorderLeft,
                        borderRight: blocks.block29BorderRight,
                        borderTop: blocks.block29BorderTop,
                        borderBottom: blocks.block29BorderBottom,
                        border: blocks.b29Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock29
                    },
                    '@media screen and (max-width: 768px)': {
                        block29styles: {
                            display: blocks.block29smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block29styles: {
                            display: blocks.block29mddis
                        }
                    }
                }),
                block30styles: _nestingstyles2.default.create({
                    block30styles: {
                        display: 'flex',
                        flex: blocks.block30,
                        flexDirection: blocks.block30Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock30,
                        borderLeft: blocks.block30BorderLeft,
                        borderRight: blocks.block30BorderRight,
                        borderTop: blocks.block30BorderTop,
                        borderBottom: blocks.block30BorderBottom,
                        border: blocks.b30Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock30
                    },
                    '@media screen and (max-width: 768px)': {
                        block30styles: {
                            display: blocks.block30smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block30styles: {
                            display: blocks.block30mddis
                        }
                    }
                }),
                block31styles: _nestingstyles2.default.create({
                    block31styles: {
                        display: 'flex',
                        flex: blocks.block31,
                        flexDirection: blocks.block31Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock31,
                        borderLeft: blocks.block31BorderLeft,
                        borderRight: blocks.block31BorderRight,
                        borderTop: blocks.block31BorderTop,
                        borderBottom: blocks.block31BorderBottom,
                        border: blocks.b31Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock31
                    },
                    '@media screen and (max-width: 768px)': {
                        block31styles: {
                            display: blocks.block31smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block31styles: {
                            display: blocks.block31mddis
                        }
                    }
                }),
                block32styles: _nestingstyles2.default.create({
                    block32styles: {
                        display: 'flex',
                        flex: blocks.block32,
                        flexDirection: blocks.block32Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock32,
                        borderLeft: blocks.block32BorderLeft,
                        borderRight: blocks.block32BorderRight,
                        borderTop: blocks.block32BorderTop,
                        borderBottom: blocks.block32BorderBottom,
                        border: blocks.b32Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock32
                    },
                    '@media screen and (max-width: 768px)': {
                        block32styles: {
                            display: blocks.block32smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block32styles: {
                            display: blocks.block32mddis
                        }
                    }
                }),
                block33styles: _nestingstyles2.default.create({
                    block33styles: {
                        display: 'flex',
                        flex: blocks.block33,
                        flexDirection: blocks.block33Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock33,
                        borderLeft: blocks.block33BorderLeft,
                        borderRight: blocks.block33BorderRight,
                        borderTop: blocks.block33BorderTop,
                        borderBottom: blocks.block33BorderBottom,
                        border: blocks.b33Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock33
                    },
                    '@media screen and (max-width: 768px)': {
                        block33styles: {
                            display: blocks.block33smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block33styles: {
                            display: blocks.block33mddis
                        }
                    }
                }),
                block34styles: _nestingstyles2.default.create({
                    block34styles: {
                        display: 'flex',
                        flex: blocks.block34,
                        flexDirection: blocks.block34Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock34,
                        borderLeft: blocks.block34BorderLeft,
                        borderRight: blocks.block34BorderRight,
                        borderTop: blocks.block34BorderTop,
                        borderBottom: blocks.block34BorderBottom,
                        border: blocks.b34Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock34
                    },
                    '@media screen and (max-width: 768px)': {
                        block34styles: {
                            display: blocks.block34smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block34styles: {
                            display: blocks.block34mddis
                        }
                    }
                })
            };
        case num = 35:
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
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
                block21Direction: props.block21direction || 'column',
                block21: props.block21 || '1',
                block21BorderLeft: props.b21BLeft,
                block21BorderRight: props.b21BRight,
                block21BorderTop: props.b21BTop,
                block21BorderBottom: props.b21BBottom,
                block21Border: props.b21Border,
                alignBlock21: props.alignBlock21 || 'center',
                justifyBlock21: props.justifyBlock21 || 'center',
                block21smdis: props.block21smdis || 'flex',
                block21mddis: props.block21mddis || 'flex',
                block22Direction: props.block22direction || 'column',
                block22: props.block22 || '1',
                block22BorderLeft: props.b22BLeft,
                block22BorderRight: props.b22BRight,
                block22BorderTop: props.b22BTop,
                block22BorderBottom: props.b22BBottom,
                block22Border: props.b22Border,
                alignBlock22: props.alignBlock22 || 'center',
                justifyBlock22: props.justifyBlock22 || 'center',
                block22smdis: props.block22smdis || 'flex',
                block22mddis: props.block22mddis || 'flex',
                block23Direction: props.block23direction || 'column',
                block23: props.block23 || '1',
                block23BorderLeft: props.b23BLeft,
                block23BorderRight: props.b23BRight,
                block23BorderTop: props.b23BTop,
                block23BorderBottom: props.b23BBottom,
                block23Border: props.b23Border,
                alignBlock23: props.alignBlock23 || 'center',
                justifyBlock23: props.justifyBlock23 || 'center',
                block23smdis: props.block23smdis || 'flex',
                block23mddis: props.block23mddis || 'flex',
                block24Direction: props.block24direction || 'column',
                block24: props.block24 || '1',
                block24BorderLeft: props.b24BLeft,
                block24BorderRight: props.b24BRight,
                block24BorderTop: props.b24BTop,
                block24BorderBottom: props.b24BBottom,
                block24Border: props.b24Border,
                alignBlock24: props.alignBlock24 || 'center',
                justifyBlock24: props.justifyBlock24 || 'center',
                block24smdis: props.block24smdis || 'flex',
                block24mddis: props.block24mddis || 'flex',
                block25Direction: props.block25direction || 'column',
                block25: props.block25 || '1',
                block25BorderLeft: props.b25BLeft,
                block25BorderRight: props.b25BRight,
                block25BorderTop: props.b25BTop,
                block25BorderBottom: props.b25BBottom,
                block25Border: props.b25Border,
                alignBlock25: props.alignBlock25 || 'center',
                justifyBlock25: props.justifyBlock25 || 'center',
                block25smdis: props.block25smdis || 'flex',
                block25mddis: props.block25mddis || 'flex',
                block26Direction: props.block26direction || 'column',
                block26: props.block26 || '1',
                block26BorderLeft: props.b26BLeft,
                block26BorderRight: props.b26BRight,
                block26BorderTop: props.b26BTop,
                block26BorderBottom: props.b26BBottom,
                block26Border: props.b26Border,
                alignBlock26: props.alignBlock26 || 'center',
                justifyBlock26: props.justifyBlock26 || 'center',
                block26smdis: props.block26smdis || 'flex',
                block26mddis: props.block26mddis || 'flex',
                block27Direction: props.block27direction || 'column',
                block27: props.block27 || '1',
                block27BorderLeft: props.b27BLeft,
                block27BorderRight: props.b27BRight,
                block27BorderTop: props.b27BTop,
                block27BorderBottom: props.b27BBottom,
                block27Border: props.b27Border,
                alignBlock27: props.alignBlock27 || 'center',
                justifyBlock27: props.justifyBlock27 || 'center',
                block27smdis: props.block27smdis || 'flex',
                block27mddis: props.block27mddis || 'flex',
                block28Direction: props.block28direction || 'column',
                block28: props.block28 || '1',
                block28BorderLeft: props.b28BLeft,
                block28BorderRight: props.b28BRight,
                block28BorderTop: props.b28BTop,
                block28BorderBottom: props.b28BBottom,
                block28Border: props.b28Border,
                alignBlock28: props.alignBlock28 || 'center',
                justifyBlock28: props.justifyBlock28 || 'center',
                block28smdis: props.block28smdis || 'flex',
                block28mddis: props.block28mddis || 'flex',
                block29Direction: props.block29direction || 'column',
                block29: props.block29 || '1',
                block29BorderLeft: props.b29BLeft,
                block29BorderRight: props.b29BRight,
                block29BorderTop: props.b29BTop,
                block29BorderBottom: props.b29BBottom,
                block29Border: props.b29Border,
                alignBlock29: props.alignBlock29 || 'center',
                justifyBlock29: props.justifyBlock29 || 'center',
                block29smdis: props.block29smdis || 'flex',
                block29mddis: props.block29mddis || 'flex',
                block30Direction: props.block30direction || 'column',
                block30: props.block30 || '1',
                block30BorderLeft: props.b30BLeft,
                block30BorderRight: props.b30BRight,
                block30BorderTop: props.b30BTop,
                block30BorderBottom: props.b30BBottom,
                block30Border: props.b30Border,
                alignBlock30: props.alignBlock30 || 'center',
                justifyBlock30: props.justifyBlock30 || 'center',
                block30smdis: props.block30smdis || 'flex',
                block30mddis: props.block30mddis || 'flex',
                block31Direction: props.block31direction || 'column',
                block31: props.block31 || '1',
                block31BorderLeft: props.b31BLeft,
                block31BorderRight: props.b31BRight,
                block31BorderTop: props.b31BTop,
                block31BorderBottom: props.b31BBottom,
                block31Border: props.b31Border,
                alignBlock31: props.alignBlock31 || 'center',
                justifyBlock31: props.justifyBlock31 || 'center',
                block31smdis: props.block31smdis || 'flex',
                block31mddis: props.block31mddis || 'flex',
                block32Direction: props.block32direction || 'column',
                block32: props.block32 || '1',
                block32BorderLeft: props.b32BLeft,
                block32BorderRight: props.b32BRight,
                block32BorderTop: props.b32BTop,
                block32BorderBottom: props.b32BBottom,
                block32Border: props.b32Border,
                alignBlock32: props.alignBlock32 || 'center',
                justifyBlock32: props.justifyBlock32 || 'center',
                block32smdis: props.block32smdis || 'flex',
                block32mddis: props.block32mddis || 'flex',
                block33Direction: props.block33direction || 'column',
                block33: props.block33 || '1',
                block33BorderLeft: props.b33BLeft,
                block33BorderRight: props.b33BRight,
                block33BorderTop: props.b33BTop,
                block33BorderBottom: props.b33BBottom,
                block33Border: props.b33Border,
                alignBlock33: props.alignBlock33 || 'center',
                justifyBlock33: props.justifyBlock33 || 'center',
                block33smdis: props.block33smdis || 'flex',
                block33mddis: props.block33mddis || 'flex',
                block34Direction: props.block34direction || 'column',
                block34: props.block34 || '1',
                block34BorderLeft: props.b34BLeft,
                block34BorderRight: props.b34BRight,
                block34BorderTop: props.b34BTop,
                block34BorderBottom: props.b34BBottom,
                block34Border: props.b34Border,
                alignBlock34: props.alignBlock34 || 'center',
                justifyBlock34: props.justifyBlock34 || 'center',
                block34smdis: props.block34smdis || 'flex',
                block34mddis: props.block34mddis || 'flex',
                block35Direction: props.block35direction || 'column',
                block35: props.block35 || '1',
                block35BorderLeft: props.b35BLeft,
                block35BorderRight: props.b35BRight,
                block35BorderTop: props.b35BTop,
                block35BorderBottom: props.b35BBottom,
                block35Border: props.b35Border,
                alignBlock35: props.alignBlock35 || 'center',
                justifyBlock35: props.justifyBlock35 || 'center',
                block35smdis: props.block35smdis || 'flex',
                block35mddis: props.block35mddis || 'flex'
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
                        flexDirection: blocks.block3Direction,
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
                        flexDirection: blocks.block4Direction,
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
                        flexDirection: blocks.block5Direction,
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
                        flexDirection: blocks.block6Direction,
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
                        flexDirection: blocks.block7Direction,
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
                        flexDirection: blocks.block8Direction,
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
                        flexDirection: blocks.block9Direction,
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
                        flexDirection: blocks.block10Direction,
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
                        flexDirection: blocks.block11Direction,
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
                        flexDirection: blocks.block12Direction,
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
                        flexDirection: blocks.block13Direction,
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
                        flexDirection: blocks.block14Direction,
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
                        flexDirection: blocks.block15Direction,
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
                }),
                block16styles: _nestingstyles2.default.create({
                    block16styles: {
                        display: 'flex',
                        flex: blocks.block16,
                        flexDirection: blocks.block16Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock16,
                        borderLeft: blocks.block16BorderLeft,
                        borderRight: blocks.block16BorderRight,
                        borderTop: blocks.block16BorderTop,
                        borderBottom: blocks.block16BorderBottom,
                        border: blocks.b16Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock16
                    },
                    '@media screen and (max-width: 768px)': {
                        block16styles: {
                            display: blocks.block16smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block16styles: {
                            display: blocks.block16mddis
                        }
                    }
                }),
                block17styles: _nestingstyles2.default.create({
                    block17styles: {
                        display: 'flex',
                        flex: blocks.block17,
                        flexDirection: blocks.block17Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock17,
                        borderLeft: blocks.block17BorderLeft,
                        borderRight: blocks.block17BorderRight,
                        borderTop: blocks.block17BorderTop,
                        borderBottom: blocks.block17BorderBottom,
                        border: blocks.b17Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock17
                    },
                    '@media screen and (max-width: 768px)': {
                        block17styles: {
                            display: blocks.block17smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block17styles: {
                            display: blocks.block17mddis
                        }
                    }
                }),
                block18styles: _nestingstyles2.default.create({
                    block18styles: {
                        display: 'flex',
                        flex: blocks.block18,
                        flexDirection: blocks.block18Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock18,
                        borderLeft: blocks.block18BorderLeft,
                        borderRight: blocks.block18BorderRight,
                        borderTop: blocks.block18BorderTop,
                        borderBottom: blocks.block18BorderBottom,
                        border: blocks.b18Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock18
                    },
                    '@media screen and (max-width: 768px)': {
                        block18styles: {
                            display: blocks.block18smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block18styles: {
                            display: blocks.block18mddis
                        }
                    }
                }),
                block19styles: _nestingstyles2.default.create({
                    block19styles: {
                        display: 'flex',
                        flex: blocks.block19,
                        flexDirection: blocks.block19Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock19,
                        borderLeft: blocks.block19BorderLeft,
                        borderRight: blocks.block19BorderRight,
                        borderTop: blocks.block19BorderTop,
                        borderBottom: blocks.block19BorderBottom,
                        border: blocks.b19Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock19
                    },
                    '@media screen and (max-width: 768px)': {
                        block19styles: {
                            display: blocks.block19smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block19styles: {
                            display: blocks.block19mddis
                        }
                    }
                }),
                block20styles: _nestingstyles2.default.create({
                    block20styles: {
                        display: 'flex',
                        flex: blocks.block20,
                        flexDirection: blocks.block20Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock20,
                        borderLeft: blocks.block20BorderLeft,
                        borderRight: blocks.block20BorderRight,
                        borderTop: blocks.block20BorderTop,
                        borderBottom: blocks.block20BorderBottom,
                        border: blocks.b20Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock20
                    },
                    '@media screen and (max-width: 768px)': {
                        block20styles: {
                            display: blocks.block20smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block20styles: {
                            display: blocks.block20mddis
                        }
                    }
                }),
                block21styles: _nestingstyles2.default.create({
                    block21styles: {
                        display: 'flex',
                        flex: blocks.block21,
                        flexDirection: blocks.block21Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock21,
                        borderLeft: blocks.block21BorderLeft,
                        borderRight: blocks.block21BorderRight,
                        borderTop: blocks.block21BorderTop,
                        borderBottom: blocks.block21BorderBottom,
                        border: blocks.b21Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock21
                    },
                    '@media screen and (max-width: 768px)': {
                        block21styles: {
                            display: blocks.block21smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block21styles: {
                            display: blocks.block21mddis
                        }
                    }
                }),
                block22styles: _nestingstyles2.default.create({
                    block22styles: {
                        display: 'flex',
                        flex: blocks.block22,
                        flexDirection: blocks.block22Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock22,
                        borderLeft: blocks.block22BorderLeft,
                        borderRight: blocks.block22BorderRight,
                        borderTop: blocks.block22BorderTop,
                        borderBottom: blocks.block22BorderBottom,
                        border: blocks.b22Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock22
                    },
                    '@media screen and (max-width: 768px)': {
                        block22styles: {
                            display: blocks.block22smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block22styles: {
                            display: blocks.block22mddis
                        }
                    }
                }),
                block23styles: _nestingstyles2.default.create({
                    block23styles: {
                        display: 'flex',
                        flex: blocks.block23,
                        flexDirection: blocks.block23Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock23,
                        borderLeft: blocks.block23BorderLeft,
                        borderRight: blocks.block23BorderRight,
                        borderTop: blocks.block23BorderTop,
                        borderBottom: blocks.block23BorderBottom,
                        border: blocks.b23Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock23
                    },
                    '@media screen and (max-width: 768px)': {
                        block23styles: {
                            display: blocks.block23smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block23styles: {
                            display: blocks.block23mddis
                        }
                    }
                }),
                block24styles: _nestingstyles2.default.create({
                    block24styles: {
                        display: 'flex',
                        flex: blocks.block24,
                        flexDirection: blocks.block24Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock24,
                        borderLeft: blocks.block24BorderLeft,
                        borderRight: blocks.block24BorderRight,
                        borderTop: blocks.block24BorderTop,
                        borderBottom: blocks.block24BorderBottom,
                        border: blocks.b24Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock24
                    },
                    '@media screen and (max-width: 768px)': {
                        block24styles: {
                            display: blocks.block24smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block24styles: {
                            display: blocks.block24mddis
                        }
                    }
                }),
                block25styles: _nestingstyles2.default.create({
                    block25styles: {
                        display: 'flex',
                        flex: blocks.block25,
                        flexDirection: blocks.block25Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock25,
                        borderLeft: blocks.block25BorderLeft,
                        borderRight: blocks.block25BorderRight,
                        borderTop: blocks.block25BorderTop,
                        borderBottom: blocks.block25BorderBottom,
                        border: blocks.b25Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock25
                    },
                    '@media screen and (max-width: 768px)': {
                        block25styles: {
                            display: blocks.block25smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block25styles: {
                            display: blocks.block25mddis
                        }
                    }
                }),
                block26styles: _nestingstyles2.default.create({
                    block26styles: {
                        display: 'flex',
                        flex: blocks.block26,
                        flexDirection: blocks.block26Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock26,
                        borderLeft: blocks.block26BorderLeft,
                        borderRight: blocks.block26BorderRight,
                        borderTop: blocks.block26BorderTop,
                        borderBottom: blocks.block26BorderBottom,
                        border: blocks.b26Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock26
                    },
                    '@media screen and (max-width: 768px)': {
                        block26styles: {
                            display: blocks.block26smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block26styles: {
                            display: blocks.block26mddis
                        }
                    }
                }),
                block27styles: _nestingstyles2.default.create({
                    block27styles: {
                        display: 'flex',
                        flex: blocks.block27,
                        flexDirection: blocks.block27Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock27,
                        borderLeft: blocks.block27BorderLeft,
                        borderRight: blocks.block27BorderRight,
                        borderTop: blocks.block27BorderTop,
                        borderBottom: blocks.block27BorderBottom,
                        border: blocks.b27Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock27
                    },
                    '@media screen and (max-width: 768px)': {
                        block27styles: {
                            display: blocks.block27smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block27styles: {
                            display: blocks.block27mddis
                        }
                    }
                }),
                block28styles: _nestingstyles2.default.create({
                    block28styles: {
                        display: 'flex',
                        flex: blocks.block28,
                        flexDirection: blocks.block28Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock28,
                        borderLeft: blocks.block28BorderLeft,
                        borderRight: blocks.block28BorderRight,
                        borderTop: blocks.block28BorderTop,
                        borderBottom: blocks.block28BorderBottom,
                        border: blocks.b28Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock28
                    },
                    '@media screen and (max-width: 768px)': {
                        block28styles: {
                            display: blocks.block28smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block28styles: {
                            display: blocks.block28mddis
                        }
                    }
                }),
                block29styles: _nestingstyles2.default.create({
                    block29styles: {
                        display: 'flex',
                        flex: blocks.block29,
                        flexDirection: blocks.block29Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock29,
                        borderLeft: blocks.block29BorderLeft,
                        borderRight: blocks.block29BorderRight,
                        borderTop: blocks.block29BorderTop,
                        borderBottom: blocks.block29BorderBottom,
                        border: blocks.b29Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock29
                    },
                    '@media screen and (max-width: 768px)': {
                        block29styles: {
                            display: blocks.block29smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block29styles: {
                            display: blocks.block29mddis
                        }
                    }
                }),
                block30styles: _nestingstyles2.default.create({
                    block30styles: {
                        display: 'flex',
                        flex: blocks.block30,
                        flexDirection: blocks.block30Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock30,
                        borderLeft: blocks.block30BorderLeft,
                        borderRight: blocks.block30BorderRight,
                        borderTop: blocks.block30BorderTop,
                        borderBottom: blocks.block30BorderBottom,
                        border: blocks.b30Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock30
                    },
                    '@media screen and (max-width: 768px)': {
                        block30styles: {
                            display: blocks.block30smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block30styles: {
                            display: blocks.block30mddis
                        }
                    }
                }),
                block31styles: _nestingstyles2.default.create({
                    block31styles: {
                        display: 'flex',
                        flex: blocks.block31,
                        flexDirection: blocks.block31Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock31,
                        borderLeft: blocks.block31BorderLeft,
                        borderRight: blocks.block31BorderRight,
                        borderTop: blocks.block31BorderTop,
                        borderBottom: blocks.block31BorderBottom,
                        border: blocks.b31Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock31
                    },
                    '@media screen and (max-width: 768px)': {
                        block31styles: {
                            display: blocks.block31smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block31styles: {
                            display: blocks.block31mddis
                        }
                    }
                }),
                block32styles: _nestingstyles2.default.create({
                    block32styles: {
                        display: 'flex',
                        flex: blocks.block32,
                        flexDirection: blocks.block32Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock32,
                        borderLeft: blocks.block32BorderLeft,
                        borderRight: blocks.block32BorderRight,
                        borderTop: blocks.block32BorderTop,
                        borderBottom: blocks.block32BorderBottom,
                        border: blocks.b32Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock32
                    },
                    '@media screen and (max-width: 768px)': {
                        block32styles: {
                            display: blocks.block32smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block32styles: {
                            display: blocks.block32mddis
                        }
                    }
                }),
                block33styles: _nestingstyles2.default.create({
                    block33styles: {
                        display: 'flex',
                        flex: blocks.block33,
                        flexDirection: blocks.block33Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock33,
                        borderLeft: blocks.block33BorderLeft,
                        borderRight: blocks.block33BorderRight,
                        borderTop: blocks.block33BorderTop,
                        borderBottom: blocks.block33BorderBottom,
                        border: blocks.b33Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock33
                    },
                    '@media screen and (max-width: 768px)': {
                        block33styles: {
                            display: blocks.block33smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block33styles: {
                            display: blocks.block33mddis
                        }
                    }
                }),
                block34styles: _nestingstyles2.default.create({
                    block34styles: {
                        display: 'flex',
                        flex: blocks.block34,
                        flexDirection: blocks.block34Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock34,
                        borderLeft: blocks.block34BorderLeft,
                        borderRight: blocks.block34BorderRight,
                        borderTop: blocks.block34BorderTop,
                        borderBottom: blocks.block34BorderBottom,
                        border: blocks.b34Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock34
                    },
                    '@media screen and (max-width: 768px)': {
                        block34styles: {
                            display: blocks.block34smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block34styles: {
                            display: blocks.block34mddis
                        }
                    }
                }),
                block35styles: _nestingstyles2.default.create({
                    block35styles: {
                        display: 'flex',
                        flex: blocks.block35,
                        flexDirection: blocks.block35Direction,
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock35,
                        borderLeft: blocks.block35BorderLeft,
                        borderRight: blocks.block35BorderRight,
                        borderTop: blocks.block35BorderTop,
                        borderBottom: blocks.block35BorderBottom,
                        border: blocks.b35Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock35
                    },
                    '@media screen and (max-width: 768px)': {
                        block35styles: {
                            display: blocks.block35smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        block35styles: {
                            display: blocks.block35mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}