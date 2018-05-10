import React from 'react';
import StyleSheet from 'nestingstyles';
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
            keys: '',
            styledToggler: '',
            first: ''
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledToggler, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let first = ''
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1") {
            first = CHILDS.shift()
            use = togglerFunction("1", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.id} className={this.state.className} >
                    <div style={use.CLICKBOX} onClick={this.toggle}>
                        {first}
                    </div>
                    <div style={use.TOGGLERBOX}>
                        {CHILDS}
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            first = CHILDS.shift()
            use = togglerFunction("2", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                    <div style={use.CLICKBOX} onClick={this.toggle}>
                        {first}
                    </div>
                    <div style={use.TOGGLERBOX}>
                        {CHILDS}
                    </div>
                </div>
            ]
        } else if (this.state.box === "3") {
            let labels = [];
            let text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i])
                } else {
                    labels.push(CHILDS[i])
                }
            }
            use = togglerFunction("3", props, state, self)
            const CHECKS = labels.map((x, i, arr) => {
                return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
            })
            const LABELS = labels.map((x, i, arr) => {
                return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
            })
            const TEXT = text.map((x, i, arr) => {
                return (
                    <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                        <p style={use.TEXTBOX}>
                            {x}
                        </p>
                    </div>
                )
            })
            styledToggler = [
                <div key={tempKeys[0]} style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                    {CHECKS}
                    <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                        {LABELS}
                    </nav>
                    {TEXT}
                </div>

            ]
        } else if (this.state.box === "4") {
            use = togglerFunction("4", props, state, self)
            let labels = [];
            let text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i])
                } else {
                    labels.push(CHILDS[i])
                }
            }
            const CHECKS = labels.map((x, i, arr) => {
                return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
            })
            const LABELS = labels.map((x, i, arr) => {
                return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
            })
            const TEXT = text.map((x, i, arr) => {
                return (
                    <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                        <p style={use.TEXTBOX}>
                            {x}
                        </p>
                    </div>
                )
            })
            styledToggler = [
                <div key={tempKeys[0]} style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                    {CHECKS}
                    <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                        {LABELS}
                    </nav>
                    {TEXT}
                </div>
            ]

        } else {
            first = CHILDS.shift()
            use = togglerFunction("1", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.id} className={this.state.className} >
                    <div style={use.CLICKBOX} onClick={this.toggle}>
                        {first}
                    </div>
                    <div style={use.TOGGLERBOX}>
                        {CHILDS}
                    </div>
                </div>
            ]
        }
        this.setState({ first: first, childs: CHILDS, keys: tempKeys, styledToggler: styledToggler })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledToggler, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        let first = ''
        if (this.state.box === "1") {
            first = CHILDS.shift()
            use = togglerFunction("1", props, state, self)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.id} className={this.state.className} >
                <div style={use.CLICKBOX} onClick={this.toggle}>
                    {first}
                </div>
                <div style={use.TOGGLERBOX}>
                    {CHILDS}
                </div>
            </div>
            ]
        } else if (this.state.box === "2") {
            first = CHILDS.shift()
            use = togglerFunction("2", props, state, self)
            styledToggler = [
                <div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                    <div style={use.CLICKBOX} onClick={this.toggle}>
                        {first}
                    </div>
                    <div style={use.TOGGLERBOX}>
                        {CHILDS}
                    </div>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = togglerFunction("3", props, state, self)
            let labels = [];
            let text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i])
                } else {
                    labels.push(CHILDS[i])
                }
            }
            const CHECKS = labels.map((x, i, arr) => {
                return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={use.CHECKSSTYLE} />
            })
            const LABELS = labels.map((x, i, arr) => {
                return <label key={i} style={use.LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
            })
            const TEXT = text.map((x, i, arr) => {
                return (
                    <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                        <p style={use.TEXTBOX}>
                            {x}
                        </p>
                    </div>
                )
            })
            styledToggler = [
                <div key={this.state.keys[0]} style={use.PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                    {CHECKS}
                    <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                        {LABELS}
                    </nav>
                    {TEXT}
                </div>

            ]
        } else if (this.state.box === "4") {
            use = togglerFunction("4", props, state, self)
            let labels = [];
            let text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i])
                } else {
                    labels.push(CHILDS[i])
                }
            }
            const CHECKS = labels.map((x, i, arr) => {
                return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={use.CHECKSSTYLE} />
            })
            const LABELS = labels.map((x, i, arr) => {
                return <label key={i} style={use.LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
            })
            const TEXT = text.map((x, i, arr) => {
                return (
                    <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                        <p style={use.TEXTBOX}>
                            {x}
                        </p>
                    </div>
                )
            })
            styledToggler = [
                <div key={this.state.keys[0]} style={use.PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                    {CHECKS}
                    <nav style={use.LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                        {LABELS}
                    </nav>
                    {TEXT}
                </div>
            ]

        } else {
            first = CHILDS.shift()
            use = togglerFunction("1", props, state, self)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {first}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {CHILDS}
                </div>
            </div>
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
        if (this.state.box === "1") {
            use = togglerFunction("1", props, state, self, show)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.first}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {this.state.childs}
                </div>
            </div>
            ]

        } else if (this.state.box === "2") {
            use = togglerFunction("2", props, state, self, show)
            styledToggler = [
                <div key={this.state.keys[0]} id={this.state.id} style={use.FULLELEMENT} className={this.state.className}>
                    <div style={use.CLICKBOX} onClick={this.toggle}>
                        {this.state.first}
                    </div>
                    <div style={use.TOGGLERBOX}>
                        {this.state.childs}
                    </div>
                </div>
            ]
        } else {
            use = togglerFunction("1", props, state, self, show)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.id} className={this.state.className} >
                <div style={use.CLICKBOX} onClick={this.toggle}>
                    {this.state.first}
                </div>
                <div style={use.TOGGLERBOX}>
                    {this.state.childs}
                </div>
            </div>
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