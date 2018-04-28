import React, { Component } from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
/* Start of Square Images */
export default class SquareImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            margin: props.margin || '5px',
            padding: props.padding,
            boxShadow: props.shadow,
            boxShadowRev: props.shadow,
            hoverShadow: props.hovShadow,
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
        const IMAGE = StyleSheet.create({
            squareimg: {
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
                boxShadow: this.state.boxShadow,
                margin: this.state.margin,
                padding: this.state.padding,
            },
            hoverStyle: {
                boxShadow: this.state.hoverShadow
            },
            '@media screen and (max-width: 768px)': {
                squareimg: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                squareimg: {
                    display: this.state.mdDis,
                }
            },
        })
        return (
            <React.Fragment>
                <img style={IMAGE.squareimg} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]}
                    onMouseEnter={() => this.setState({ boxShadow: IMAGE.hoverStyle.boxShadow })}
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })} />
            </React.Fragment>
        )
    }
}