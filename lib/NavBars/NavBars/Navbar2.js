import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';

export default class Navbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            left: props.left || '-100px',
            leftRev: props.left || '-100px',
            lefthov: '0',
            left1: props.left || '-100px',
            left2: props.left || '-100px',
            left3: props.left || '-100px',
            left4: props.left || '-100px',
            left5: props.left || '-100px',
            left6: props.left || '-100px',
            left7: props.left || '-100px',
            left8: props.left || '-100px',
            left9: props.left || '-100px',
        }
    }
    componentDidMount() {

        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {

        const CHILDS = React.Children.toArray(newProps.children)

        return this.setState({ childs: CHILDS })
    }


    render() {
        const NAVSTYLES = {
            position: 'absolute',
            width: '100%',
        }

        const FIRST = {
            top: '0px',
            position: 'absolute',
            left: this.state.left1,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#4CAF50',
            transition: '0.4s',
        }
        const SECOND = {
            top: '60px',
            position: 'absolute',
            left: this.state.left2,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#2196F3',
            transition: '0.4s',

        }
        const THIRD = {
            top: '120px',
            position: 'absolute',
            left: this.state.left3,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#f44336',
            transition: '0.4s',
        }
        const FOURTH = {
            top: '180px',
            position: 'absolute',
            left: this.state.left4,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#555',
            transition: '0.4s',
        }
        const FIFTH = {
            top: '240px',
            position: 'absolute',
            left: this.state.left5,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#4CAF50',
            transition: '0.4s',
        }
        const SIXTH = {
            top: '300px',
            position: 'absolute',
            left: this.state.left6,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#2196F3',
            transition: '0.4s',
        }
        const SEVENTH = {
            top: '360px',
            position: 'absolute',
            left: this.state.left7,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#f44336',
            transition: '0.4s',
        }
        const EIGTH = {
            top: '420px',
            position: 'absolute',
            left: this.state.left8,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#555',
            transition: '0.4s',
        }
        const NINTH = {
            top: '480px',
            position: 'absolute',
            left: this.state.left9,
            padding: '15px',
            width: '120px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            backgroundColor: '#4CAF50',
            transition: '0.4s',
        }
        return (
            <div style={NAVSTYLES}>
                {this.state.childs[0] !== undefined ? <div style={FIRST}
                    onMouseEnter={() => this.setState({ left1: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left1: this.state.leftRev })}>{this.state.childs[0]}</div> : ''}
                {this.state.childs[1] !== undefined ? <div style={SECOND}
                    onMouseEnter={() => this.setState({ left2: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left2: this.state.leftRev })}>{this.state.childs[1]}</div> : ''}
                {this.state.childs[2] !== undefined ? <div style={THIRD}
                    onMouseEnter={() => this.setState({ left3: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left3: this.state.leftRev })}>{this.state.childs[2]}</div> : ''}
                {this.state.childs[3] !== undefined ? <div style={FOURTH}
                    onMouseEnter={() => this.setState({ left4: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left4: this.state.leftRev })}>{this.state.childs[3]}</div> : ''}
                {this.state.childs[4] !== undefined ? <div style={FIFTH}
                    onMouseEnter={() => this.setState({ left5: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left5: this.state.leftRev })}>{this.state.childs[4]}</div> : ''}
                {this.state.childs[5] !== undefined ? <div style={SIXTH}
                    onMouseEnter={() => this.setState({ left6: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left6: this.state.leftRev })}>{this.state.childs[5]}</div> : ''}
                {this.state.childs[6] !== undefined ? <div style={SEVENTH}
                    onMouseEnter={() => this.setState({ left7: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left7: this.state.leftRev })}>{this.state.childs[6]}</div> : ''}
                {this.state.childs[7] !== undefined ? <div style={EIGTH}
                    onMouseEnter={() => this.setState({ left8: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left8: this.state.leftRev })}>{this.state.childs[7]}</div> : ''}
                {this.state.childs[8] !== undefined ? <div style={NINTH}
                    onMouseEnter={() => this.setState({ left9: this.state.lefthov })}
                    onMouseLeave={() => this.setState({ left9: this.state.leftRev })}>{this.state.childs[8]}</div> : ''}
            </div>
        )
    }
}