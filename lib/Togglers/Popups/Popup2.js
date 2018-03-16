import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/animations.css';

export default class Popup2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            childs: '',
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
        const POPUPCLICK = {
            cursor: 'pointer',
        }
        const POPUPSTYLE = {
            visibility: this.state.visibility,
            backgroundColor: '#333',
            minWidth: '250px',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '2px',
            padding: '16px',
            position: 'absolute',
            // zIndex: '1',
            // left: '50%',
        }
        return (
            <div style={POPUPCLICK}
                onMouseEnter={() => this.setState({ visibility: 'visible' })}
                onMouseLeave={() => this.setState({ visibility: 'hidden' })}>
                {this.state.childs[1]}
                <div style={POPUPSTYLE}>
                    {this.state.childs[0]}
                </div>
            </div>
        )
    }
}