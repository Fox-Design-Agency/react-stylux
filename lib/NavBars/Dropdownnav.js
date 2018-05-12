import React from "react";
import StyleSheet from 'nestingstyles';
import '../css/reset.css'
import '../css/animations.css';
import dropdownnavFunction from "./navbarFunctions/dropdownnavFunctions";
export default class Dropdownnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 0 5px 5px',
            offset: props.offset,
            color: props.color || 'black',
            textAlign: props.textAlign || 'left',
            margin: props.margin,
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'bounceInDown',
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode || 'both',
            childs: [],
            first: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            keys: '',
            box: props.box,
            styledDropdown: ''
        }
        this.enter = this.enter.bind(this);
        this.left = this.left.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use, NAVBAR, FIRST = '';
        const self = this;
        let tempkey = Math.random()

        const CHILDS = React.Children.toArray(this.props.children)


        if (this.state.box === "1") {
            use = dropdownnavFunction("1", props, state, self)
            const DropDown_NavBar_Li = {
                color: this.state.color,
            }
            NAVBAR = CHILDS.map((x, i, arr) => {
                return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
            })
            FIRST = CHILDS[0];
            styledDropdown = [
                <nav key={tempkey} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {FIRST}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {NAVBAR}
                        </ul>
                    </li>
                </nav>
            ]

        } else {
            use = dropdownnavFunction("1", props, state, self)
            const DropDown_NavBar_Li = {
                color: this.state.color,
            }
            NAVBAR = CHILDS.map((x, i, arr) => {
                return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
            })
            FIRST = CHILDS[0];
            styledDropdown = [
                <nav key={tempkey} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {FIRST}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {NAVBAR}
                        </ul>
                    </li>
                </nav>
            ]

        }
        this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown, keys: tempkey })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledDropdown, use, NAVBAR, FIRST = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = dropdownnavFunction("1", props, state, self)
            const DropDown_NavBar_Li = {
                color: this.state.color,
            }
            NAVBAR = CHILDS.map((x, i, arr) => {
                return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
            })
            FIRST = CHILDS[0];
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {NAVBAR}
                        </ul>
                    </li>
                </nav>
            ]
        } else {
            use = dropdownnavFunction("1", props, state, self)
            const DropDown_NavBar_Li = {
                color: this.state.color,
            }
            NAVBAR = CHILDS.map((x, i, arr) => {
                return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
            })
            FIRST = CHILDS[0];
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {NAVBAR}
                        </ul>
                    </li>
                </nav>
            ]

        }
        this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown, })
    }

    enter() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use = '';
        const self = this;
        if (this.state.box === "1") {
            let show = "visible"
            use = dropdownnavFunction("1", props, state, self, show)
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {this.state.childs}
                        </ul>
                    </li>
                </nav>
            ]
        } else {
            let show = "visible"
            use = dropdownnavFunction("1", props, state, self, show)
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {this.state.childs}
                        </ul>
                    </li>
                </nav>
            ]

        }
        this.setState({
            styledDropdown: styledDropdown
        });
    }
    left() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use = '';
        const self = this;
        if (this.state.box === "1") {
            let show = "hidden"
            use = dropdownnavFunction("1", props, state, self, show)
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {this.state.childs}
                        </ul>
                    </li>
                </nav>
            ]
        } else {
            let show = "hidden"
            use = dropdownnavFunction("1", props, state, self, show)
            styledDropdown = [
                <nav key={this.state.keys} id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                    <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                        onMouseOver={() => this.enter()}
                        onMouseOut={() => this.left()}>
                        {this.state.first}
                        <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                            {this.state.childs}
                        </ul>
                    </li>
                </nav>
            ]

        }
        this.setState({
            styledDropdown: styledDropdown
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledDropdown}
            </React.Fragment>
        )
    }
}