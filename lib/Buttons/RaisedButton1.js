import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class RaisedButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            backgroundColor: props.background || 'white',
            backgroundRev: props.background || 'white',
            hovColor: props.hovColor || '#eee',
            color: props.color || 'black',
            frev: props.color || 'black',
            fontSize: props.fontSize,
            onClick: props.onClick,
            hovBackground: props.hovBackground || '#eee',
            hovBoxShadow: props.hovBoxShadow || '0 5px #666',
            boxShadow: props.boxShadow || '0 9px #999',
            boxShadowRev: props.boxShadow || '0 9px #999',
            trandform: props.transform,
            trandformrev: props.transform || 'translateY(-4px)',
            transformOrigin: props.transformOrigin,
            id: props.id,
            classNAme: props.className,
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
                display: 'inline-block',
                padding: '15px 25px',
                fontSize: this.state.fontSize,
                cursor: 'pointer',
                textAlign: 'center',
                outline: 'none',
                color: this.state.color,
                backgroundColor: this.state.backgroundColor,
                borderRadius: '15px',
                boxShadow: this.state.boxShadow,
                transform: this.state.transform,
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
                onMouseEnter={() => this.setState({ backgroundColor: this.state.hovBackground, boxShadow: this.state.hovBoxShadow, transform: 'translateY(4px)' })}
                onMouseLeave={() => this.setState({ backgroundColor: this.state.backgroundRev, boxShadow: this.state.boxShadowRev, transform: this.state.transformrev })}>{this.state.childs[0]}</button>
        )
    }
}