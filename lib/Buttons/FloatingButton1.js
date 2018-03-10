import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

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
            onClick: '',
            boxShadow: props.boxShadow ,
            revBoxShadow: props.boxShadow,
            hovBoxShadow: props.hovBoxShadow || '0 5px 7px 0 black, 0 10px 20px 0 black',


        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps){
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
            boxShadow: this.state.boxShadow,
        }
        return (
            <button style={BUTTONSTYLE}
                onClick={this.state.onClick}
                onMouseEnter={() => this.setState({ boxShadow: this.state.hovBoxShadow})}
                onMouseLeave={() => this.setState({ boxShadow: this.state.revBoxShadow})}>{this.state.childs[0]}</button>
        )
    }
}