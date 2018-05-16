import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            href: props.to || "#",
            childs: '',
            width: props.width,
            height: props.height,
            target: props.target,
            rel: props.rel,
            fontSize: props.fontSize,
            smDis: props.smDis,
            mdDis: props.mdDis,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledA: '',
            keys:''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }


        let astyle = {
            width: this.state.width,
            height: this.state.height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }
        let smastyle = {
            display: this.state.smDis,
            width: this.state.width,
            height: this.state.height,
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }
        let mdastyle = {
            display: this.state.mdDis,
            width: this.state.width,
            height: this.state.height,
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }

        let styledA = [
            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><a style={astyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>,
            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><a style={mdastyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>,
            <MediaQuery key={tempkeys[2]} maxWidth={767}><a style={smastyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>

        ]
        this.setState({
            childs: CHILDS,
            styledA: styledA,
            keys: tempkeys
        })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
         let astyle = {
            width: this.state.width,
            height: this.state.height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }
        let smastyle = {
            display: this.state.smDis,
            width: this.state.width,
            height: this.state.height,
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }
        let mdastyle = {
            display: this.state.mdDis,
            width: this.state.width,
            height: this.state.height,
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }

        let styledA = [
            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><a style={astyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>,
            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><a style={mdastyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>,
            <MediaQuery key={this.state.keys[2]} maxWidth={767}><a style={smastyle} href={this.state.href} target={this.state.target} rel={this.state.rel}
                id={this.state.id}
                className={this.state.className}>{CHILDS}</a></MediaQuery>

        ]
        this.setState({
            childs: CHILDS,
            styledA: styledA
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledA}
            </React.Fragment>
        )
    }
}