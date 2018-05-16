import React from "react"
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import MediaQuery from "react-responsive";
import buttonFunction from "./buttonFunctions/buttonFunctions";
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
            onClick: props.onClick,
            box: props.box,
            vars: props.vars,
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
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("1", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("1", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("2", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("2", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("3", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("3", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("4", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("4", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("5", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("5", props, state, self)
                        styledButton = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                }
                break;
            default:
                use = buttonFunction("1", props, state, self)
                styledButton = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><button
                        style={use.buttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><button
                        style={use.mdbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><button
                        style={use.smbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>
                ]
        }

        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use, keys: tempkeys })

    }

    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledButton, use = '';
        let self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("1", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("1", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("2", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("2", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("3", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("3", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("4", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("4", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("5", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("5", props, state, self)
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button></MediaQuery>,
                        ]
                }
                break;
            default:
                use = buttonFunction("1", props, state, self)
                styledButton = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                        style={use.buttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                        style={use.mdbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                        style={use.smbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{CHILDS[0]}</button></MediaQuery>
                ]
        }
        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use })
    }
    renderStuff() {
        const props = this.props;
        const state = this.state;
        let styledButton, use = '';
        const self = this;
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("1", props, state, self, arguments[0], arguments[1])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("1", props, state, self, arguments[0], arguments[1])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id} className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseOut={use.changeHoverBack}
                            >{this.state.childs[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("2", props, state, self, arguments[0], arguments[1], arguments[2])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("2", props, state, self, arguments[0], arguments[1], arguments[2])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("3", props, state, self, arguments[0])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("3", props, state, self, arguments[0])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("4", props, state, self, arguments[0], arguments[1])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                        ]
                    default:
                        use = buttonFunction("4", props, state, self, arguments[0], arguments[1])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                }

                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = buttonFunction("5", props, state, self, arguments[0])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>
                        ]
                    default:
                        use = buttonFunction("5", props, state, self, arguments[0])
                        styledButton = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                                style={use.buttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                                style={use.mdbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                                style={use.smbuttonStyles}
                                id={this.state.id}
                                className={this.state.className}
                                onClick={this.state.onClick}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button></MediaQuery>,
                        ]
                }
                break;
            default:
                use = buttonFunction("1", props, state, self, arguments[0], arguments[1])
                styledButton = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><button
                        style={use.buttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{this.state.childs[0]}</button></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><button
                        style={use.mdbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{this.state.childs[0]}</button></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><button
                        style={use.smbuttonStyles}
                        id={this.state.id} className={this.state.className}
                        onClick={this.state.onClick}
                        onMouseEnter={use.changeHover}
                        onMouseOut={use.changeHoverBack}
                    >{this.state.childs[0]}</button></MediaQuery>
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