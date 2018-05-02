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
            type: props.type,
            id: props.id,
            className: props.className,
            width: props.width,
            height: props.height,
            fontSize: props.fontSize || '20px',
            color: props.color || '#000000',
            hoverColor: props.hover || 'white',
            hoverBackground: props.hoverBackground || '#000000',
            revColor: props.color || '#000000',
            frev: props.color || 'white',
            background: props.background || '#ffffff',
            backgroundColor: props.background || 'white',
            blockBackground: props.background || "black",
            revBackground: props.background || '#ffffff',
            borderRadius: props.borderRadius || '28px',
            border: props.border || 'solid #000000 2px',
            padding: props.padding || '10px 20px 10px 20px',
            margin: props.margin || "0 0 17px 0",
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            trandform: props.transform,
            trandformrev: props.transform || 'translateY(-4px)',
            hovBackground: props.hovBackground || '#eee',
            hovBoxShadow: props.hovBoxShadow || '0 5px #666',
            floatBoxShadow: props.boxShadow,
            boxShadow: props.boxShadow || '0 9px #999',
            boxShadowRev: props.boxShadow || '0 9px #999',
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            buttonStyle: '',
            childs: '',
        }
        this.renderStuff = this.renderStuff.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        const CHILDS = React.Children.toArray(this.props.children)
        let styledButton, use = '';
        const self = this;
        if (this.state.type === "flat") {
            use = buttonFunction("flat", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseOut={use.changeHoverBack}
                >{CHILDS[0]}</button>
            ]
        } else if (this.state.type === "raised") {
            use = buttonFunction("raised", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.type === "floating") {
            use = buttonFunction("floating", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.type === "block") {
            use = buttonFunction("block", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.type === "text") {
            use = buttonFunction("text", props, state, self)
            styledButton = [
                <button key={Math.random()}
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
                <button key={Math.random()} style={use.BUTTONSTYLES.buttonStyles} id={this.state.id} className={this.state.className} onClick={this.state.onClick} onMouseEnter={use.changeHover} onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        }

        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use })

    }

    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        const CHILDS = React.Children.toArray(newProps.children)
        let styledButton, use = '';
        let self = this;
        if (this.state.type === "flat") {
            use = buttonFunction("flat", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}
                >{CHILDS[0]}</button>
            ]
        } else if (this.state.type === "raised") {
            use = buttonFunction("raised", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.type === "floating") {
            use = buttonFunction("floating", props, state, self)
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]

        } else if (this.state.type === "block") {
            use = buttonFunction("block", props, state, self)
            styledButton = [
                <button style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        } else if (this.state.type === "text") {
            use = buttonFunction("text", props, state, self)
            styledButton = [
                <button key={Math.random()}
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
                <button key={Math.random()} style={use.BUTTONSTYLES.buttonStyles} id={this.state.id} className={this.state.className} onClick={this.state.onClick} onMouseEnter={use.changeHover} onMouseLeave={use.changeHoverBack}>{CHILDS[0]}</button>
            ]
        }
        this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use })
    }
    renderStuff() {
        const props = this.newProps;
        const state = this.state;
        let styledButton, use = '';
        const self = this;
        if (this.state.type === "flat") {
            use = buttonFunction("flat", props, state, self, arguments[0], arguments[1])
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id} className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseOut={use.changeHoverBack}
                >{this.state.childs[0]}</button>
            ]
        } else if (this.state.type === "raised") {
            use = buttonFunction("raised", props, state, self, arguments[0], arguments[1], arguments[2])
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]

        } else if (this.state.type === "floating") {
            use = buttonFunction("floating", props, state, self, arguments[0])
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]

        } else if (this.state.type === "block") {
            use = buttonFunction("block", props, state, self, arguments[0], arguments[1])
            styledButton = [
                <button key={Math.random()}
                    style={use.BUTTONSTYLES.buttonStyles}
                    id={this.state.id}
                    className={this.state.className}
                    onClick={this.state.onClick}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>{this.state.childs[0]}</button>
            ]
        } else if (this.state.type === "text") {
            use = buttonFunction("text", props, state, self, arguments[0])
            styledButton = [
                <button key={Math.random()}
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
                <button key={Math.random()}
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