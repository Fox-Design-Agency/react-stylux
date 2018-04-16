import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class RaisedButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            backgroundColor: props.background || 'white',
            colorRev: props.background || 'white',
            hovColor: props.hovColor || '#eee',
            color: props.color || 'black',
            frev: props.color || 'black',
            fontSize: props.fontSize,
            onClick: '',
            id: props.id,
            className: props.className,


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
        const BUTTONSTYLE = {
            width: this.state.width,
            display: 'block',
            border: 'none',
            backgroundColor: this.state.backgroundColor,
            padding: '14px 28px',
            fontSize: this.state.fontSize,
            cursor: 'pointer',
            textAlign: 'center',
            color: this.state.color,
        }
        return (
            <button style={BUTTONSTYLE}
                id={this.state.id}
                className={this.state.className}
                onClick={this.state.onClick}
                onMouseEnter={() => this.setState({ backgroundColor: this.state.hovColor })}
                onMouseLeave={() => this.setState({ backgroundColor: this.state.colorRev })}>{this.state.childs[0]}</button>
        )
    }
}