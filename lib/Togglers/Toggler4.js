import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

export default class Toggler4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler2',
            position: props.position,
            textvertical: props.textVertical || 'center',
            texthorizontal: props.textHorizontal || 'center',
            textheight: props.textHeight || '200px',
            textwidth: props.textWidth || '300px',
            boxBorderLeft: props.boxBorderLeft,
            boxBorderRight: props.boxBorderRight,
            boxBorderTop: props.boxBorderTop,
            boxBorderBottom: props.boxBorderBottom,
            boxBorder: props.boxBorder || '1px solid black',
            boxMargin: props.boxMArgin || '5px',
            labels: [],
            text: [],
            mainid: props.mainid,
            toggleid: props.toggleid,
            panelClassName: props.panelClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        let labels = [];
        let text = [];
        for (var i = 0; i < CHILDS.length; i += 1) {
            if ((i + 1) % 2 === 0) {
                text.push(CHILDS[i])
            } else {
                labels.push(CHILDS[i])
            }
        }
        this.setState({
            labels: labels,
            text: text
        })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        let labels = [];
        let text = [];
        for (var i = 0; i < CHILDS.length; i += 1) {
            if ((i + 1) % 2 === 0) {
                text.push(CHILDS[i])
            } else {
                labels.push(CHILDS[i])
            }
        }
        this.setState({
            labels: labels,
            text: text
        })
    }

    render() {
        const CHECKSSTYLE = {
            display: "none",
        }
        const PANELS = {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            top: this.state.top,
            overflow: 'hidden',
        }
        const TEXTBOX = {
            height: this.state.textheight,
            width: this.state.textwidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: this.state.texthorizontal,
            justifyContent: this.state.textvertical,
            margin: this.state.boxMargin,
            borderLeft: this.state.borderLeft,
            borderRight: this.state.borderRight,
            borderTop: this.state.borderTop,
            borderBottom: this.state.borderBottom,
            border: this.state.boxBorder,
        }
        const LABELSSTYLES = {
            cursor: 'pointer',
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            margin: '3px',
            padding: '5px',
            width: '150px',
            trasition: '0.3s',
        }
        const LABELTITLES = {
            display: 'flex',
            flexDirection: 'column',


        }

        const CHECKS = this.state.labels.map((x, i, arr) => {
            return <input key={i} id={'Vtab' + (i + 1)} type="radio" name="Vpanel_select" defaultChecked style={CHECKSSTYLE} />
        })
        const LABELS = this.state.labels.map((x, i, arr) => {
            return <label key={i} style={LABELSSTYLES} htmlFor={'Vtab' + (i + 1)}>{x}</label>
        })
        const TEXT = this.state.text.map((x, i, arr) => {
            return (
                <div key={i} id={'Vpanel' + (i + 1)} className={this.state.panelClassName}>
                    <p style={TEXTBOX}>
                        {x}
                    </p>
                </div>
            )
        })

        return (
            <div style={PANELS} id={this.state.mainid} className={`vpanels ${this.state.mainClassName}`}>
                {CHECKS}
                <nav style={LABELTITLES} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {LABELS}
                </nav>
                {TEXT}
            </div>
        )
    }
}
