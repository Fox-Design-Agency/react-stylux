import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
import tableFunction from "./tableFunctions/tableFunctions";
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            headBorderTop: props.hbordertop,
            headBorderRight: props.hborderRight,
            headBorderBottom: props.hborderBottom,
            headBorderLeft: props.hborderLeft,
            headBorder: props.hborder || '1px solid black',
            headVertical: props.hvertical || 'center',
            headWidth: props.headWidth,
            headHeight: props.headHeight,
            headMargin: props.headMargin,
            headPadding: props.headPadding || '5px',
            dBorderTop: props.dbordertop,
            dBorderRight: props.dborderRight,
            dBorderBottom: props.dborderBottom,
            dBorderLeft: props.dborderLeft,
            dBorder: props.dborder || '1px solid black',
            dVertical: props.dVertical || 'center',
            dwidth: props.dwidth,
            dheight: props.dheight,
            dmargin: props.dmargin,
            dpadding: props.dpadding || '5px',
            tableBorderTop: props.tbordertop,
            tableBorderRight: props.tborderRight,
            tableBorderBottom: props.tborderBottom,
            tableBorderLeft: props.tborderLeft,
            tableBorder: props.tborder || '1px solid black',
            tableMargin: props.tmargin || '5px',
            tablePadding: props.tpadding,
            tableWidth: props.tableWidth,
            tableHeight: props.tableHeight,
            tableBorderCollapse: props.borderCollaspe || 'collapse',
            box: props.box,
            keys: '',
            styledTable: ''

        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledTable, use = '';
        const self = this;
        let slides = [];
        let tempHead = []
        let tempBody = []
        let childs = []
        let rows = this.state.rows
        let HEADROW, HEAD, BODY
        let BODYROW = []
        const TABLEHEAD = StyleSheet.create({
            tablehead: {
                borderTop: this.state.headBorderTop,
                borderRight: this.state.headBorderRight,
                borderBottom: this.state.headBorderBottom,
                borderLeft: this.state.headBorderLeft,
                border: this.state.headBorder,
                margin: this.state.headMargin,
                padding: this.state.headPadding,
                textAlign: 'center',
                width: this.state.headWidth,
                height: this.state.headHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablehead: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablehead: {
                    display: this.state.mdDis,
                }
            },
        })
        const TABLEBODY = StyleSheet.create({
            tablebody: {
                borderTop: this.state.dBorderTop,
                borderRight: this.state.dBorderRight,
                borderBottom: this.state.dBorderBottom,
                borderLeft: this.state.dBorderLeft,
                border: this.state.dBorder,
                margin: this.state.dMargin,
                padding: this.state.dPadding,
                textAlign: 'center',
                width: this.state.dWidth,
                height: this.state.dHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablebody: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablebody: {
                    display: this.state.mdDis,
                }
            },
        })

        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children)
        let tempKeys = [0.23154]

        if (CHILDS !== '') {
            childs = CHILDS.map((x, i, arr) => x);
            for (var b = 1; b <= this.state.columns; b += 1) {
                tempHead.push(childs[b - 1])
            }
            childs.splice(0, this.state.columns)
            //need to divide by this.state.columns and make rows here
            tempBody = childs.map((x, i, arr) => x);
            while (rows > 0) {
                if (rows === this.state.rows) {
                    HEAD = tempHead.map((x, i, arr) => {
                        return (
                            <th key={i} style={TABLEHEAD.tablehead}>
                                {x}
                            </th>
                        )
                    })
                    HEADROW = <tr>{HEAD}</tr>
                } else {
                    var temperBody = tempBody.splice(0, this.state.columns);
                    BODY = temperBody.map((x, i, arr) => {
                        return (
                            <td key={i} style={TABLEBODY.tablebody}>
                                {x}
                            </td>
                        )
                    })
                    BODYROW.push(<tr key={rows}>{BODY}</tr>)
                }
                rows -= 1
            }
        }
        if (this.state.box === '1') {
            use = tableFunction("1", props, state, self);
            styledTable = [
                <div key={tempKeys[0]} style={use.TABLERES.tableres} id={this.state.mainId} className={this.state.mainClassName} >
                    <table style={use.TABLESTYLE.tablestyle} id={this.state.tableId} className={this.state.tableClassName}>
                        <thead>
                            {HEADROW}
                        </thead>
                        <tbody>
                            {BODYROW}
                        </tbody>
                    </table>
                </div>
            ]
        } else {
            use = tableFunction("1", props, state, self);
            styledTable = [
                <div key={tempKeys[0]} style={use.TABLERES.tableres} id={this.state.mainId} className={this.state.mainClassName} >
                    <table style={use.TABLESTYLE.tablestyle} id={this.state.tableId} className={`${this.state.tableClassName}`}>
                        <thead>
                            {HEADROW}
                        </thead>
                        <tbody>
                            {BODYROW}
                        </tbody>
                    </table>
                </div>
            ]
        }
        this.setState({ head: HEADROW, body: BODYROW, styledTable: styledTable, keys: tempKeys })
    }

    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledTable, use = '';
        const self = this;
        let tempHead = []
        let tempBody = []
        let childs = []
        let rows = this.state.rows
        let HEADROW, HEAD, BODY
        let BODYROW = []
        const TABLEHEAD = StyleSheet.create({
            tablehead: {
                borderTop: this.state.headBorderTop,
                borderRight: this.state.headBorderRight,
                borderBottom: this.state.headBorderBottom,
                borderLeft: this.state.headBorderLeft,
                border: this.state.headBorder,
                margin: this.state.headMargin,
                padding: this.state.headPadding,
                textAlign: 'center',
                width: this.state.headWidth,
                height: this.state.headHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablehead: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablehead: {
                    display: this.state.mdDis,
                }
            },
        })

        const TABLEBODY = StyleSheet.create({
            tablebody: {
                borderTop: this.state.dBorderTop,
                borderRight: this.state.dBorderRight,
                borderBottom: this.state.dBorderBottom,
                borderLeft: this.state.dBorderLeft,
                border: this.state.dBorder,
                margin: this.state.dMargin,
                padding: this.state.dPadding,
                textAlign: 'center',
                width: this.state.dWidth,
                height: this.state.dHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablebody: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablebody: {
                    display: this.state.mdDis,
                }
            },
        })
        const CHILDS = React.Children.count(newProps.children) === 0 ? '' : React.Children.toArray(newProps.children)
        if (CHILDS !== '') {
            childs = CHILDS.map((x, i, arr) => x);
            for (var b = 1; b <= this.state.columns; b += 1) {
                tempHead.push(childs[b - 1])
            }
            childs.splice(0, this.state.columns)
            //need to divide by this.state.columns and make rows here
            tempBody = childs.map((x, i, arr) => x);
            while (rows > 0) {
                if (rows === this.state.rows) {
                    HEAD = tempHead.map((x, i, arr) => {
                        return (
                            <th key={i} style={TABLEHEAD.tablehead}>
                                {x}
                            </th>
                        )
                    })
                    HEADROW = <tr>{HEAD}</tr>
                } else {
                    var temperBody = tempBody.splice(0, this.state.columns);
                    BODY = temperBody.map((x, i, arr) => {
                        return (
                            <td key={i} style={TABLEBODY.tablebody}>
                                {x}
                            </td>
                        )
                    })
                    BODYROW.push(<tr key={rows}>{BODY}</tr>)
                }
                rows -= 1
            }
        }
        if (this.state.box === '1') {
            use = tableFunction("1", props, state, self);
            styledTable = [
                <div key={this.state.keys[0]} style={use.TABLERES.tableres} id={this.state.mainId} className={this.state.mainClassName} >
                    <table style={use.TABLESTYLE.tablestyle} id={this.state.tableId} className={this.state.tableClassName}>
                        <thead>
                            {HEADROW}
                        </thead>
                        <tbody>
                            {BODYROW}
                        </tbody>
                    </table>
                </div>
            ]
        } else {
            use = tableFunction("1", props, state, self);
            styledTable = [
                <div key={this.state.keys[0]} style={use.TABLERES.tableres} id={this.state.mainId} className={this.state.mainClassName} >
                    <table style={use.TABLESTYLE.tablestyle} id={this.state.tableId} className={`${this.state.tableClassName}`}>
                        <thead>
                            {HEADROW}
                        </thead>
                        <tbody>
                            {BODYROW}
                        </tbody>
                    </table>
                </div>
            ]
        }
        this.setState({ head: HEADROW, body: BODYROW, styledTable: styledTable })

    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledTable}
            </React.Fragment>
        )
    }
}