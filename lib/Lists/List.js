import React from 'react';
import MediaQuery from "react-responsive";
import listFunction from "./listFunctions/listFunctions";
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledList: '',
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledList, use, LIST, tempItems, nestedItems = '';
        const self = this;
        let slides = [];
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children)
        let tempkeys = []
        for (let i = 0; i <= CHILDS.length + 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("1", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("1", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        nestedItems = []
                        tempItems = CHILDS.map((x) => x)
                        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                            for (var w = 0; w < +this.state.listAmount; w += 1) {
                                nestedItems.push(tempItems[w])
                            }
                            listItems.push(nestedItems)
                            nestedItems = []
                            tempItems.splice(0, this.state.listAmount)
                        }
                        use = listFunction("2", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>
                        ]
                    default:
                        nestedItems = []
                        tempItems = CHILDS.map((x) => x)
                        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                            for (var w = 0; w < +this.state.listAmount; w += 1) {
                                nestedItems.push(tempItems[w])
                            }
                            listItems.push(nestedItems)
                            nestedItems = []
                            tempItems.splice(0, this.state.listAmount)
                        }
                        use = listFunction("2", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("3", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("3", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>

                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("4", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("4", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                }
                break;
            default:
                listItems = CHILDS.map((x) => x)
                use = listFunction("3", props, state, self)
                LIST = listItems.map((x, i) => {
                    return (
                        <li key={tempkeys[i + 3]} style={use.listitemstyle}>{x}</li>
                    )
                })
                styledList = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>,
                    <MediaQuery key={tempkeys[2]}  maxWidth={767}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>
                ]
        }
        this.setState({ listItem: listItems, styledList: styledList, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledList, use, LIST, tempItems, nestedItems = '';
        const self = this;
        let listItems = []
        const CHILDS = React.Children.toArray(newProps.children)
        listItems = CHILDS.map((x) => x)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("1", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("1", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        nestedItems = []
                        tempItems = CHILDS.map((x) => x)
                        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                            for (var w = 0; w < +this.state.listAmount; w += 1) {
                                nestedItems.push(tempItems[w])
                            }
                            listItems.push(nestedItems)
                            nestedItems = []
                            tempItems.splice(0, this.state.listAmount)
                        }
                        use = listFunction("2", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>
                        ]
                    default:
                        nestedItems = []
                        tempItems = CHILDS.map((x) => x)
                        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                            for (var w = 0; w < +this.state.listAmount; w += 1) {
                                nestedItems.push(tempItems[w])
                            }
                            listItems.push(nestedItems)
                            nestedItems = []
                            tempItems.splice(0, this.state.listAmount)
                        }
                        use = listFunction("2", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                                {LIST}
                            </ol></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("3", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("3", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ol style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ol style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ol></MediaQuery>

                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("4", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                    default:
                        listItems = CHILDS.map((x) => x)
                        use = listFunction("4", props, state, self)
                        LIST = listItems.map((x, i) => {
                            return (
                                <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                            )
                        })
                        styledList = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><ul style={use.liststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ul style={use.mdliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><ul style={use.smliststyle} id={this.state.id} className={this.state.className}>
                                {LIST}
                            </ul></MediaQuery>

                        ]
                }
                break;
            default:
                listItems = CHILDS.map((x) => x)
                use = listFunction("3", props, state, self)
                LIST = listItems.map((x, i) => {
                    return (
                        <li key={this.state.keys[i + 3]} style={use.listitemstyle}>{x}</li>
                    )
                })
                styledList = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]}  maxWidth={767}><ol style={use.liststyle} id={this.state.id} className={this.state.className}>
                        {LIST}
                    </ol></MediaQuery>
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