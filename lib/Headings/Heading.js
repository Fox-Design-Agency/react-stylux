import React from "react";
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import heading1Function from "./headingFunctions/heading1Functions";
import heading2Function from "./headingFunctions/heading2Functions";
import heading3Function from "./headingFunctions/heading3Functions";
import heading4Function from "./headingFunctions/heading4Functions";
import heading5Function from "./headingFunctions/heading5Functions";
import heading6Function from "./headingFunctions/heading6Functions";

export default class H extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
            childs: '',
            keys: '',
            styledHeading: '',
            box: props.box,
            vars: props.vars
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHeading, use, curs = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        if (this.state.hoverColor) {
            curs = "pointer"
            this.setState({ cursor: curs })
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = heading1Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>
                        ]
                        break;
                    case "2":
                        use = heading1Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading1Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[3]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading1Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>
                        ]

                        break;
                    default:
                        use = heading1Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={tempkeys[3]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                }
                break;

            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = heading2Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading2Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}> <h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}> <h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}> <h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading2Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading2Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;

                    default:
                        use = heading2Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                }
                break;

            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = heading3Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading3Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading3Function("3", props, state, self)

                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading3Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]

                        break;
                    default:
                        use = heading3Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>


                        ]
                }
                break;
            case "4":

                switch (this.state.vars) {
                    case "1":
                        use = heading4Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading4Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading4Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>
                        ]

                        break;
                    case "4":
                        use = heading4Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>
                        ]

                        break;
                    default:
                        use = heading4Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = heading5Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading5Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>
                        ]
                        break;
                    case "3":
                        use = heading5Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading5Function("4", props, state, self)

                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>


                        ]
                        break;
                    default:
                        use = heading5Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>
                        ]
                }
                break;

            case "6":
                switch (this.state.vars) {
                    case "1":
                        use = heading6Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>


                        ]
                        break;
                    case "2":
                        use = heading6Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading6Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>


                        ]
                        break;
                    case "4":
                        use = heading6Function("4", props, state, self)

                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                        break;

                    default:
                        use = heading6Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,

                            <MediaQuery key={tempkeys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                }
                break;
            default:
                use = heading3Function("2", props, state, self)
                styledHeading = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>
                ]
        }


        this.setState({
            childs: CHILDS,
            keys: tempkeys,
            styledHeading: styledHeading
        })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHeading, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        let curs = ''
        if (this.state.hoverColor) {
            curs = "pointer"
            this.setState({ cursor: curs })
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = heading1Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>
                        ]
                        break;
                    case "2":
                        use = heading1Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading1Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[3]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading1Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>
                        ]

                        break;
                    default:
                        use = heading1Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h1 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} minWidth={768} maxWidth={1223}><h1 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>,
                            <MediaQuery key={this.state.keys[3]} maxWidth={767}><h1 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1></MediaQuery>

                        ]
                }
                break;

            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = heading2Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading2Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}> <h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}> <h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}> <h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading2Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading2Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                        break;

                    default:
                        use = heading2Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h2 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h2 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h2 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2></MediaQuery>

                        ]
                }
                break;

            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = heading3Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading3Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading3Function("3", props, state, self)

                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading3Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>

                        ]

                        break;
                    default:
                        use = heading3Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>


                        ]
                }
                break;
            case "4":

                switch (this.state.vars) {
                    case "1":
                        use = heading4Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading4Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading4Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>
                        ]

                        break;
                    case "4":
                        use = heading4Function("4", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>
                        ]

                        break;
                    default:
                        use = heading4Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h4 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h4 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h4 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4></MediaQuery>

                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = heading5Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>

                        ]
                        break;
                    case "2":
                        use = heading5Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>
                        ]
                        break;
                    case "3":
                        use = heading5Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>

                        ]
                        break;
                    case "4":
                        use = heading5Function("4", props, state, self)

                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>


                        ]
                        break;
                    default:
                        use = heading5Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h5 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h5 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h5 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5></MediaQuery>
                        ]
                }
                break;

            case "6":
                switch (this.state.vars) {
                    case "1":
                        use = heading6Function("1", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>


                        ]
                        break;
                    case "2":
                        use = heading6Function("2", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                        break;
                    case "3":
                        use = heading6Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>


                        ]
                        break;
                    case "4":
                        use = heading6Function("4", props, state, self)

                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                        break;

                    default:
                        use = heading6Function("3", props, state, self)
                        styledHeading = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><h6 style={use.heading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h6 style={use.mdheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>,

                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><h6 style={use.smheading} id={this.state.id} className={this.state.className}
                                onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6></MediaQuery>

                        ]
                }
                break;
            default:
                use = heading3Function("2", props, state, self)
                styledHeading = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><h3 style={use.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><h3 style={use.mdheading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><h3 style={use.smheading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3></MediaQuery>
                ]
        }

        return this.setState({ childs: CHILDS, styledHeading: styledHeading })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledHeading}
            </React.Fragment>
        )
    }
}
