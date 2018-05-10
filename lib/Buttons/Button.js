import React from "react"
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
import buttonFunction from "./buttonFunctions/buttonFunctions";
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: props.onClick,
            box: props.box,
            buttonStyle: '',
            childs: '',
            keys: ''
        }
        this.renderStuff = this.renderStuff.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledButton, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        const tempkey = Math.random()
        if (this.state.box === "1") {
            use = buttonFunction("1", props, state, self)
            styledButton = [
                <button key={tempkey}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseOut={use.changeHoverBack}
                >{CHILDS[0]}</button>
            ]
        } else if (this.state.box === "2") {
            use = buttonFunction("2", props, state, self)
            styledButton = [
                <button key={tempkey}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.box === "3") {
            use = buttonFunction("3", props, state, self)
            styledButton = [
                <button key={tempkey}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.box === "4") {
            use = buttonFunction("4", props, state, self)
            styledButton = [
                <button key={tempkey}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.box === "5") {
            use = buttonFunction("5", props, state, self)
            styledButton = [
                <button key={tempkey}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else {
            use = buttonFunction("custom", props, state, self)
            styledButton = [
                <button key={tempkey} style={use.BUTTONSTYLES.buttonStyles} id={this.state.id} className={this.state.className} onClick={this.state.onClick} onMouseEnter={use.changeHover} onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        }

        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use, keys: tempkey })

    }

    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledButton, use = '';
        let self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = buttonFunction("1", props, state, self)
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}
                >{CHILDS[0]}</button>
            ]
        } else if (this.state.box === "2") {
            use = buttonFunction("2", props, state, self)
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.box === "3") {
            use = buttonFunction("3", props, state, self)
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.box === "4") {
            use = buttonFunction("4", props, state, self)
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.box === "5") {
            use = buttonFunction("5", props, state, self)
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else {
            use = buttonFunction("custom", props, state, self)
            styledButton = [
                <button key={this.state.keys} style={use.BUTTONSTYLES.buttonStyles} id={this.state.id} className={this.state.className} onClick={this.state.onClick} onMouseEnter={use.changeHover} onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        }
        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use })
    }
    renderStuff() {
        const props = this.props;
        const state = this.state;
        let styledButton, use = '';
        const self = this;
        if (this.state.box === "1") {
            use = buttonFunction("1", props, state, self, arguments[0], arguments[1])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseOut={use.changeHoverBack}
                >{this.state.childs[0]}</button>
            ]
        } else if (this.state.box === "2") {
            use = buttonFunction("2", props, state, self, arguments[0], arguments[1], arguments[2])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]

        } else if (this.state.box === "3") {
            use = buttonFunction("3", props, state, self, arguments[0])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]

        } else if (this.state.box === "4") {
            use = buttonFunction("4", props, state, self, arguments[0], arguments[1])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]
        } else if (this.state.box === "5") {
            use = buttonFunction("5", props, state, self, arguments[0])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]
        } else {
            use = buttonFunction("custom", props, state, self, arguments[0], arguments[1])
            styledButton = [
                <button key={this.state.keys}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]
        }
        this.setState({ buttonStyle: styledButton })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.buttonStyle}
            </React.Fragment>
        )
    }
}