import React from 'react';
import MediaQuery from "react-responsive";

export default class Block2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: '',
            styledBlock: ''
        }
    }
    componentDidMount() {
        let tempkeys = Math.random()
        const block2 = {
            width: '100px',
            height: '100px',
            background: 'black',
            margin: '5px auto',
        }
        let styledBlock = [
                <div key={tempkeys} style={block2} />
        ]
        this.setState({ keys: tempkeys, styledBlock: styledBlock })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledBlock}
            </React.Fragment>
        )
    }
}