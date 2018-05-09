import React, { Component } from 'react';
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';
import StyleSheet from 'nestingstyles';
import pullQuoteFunction from "./pullquoteFunctions/pullquoteFunctions";
export default class PLQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            blockid: props.blockid,
            textid: props.textid,
            citeid: props.citeid,
            blockClassName: props.blockClassName,
            textClassName: props.textClassName,
            citeClassName: props.citeClassName,
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
            box: props.box,
            styledPullQuote: '',
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledPullQuote, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        const tempkey = Math.random()
        if (this.state.box === "1") {
            use = pullQuoteFunction("1", props, state, self)
            styledPullQuote = [
                <blockquote key={tempkey} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`} >
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName} >{CHILDS[1]}</cite>
                </blockquote>
            ]
        } else if (this.state.box === "2") {
            use = pullQuoteFunction("2", props, state, self)
            styledPullQuote = [
                <blockquote key={tempkey} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote2 ${this.state.blockClassName}`}>
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote2-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName}>{CHILDS[1]}</cite>
                </blockquote>
            ]

        } else {
            use = pullQuoteFunction("custom", props, state, self)
            styledPullQuote = [
                <blockquote key={tempkey} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`}>
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName}>{CHILDS[1]}</cite>
                </blockquote>
            ]
        }
        this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote, keys: tempkey })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledPullQuote, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = pullQuoteFunction("1", props, state, self)
            styledPullQuote = [
                <blockquote key={this.state.keys} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`} >
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName} >{CHILDS[1]}</cite>
                </blockquote>
            ]
        } else if (this.state.box === "2") {
            use = pullQuoteFunction("2", props, state, self)
            styledPullQuote = [
                <blockquote key={this.state.keys} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote2 ${this.state.blockClassName}`}>
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote2-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName}>{CHILDS[1]}</cite>
                </blockquote>
            ]

        } else {
            use = pullQuoteFunction("custom", props, state, self)
            styledPullQuote = [
                <blockquote key={this.state.keys} style={use.PULLQUOTESTYLES.pullquotestyles} id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`}>
                    <p style={use.PULLQUOTESTYLES.text} id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                    <cite style={use.PULLQUOTESTYLES.cite} id={this.state.citeid} className={this.state.citeClassName}>{CHILDS[1]}</cite>
                </blockquote>
            ]
        }
        this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledPullQuote}
            </React.Fragment>
        )
    }
}