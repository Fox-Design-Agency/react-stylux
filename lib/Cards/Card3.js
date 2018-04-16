import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';

export default class Card3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: props.corners,
            height: props.height || '398px',
            width: props.wdith || '250px',
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
        return this.setState({ childs: CHILDS })
    }
    render() {
        const CARDSTYLE = {
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: this.state.boxShadow,
            transition: '0.3s',
            height: this.state.height,
            width: this.state.width,
            borderRadius: this.state.borderRadius,
        }
        const CARDHEADING = {

        }
        const CARDBODY = {

        }
        const CARDCONTENT = {
            textAlign: 'center',
        }
        const ITEM={
            padding: '20px',
            borderBottom: '1px solid #eee'
        }
        return (
            <div style={CARDSTYLE}
            id={this.state.id}
                className={this.state.className}
                onMouseEnter={() => this.setState({ boxShadow: this.state.hovBoxShadow })}
                onMouseLeave={() => this.setState({ boxShadow: this.state.revBoxShadow })}>
                <ul style={CARDCONTENT}>
                <li style={ITEM}>{this.state.childs[0]}</li>
                <li style={ITEM}>{this.state.childs[1]}</li>
                <li style={ITEM}>{this.state.childs[2]}</li>
                <li style={ITEM}>{this.state.childs[3]}</li>
                <li style={ITEM}>{this.state.childs[4]}</li>
                <li style={ITEM}>{this.state.childs[5]}</li>
                <li style={ITEM}>{this.state.childs[6]}</li>
                </ul>
            </div>
        )
    }

}
