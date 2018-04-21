import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class P5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font,
            fontSize: props.size || '1.333em',
            smFontSize: props.smSize || '1.3em',
            mdFontSize: props.mdSize || '1.3em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            fontVariant: props.variant,
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '5px',
            margin: props.margin || '1px',
            width: props.width,
            height: props.height,
            maxWidth: props.maxW,
            maxHeight: props.maxH,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
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
            hoverColor: props.hovColor,
            wordWrap: props.wordWrap || "break-word",
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
        const PARAGRAPH = StyleSheet.create({
            paragraph: {
                width: this.state.width,
                height: this.state.height,
                maxWidth: this.state.maxWidth,
                maxHeight: this.state.maxHeight,
                color: this.state.color,
                textShadow: this.state.textShadow,
                borderLeft: this.state.bLeft,
                borderRight: this.state.bRight,
                borderTop: this.state.bTop,
                borderBottom: this.state.bBottom,
                border: this.state.border,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                fontVariant: this.state.fontVariant,
                display: this.state.display,
                alignItems: this.state.align,
                justifyContent: this.state.align,
                textAlign: this.state.textAlign,
                padding: this.state.padding,
                margin: this.state.margin,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
                flex: 1,
                flexWrap: "wrap",
                wordWrap: this.state.wordWrap,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                paragraph: {
                    display: this.state.smDis,
                    color: this.state.color,
                    fontSize: this.state.smFontSize
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                paragraph: {
                    display: this.state.mdDis,
                    color: this.state.color,
                    fontSize: this.state.mdFontSize
                }
            },
        })
        return (
            <React.Fragment>
                <p style={PARAGRAPH.paragraph} id={this.state.id} className={this.state.className}
                    onMouseEnter={() => this.setState({ color: PARAGRAPH.hoverStyle.color })}
                    onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{this.state.childs}</p>
            </React.Fragment>
        )
    }
}