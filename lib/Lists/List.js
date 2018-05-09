import React from 'react';
import StyleSheet from 'nestingstyles';
import listFunction from "./listFunctions/listFunctions";
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'decimal',
            bulletStyleType: props.listStyleType || 'disc',
            squareStyleType: props.listStyleType || 'square',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            width: props.width || "100%",
            box: props.box,
            styledList: '',
            keys: ''

        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledList, use = '';
        const self = this;
        let slides = [];
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length
        let tempkeys = []
        for (let i = 0; i <= num; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        if (this.state.box === "1") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("1", props, state, self)
            const LIST = listItems.map((x, i) => {

                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]

        } else if (this.state.box === "2") {
            let nestedItems = []
            let tempItems = CHILDS.map((x) => x)
            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                for (var w = 0; w < +this.state.listAmount; w += 1) {
                    nestedItems.push(tempItems[w])
                }
                listItems.push(nestedItems)
                nestedItems = []
                tempItems.splice(0, this.state.listAmount)
            }
            use = listFunction("2", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ol key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                    {LIST}
                </ol>
            ]

        } else if (this.state.box === "3") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("3", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ol key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ol>
            ]

        } else if (this.state.box === "4") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("4", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]

        } else if (this.state.box === "5") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("5", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]
        } else {
            use = listFunction("custom", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={tempkeys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={tempkeys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]
        }
        this.setState({ listItem: listItems, styledList: styledList, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledList, use = '';
        const self = this;
        let listItems = []
        const CHILDS = React.Children.toArray(newProps.children)
        const num = CHILDS.length
        listItems = CHILDS.map((x) => x)
        if (this.state.box === "1") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("1", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]

        } else if (this.state.box === "2") {
            let nestedItems = []
            let tempItems = CHILDS.map((x) => x)
            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                for (var w = 0; w < +this.state.listAmount; w += 1) {
                    nestedItems.push(tempItems[w])
                }
                listItems.push(nestedItems)
                nestedItems = []
                tempItems.splice(0, this.state.listAmount)
            }
            use = listFunction("2", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ol key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                    {LIST}
                </ol>
            ]

        } else if (this.state.box === "3") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("3", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ol key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ol>
            ]

        } else if (this.state.box === "4") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("4", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]

        } else if (this.state.box === "5") {
            listItems = CHILDS.map((x) => x)
            use = listFunction("5", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]
        } else {
            use = listFunction("custom", props, state, self)
            const LIST = listItems.map((x, i) => {
                return (
                    <li key={this.state.keys[i]} style={use.LISTSTYLE.listitemstyle}>{x}</li>
                )
            })
            styledList = [
                <ul key={this.state.keys[num]} style={use.LISTSTYLE.liststyle} id={this.state.id} className={this.state.className}>
                    {LIST}
                </ul>
            ]
        }

        this.setState({ listItem: listItems, styledList: styledList })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledList}
            </React.Fragment>
        )
    }
}