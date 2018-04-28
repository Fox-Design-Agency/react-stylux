import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class FloatingButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            backgroundColor: props.background || 'black',
            colorRev: props.background || 'black',
            hovColor: props.hovColor || '#eee',
            color: props.color || 'white',
            frev: props.color || 'white',
            fontSize: props.fontSize,
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        this.setState({ childs: CHILDS })
    }

    render() {
        const BUTTONSTYLE = StyleSheet.create({
            buttonstyle: {
                width: '100%',
                display: 'block',
                border: 'none',
                backgroundColor: this.state.backgroundColor,
                padding: '14px 28px',
                fontSize: this.state.fontSize,
                cursor: 'pointer',
                textAlign: 'center',
                color: this.state.color,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin,
            },
            '@media screen and (max-width: 768px)': {
                buttonstyle: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                buttonstyle: {
                    display: this.state.mdDis,
                }
            },
        })
        return (
            <button style={BUTTONSTYLE.buttonstyle}
                id={this.state.id}
                className={this.state.className}
                onClick={this.state.onClick}
                onMouseEnter={() => this.setState({ backgroundColor: this.state.hovColor, color: this.state.colorRev })}
                onMouseLeave={() => this.setState({ backgroundColor: this.state.colorRev, color: this.state.frev })}>{this.state.childs[0]}</button>
        )
    }
}
