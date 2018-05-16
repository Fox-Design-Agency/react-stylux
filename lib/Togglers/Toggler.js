import React from 'react';
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import togglerFunction from "./togglerFunctions/togglerFunctions";
export default class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: props.id,
            className: props.className,
            panelClassName: props.panelClassName,
            toggleClassName: props.toggleClassName,
            childs: [],
            box: props.box,
            vars: props.vars,
            keys: '',
            styledToggler: '',
            first: ''
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledToggler, use, labels, text, CHECKS, LABELS, TEXT = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let first = ''
        let tempkeys = []
        for (let i = 0; i <= CHILDS.length + 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        first = CHILDS.shift()
                        use = togglerFunction("1", props, state, self)
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        first = CHILDS.shift()
                        use = togglerFunction("1", props, state, self)
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        first = CHILDS.shift()
                        use = togglerFunction("2", props, state, self)
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        first = CHILDS.shift()
                        use = togglerFunction("2", props, state, self)
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                        use = togglerFunction("3", props, state, self)
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>

                        ]
                    default:
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                        use = togglerFunction("3", props, state, self)
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>

                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = togglerFunction("4", props, state, self)
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>
                        ]
                    default:
                        use = togglerFunction("4", props, state, self)
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                first = CHILDS.shift()
                use = togglerFunction("1", props, state, self)
                styledToggler = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>
                ]
        }
        this.setState({ first: first, childs: CHILDS, keys: tempkeys, styledToggler: styledToggler })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledToggler, use, labels, text, CHECKS, LABELS, TEXT = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        let first = ''
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        first = CHILDS.shift()
                        use = togglerFunction("1", props, state, self)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        first = CHILDS.shift()
                        use = togglerFunction("1", props, state, self)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        first = CHILDS.shift()
                        use = togglerFunction("2", props, state, self)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        first = CHILDS.shift()
                        use = togglerFunction("2", props, state, self)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        labels = [];
                        text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                        use = togglerFunction("3", props, state, self)
                        CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                        LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
                        })
                        TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>

                        ]
                    default:
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                        use = togglerFunction("3", props, state, self)
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>

                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = togglerFunction("4", props, state, self)
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>
                        ]
                    default:
                        use = togglerFunction("4", props, state, self)
                         labels = [];
                         text = [];
                        for (var i = 0; i < CHILDS.length; i += 1) {
                            if ((i + 1) % 2 === 0) {
                                text.push(CHILDS[i])
                            } else {
                                labels.push(CHILDS[i])
                            }
                        }
                         CHECKS = labels.map((x, i, arr) => {
                            return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
                        })
                         LABELS = labels.map((x, i, arr) => {
                            return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
                        })
                         TEXT = text.map((x, i, arr) => {
                            return (
                                <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                                    <p style={use.TEXTBOX}>
                                        {x}
                                    </p>
                                </div>
                            )
                        })
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                                {CHECKS}
                                <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {LABELS}
                                </nav>
                                {TEXT}
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                first = CHILDS.shift()
                use = togglerFunction("1", props, state, self)
                styledToggler = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className} >
                        <div style={use.CLICKBOX} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.TOGGLERBOX}>
                            {CHILDS}
                        </div>
                    </div></MediaQuery>
                ]
        }
        this.setState({ first: first, childs: CHILDS, styledToggler: styledToggler })
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledToggler, use = '';
        const self = this;
        let show = !this.state.show;
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = togglerFunction("1", props, state, self, show)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = togglerFunction("1", props, state, self, show)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = togglerFunction("2", props, state, self, show)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = togglerFunction("2", props, state, self, show)
                        styledToggler = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.TOGGLERBOX}>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = togglerFunction("1", props, state, self, show)
                styledToggler = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                        <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                            {this.state.childs}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                        <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                            {this.state.childs}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                        <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                            {this.state.childs}
                        </div>
                    </div></MediaQuery>

                ]
        }
        this.setState({
            show: show,
            styledToggler: styledToggler
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledToggler}
            </React.Fragment>
        )
    }
}