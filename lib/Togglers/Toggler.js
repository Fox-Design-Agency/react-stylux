import React from 'react';
import '../css/reset.css'
import '../css/animations.css';
import togglerFunction from "./togglerFunctions/togglerFunctions";
export default class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            position: props.position || 'fixed',
            width: props.width,
            height: props.height,
            top: props.top,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            bBorder: props.bBorder,
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            left: props.left,
            right: props.right,
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            boxShadow: props.shadow || '1px 2px 2px black',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            childs: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            box: props.box,
            keys: '',
            styledToggler: '',
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledToggler, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1") {
            use = togglerFunction("1", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                        {CHILDS}
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = togglerFunction("2", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.mainid} style={use.FULLELEMENT} className={this.state.mainClassName}>
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
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
            use = togglerFunction("1", props, state, self)
            styledToggler = [
                <div key={tempKeys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                        {CHILDS}
                    </div>
                </div>
            ]
        }
        this.setState({ childs: CHILDS, keys: tempKeys, styledToggler: styledToggler })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledToggler, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = togglerFunction("1", props, state, self)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {CHILDS}
                </div>
            </div>
            ]
        } else if (this.state.box === "2") {
            use = togglerFunction("2", props, state, self)
            styledToggler = [
                <div key={this.state.keys[0]} id={this.state.mainid} style={use.FULLELEMENT} className={this.state.mainClassName}>
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
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
            use = togglerFunction("1", props, state, self)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {CHILDS}
                </div>
            </div>
            ]
        }
        this.setState({ childs: CHILDS, styledToggler: styledToggler })
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
                    {this.state.buttonText}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {this.state.childs}
                </div>
            </div>
            ]

        } else if (this.state.box === "2") {
            use = togglerFunction("2", props, state, self, show)
            styledToggler = [
                <div key={this.state.keys[0]} id={this.state.mainid} style={use.FULLELEMENT} className={this.state.mainClassName}>
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                        {this.state.childs}
                    </div>
                </div>
            ]
        } else {
            use = togglerFunction("1", props, state, self, show)
            styledToggler = [<div key={this.state.keys[0]} id={this.state.mainid} className={this.state.mainClassName} >
                <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={use.TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
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