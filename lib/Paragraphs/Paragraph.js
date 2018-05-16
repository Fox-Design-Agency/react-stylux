import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import MediaQuery from "react-responsive";
import paragraphFunction from "./paragraphFunctions/paragraphFunctions";
export default class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
            childs: '',
            paragraphStyle: '',
            box: props.box,
            vars: props.vars,
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledParagraph, use = '';
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
                        use = paragraphFunction("1", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("1", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("2", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("2", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("3", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("3", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("4", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("4", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("5", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("5", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            default:
                use = paragraphFunction("1", props, state, self)
                styledParagraph = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><p
                        style={use.paragraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><p
                        style={use.mdparagraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><p
                        style={use.smparagraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>
                ]
        }
        this.setState({ childs: CHILDS, paragraphStyle: styledParagraph, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledParagraph, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("1", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("1", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("2", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("2", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("3", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("3", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("4", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("4", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = paragraphFunction("5", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                    default:
                        use = paragraphFunction("5", props, state, self)
                        styledParagraph = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                                style={use.paragraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                                style={use.mdparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                                style={use.smparagraph} id={this.state.id} className={this.state.className}
                            >{CHILDS}</p></MediaQuery>
                        ]
                }
                break;
            default:
                use = paragraphFunction("1", props, state, self)
                styledParagraph = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><p
                        style={use.paragraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><p
                        style={use.mdparagraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><p
                        style={use.smparagraph} id={this.state.id} className={this.state.className}
                    >{CHILDS}</p></MediaQuery>
                ]
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