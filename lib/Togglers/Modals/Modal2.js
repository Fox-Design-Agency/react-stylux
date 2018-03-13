import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/animations.css';

export default class Modul2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: [],
            buttonText: props.buttonText || 'Modal 2',
            show: false,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const MODAL = {
            display: this.state.show ? 'flex' : 'none',
            position: 'fixed',
            zIndex: '1',
            right: '0',
            top: '0',
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
            backgroundColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(0,0,0,0.4)',
        }
        const MODALCONTENT = {
            backgroundColor: '#fff',
            margin: '15% auto',
            padding: '20px',
            border: '1px solid #888',
            width: '80%',
        }
        const CLOSEBTN = {
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer',
        }
        const OPENERBTN = {
            cursor: 'pointer',

        }
        return (
            <div>
                <div style={OPENERBTN} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={MODAL} onClick={this.toggle}>
                    <div style={MODALCONTENT}>
                        <span style={CLOSEBTN} onClick={this.toggle}>&times;</span>
                        {this.state.childs}
                    </div>
                </div>
            </div>
        )
    }
}