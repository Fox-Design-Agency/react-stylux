import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class HR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width || '100%',
            height: props.height || '5px',
            background: props.background || 'black',
            padding: props.padding,
            margin: props.margin || '5px 0px 5px 0px',
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            border: props.border,
            id: props.id,
            className: props.className,
            transform: props.transform,
            transformOrigin: props.transformOrigin,

        }
    }
    render() {
        const STYLES = {
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            transform: this.state.transform,
            transformOrigin: this.state.transformOrigin,
        }

        return (
            <hr style={STYLES} id={this.state.id} className={this.state.className} />
        )
    }
}