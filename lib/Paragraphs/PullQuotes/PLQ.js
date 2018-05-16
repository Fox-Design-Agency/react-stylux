import React from 'react';
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';
import MediaQuery from "react-responsive";
import pullQuoteFunction from "./pullquoteFunctions/pullquoteFunctions";
export default class PLQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.id,
            className: props.className,
            childs: '',
            box: props.box,
            vars: props.vars,
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
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = pullQuoteFunction("1", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.text} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.mdtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.smtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>
                        ]
                    default:
                        use = pullQuoteFunction("1", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.text} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.mdtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.smtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = pullQuoteFunction("2", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>

                        ]
                    default:
                        use = pullQuoteFunction("2", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>

                        ]
                }
                break;
            default:
                use = pullQuoteFunction("2", props, state, self)
                styledPullQuote = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><blockquote
                        style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.cite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><blockquote
                        style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.mdcite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><blockquote
                        style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.smcite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>

                ]
        }
        this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledPullQuote, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = pullQuoteFunction("1", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.text} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.mdtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.smtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>
                        ]
                    default:
                        use = pullQuoteFunction("1", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.text} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.mdtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote1 ${this.state.className}`} >
                                <p style={use.smtext} className={`pullQuote1-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = pullQuoteFunction("2", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>

                        ]
                    default:
                        use = pullQuoteFunction("2", props, state, self)
                        styledPullQuote = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><blockquote
                                style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.cite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><blockquote
                                style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.mdcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><blockquote
                                style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                                <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                                <cite style={use.smcite}>{CHILDS[1]}</cite>
                            </blockquote></MediaQuery>

                        ]
                }
                break;
            default:
                use = pullQuoteFunction("2", props, state, self)
                styledPullQuote = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><blockquote
                        style={use.pullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.text} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.cite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><blockquote
                        style={use.mdpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.mdtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.mdcite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><blockquote
                        style={use.smpullquotestyles} id={this.state.id} className={`pullQuote2 ${this.state.className}`}>
                        <p style={use.smtext} className={`pullQuote2-text`}>{CHILDS[0]}</p>
                        <cite style={use.smcite}>{CHILDS[1]}</cite>
                    </blockquote></MediaQuery>

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