import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';

export default class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            btnText: props.btnText || 'Contact',
            btnOnClick: props.btnClick,
            borderRadius: props.corners,

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
        const CARDSTYLE = {
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: this.state.boxShadow,
            transition: '0.3s',
            borderRadius: this.state.borderRadius,
        }
        const IMGSTYLE = {
            height: '150px',
            width: '250px',
        }
        const CARDHEADING = {
            textAlign: "center",
            fontWeight: "900",
            margin: "2px",
            maxWidth: "250px"
        }
        const CARDBODY = {
             display: 'flex',
            flexDirection: 'column',
            padding: '2px 16px',
            wordWrap: "break-word",
            maxWidth: "250px",
            maxHeight: "175px",
            overflow: "hidden"
        }
        const CARDCONTENT = {
            display: 'flex',
            flexDirection: 'column',
            height: '175px',
        }
        const BTNSTYLE = {
            backgroundColor: 'black',
            color: 'white',
            height: '30px',
            border: 'none',
            cursor: 'pointer',
        }
        return (
            <div style={CARDSTYLE}
                onMouseEnter={() => this.setState({ boxShadow: this.state.hovBoxShadow })}
                onMouseLeave={() => this.setState({ boxShadow: this.state.revBoxShadow })}>
                <img
                    src={this.state.childs[0]}
                    alt={this.state.childs[1]}
                    style={IMGSTYLE} />
                <div style={CARDCONTENT}>
                    <h5 style={CARDHEADING}>{this.state.childs[2]}</h5>
                    <p style={CARDBODY}>{this.state.childs[3]}</p>
                </div>
                <button style={BTNSTYLE} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
            </div>
        )
    }

}