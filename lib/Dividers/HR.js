import React from 'react';
import MediaQuery from "react-responsive";
import '../css/reset.css';
import '../css/animations.css';
import hrFunction from "./hrFunctions/hrFunctions";
export default class HR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledHR: ''

        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHR, use = '';
        const self = this;
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = hrFunction("1", props, state, self)
                        styledHR = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                        ]
                    default:
                        use = hrFunction("1", props, state, self)
                        styledHR = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                        ]
                }
                break;
            default:
                use = hrFunction("1", props, state, self)
                styledHR = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                ]
        }

        this.setState({ styledHR: styledHR, keys: tempkeys })
    }

    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHR, use = '';
        const self = this;

        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = hrFunction("1", props, state, self)
                        styledHR = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                        ]
                    default:
                        use = hrFunction("1", props, state, self)
                        styledHR = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                        ]
                }
                break;
            default:
                use = hrFunction("1", props, state, self)
                styledHR = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><hr style={use.STYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><hr style={use.mdSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><hr style={use.smSTYLES} id={this.state.id} className={this.state.className} /></MediaQuery>
                ]
        }

        this.setState({ styledHR: styledHR })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledHR}
            </React.Fragment>
        )
    }
}