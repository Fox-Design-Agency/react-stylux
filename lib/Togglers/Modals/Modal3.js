import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/animations.css';

export default class Modul3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: [],
            buttonText: props.buttonText || 'Modal 3',
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
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            margin: 'auto',
            padding: '0',
            border: '1px solid #888',
            width: '80%',
        }
        const MODALHEADER = {
            padding: '2px 16px',
            backgroundColor: '#eee',
            color: 'white'
        }
        const MODALBODY = {
            padding: '2px 16px',
        }
        const MODALFOOTER = {
            padding: '2px 16px',
            position: 'relative',
            backgroundColor: '#eee',
            color: 'white',
            bottom: '0',
        }
        const CLOSEBTN = {
            color: '#000',
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
                        <div style={MODALHEADER}>
                            <span style={CLOSEBTN} onClick={this.toggle}>&times;</span>
                            {this.state.childs[0]}
                        </div>
                        <div style={MODALBODY}>
                            {this.state.childs[1]}
                        </div>
                        <div style={MODALFOOTER}>
                            {this.state.childs[2]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}