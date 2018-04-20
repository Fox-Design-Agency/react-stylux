import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class A extends Component {
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
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({
            childs: CHILDS
        })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }

    render() {
        const ASTYLE = StyleSheet.create({
            astyle: {
                width: this.state.width,
                height: this.state.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
            },
            '@media screen and (max-width: 440px)': {
                astyle: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                astyle: {
                    display: this.state.mdDis,
                }
            },
        })
        return (
            <a style={ASTYLE.astyle} href={this.state.href} target={this.state.target} rel={this.state.rel}>{this.state.childs}</a>
        )
    }
}