import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
import tableFunction from "./tableFunctions/tableFunctions";
export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            id: props.id,
            className: props.className,
            smdis: props.smDis,
            mddis: props.mdDis,
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
                borderTop: props.hbordertop,
                borderRight: props.hborderRight,
                borderBottom: props.hborderBottom,
                borderLeft: props.hborderLeft,
                border: props.hborder || '1px solid black',
                margin: props.hvertical || 'center',
                padding: props.headPadding || '10px',
                textAlign: 'center',
                width: props.headWidth,
                height: props.headHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablehead: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablehead: {
                    display: this.state.mddis,
                }
            },
        })
        const TABLEBODY = StyleSheet.create({
            tablebody: {
                borderTop:  props.dbordertop,
                borderRight:props.dborderRight,
                borderBottom: props.dborderBottom,
                borderLeft:props.dborderLeft,
                border:  props.dborder || '1px solid black',
                margin:  props.dmargin,
                padding: props.dpadding || '5px',
                textAlign: 'center',
                width: props.dwidth,
                height: props.dheight,

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
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
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
                <div key={tempKeys[0]} style={use.TABLERES.tableres} id={this.state.id} className={this.state.className} >
                    <table style={use.TABLESTYLE.tablestyle}>
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
                <div key={tempKeys[0]} style={use.TABLERES.tableres} id={this.state.id} className={this.state.className} >
                    <table style={use.TABLESTYLE.tablestyle}>
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
                borderTop: props.hbordertop,
                borderRight: props.hborderRight,
                borderBottom: props.hborderBottom,
                borderLeft: props.hborderLeft,
                border: props.hborder || '1px solid black',
                margin: props.hvertical || 'center',
                padding: props.headPadding || '10px',
                textAlign: 'center',
                width: props.headWidth,
                height: props.headHeight,

            },
            '@media screen and (max-width: 768px)': {
                tablehead: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                tablehead: {
                    display: this.state.mddis,
                }
            },
        })
        const TABLEBODY = StyleSheet.create({
            tablebody: {
                borderTop:  props.dbordertop,
                borderRight:props.dborderRight,
                borderBottom: props.dborderBottom,
                borderLeft:props.dborderLeft,
                border:  props.dborder || '1px solid black',
                margin:  props.dmargin,
                padding: props.dpadding || '5px',
                textAlign: 'center',
                width: props.dwidth,
                height: props.dheight,

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
                <div key={this.state.keys[0]} style={use.TABLERES.tableres} id={this.state.id} className={this.state.className} >
                    <table style={use.TABLESTYLE.tablestyle} >
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
                <div key={this.state.keys[0]} style={use.TABLERES.tableres} id={this.state.id} className={this.state.className} >
                    <table style={use.TABLESTYLE.tablestyle}>
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