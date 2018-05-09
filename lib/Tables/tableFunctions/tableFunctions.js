import React from 'react';
import StyleSheet from 'nestingstyles';
export default function tableFunction(type, props, state, self) {
    let cursor = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {
                TABLESTYLE: StyleSheet.create({
                    tablestyle: {
                        borderTop: state.tableBorderTop,
                        borderRight: state.tableBorderRight,
                        borderBottom: state.tableBorderBottom,
                        borderLeft: state.tableBorderLeft,
                        border: state.tableBorder,
                        margin: state.tableMargin,
                        padding: state.tablePadding,
                        textAlign: 'center',
                        width: state.tableWidth,
                        height: state.tableHeight,
                        borderCollapse: state.tableBorderCollapse,
                        cursor: 'default',
                    },
                    '@media screen and (max-width: 768px)': {
                        tablestyle: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tablestyle: {
                            display: state.mdDis,
                        }
                    },
                }),
                TABLERES : StyleSheet.create({
                    tableres: {
                        overflowX: 'auto',
                    },
                    '@media screen and (max-width: 768px)': {
                        tableres: {
                            display: state.smDis,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tableres: {
                            display: state.mdDis,
                        }
                    },
                })
            }
        default:
            return
    }
}