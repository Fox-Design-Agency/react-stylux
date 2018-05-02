import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font,
            fontSize: props.size,
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
            paragraphStyle: '',
            type: props.type,
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledParagraph, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        if (this.state.type === "1") {
            use = paragraphFunction("1", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "2") {
            use = paragraphFunction("2", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "3") {
            use = paragraphFunction("3", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]

        } else if (this.state.type === "4") {
            use = paragraphFunction("4", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "5") {
            use = paragraphFunction("5", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else {
            use = paragraphFunction("custom", props, state, self)

            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        }
        this.setState({ childs: CHILDS, paragraphStyle: styledParagraph })
    }
    componentWillReceiveProps(newProps) {
        const props = this.newProps;
        const state = this.state;
        let styledParagraph, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.type === "1") {
            use = paragraphFunction("1", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "2") {
            use = paragraphFunction("2", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "3") {
            use = paragraphFunction("3", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]

        } else if (this.state.type === "4") {
            use = paragraphFunction("4", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.type === "5") {
            use = paragraphFunction("5", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else {
            use = paragraphFunction("custom", props, state, self)
            styledParagraph = [
                <p key={Math.random()}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        }
        this.setState({ childs: CHILDS, paragraphStyle: styledParagraph })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.paragraphStyle}
            </React.Fragment>
        )
    }
}