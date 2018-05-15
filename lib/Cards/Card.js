import React from 'react';
import MediaQuery from "react-responsive";
import cardFunction from "./cardFunctions/cardFunctions";
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledCard: '',
            keys: '',
            btnOnClick: props.btnOnClick
        }
        this.renderStuff = this.renderStuff.bind(this)
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledCard, use = '';
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
                        use = cardFunction("1", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("1", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("2", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("2", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("3", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{CHILDS[0]}</li>
                                    <li style={use.item}>{CHILDS[1]}</li>
                                    <li style={use.item}>{CHILDS[2]}</li>
                                    <li style={use.item}>{CHILDS[3]}</li>
                                    <li style={use.item}>{CHILDS[4]}</li>
                                    <li style={use.item}>{CHILDS[5]}</li>
                                    <li style={use.item}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{CHILDS[0]}</li>
                                    <li style={use.mditem}>{CHILDS[1]}</li>
                                    <li style={use.mditem}>{CHILDS[2]}</li>
                                    <li style={use.mditem}>{CHILDS[3]}</li>
                                    <li style={use.mditem}>{CHILDS[4]}</li>
                                    <li style={use.mditem}>{CHILDS[5]}</li>
                                    <li style={use.mditem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{CHILDS[0]}</li>
                                    <li style={use.smitem}>{CHILDS[1]}</li>
                                    <li style={use.smitem}>{CHILDS[2]}</li>
                                    <li style={use.smitem}>{CHILDS[3]}</li>
                                    <li style={use.smitem}>{CHILDS[4]}</li>
                                    <li style={use.smitem}>{CHILDS[5]}</li>
                                    <li style={use.smitem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>

                        ]
                    default:
                        use = cardFunction("3", props, state, self)
                        styledCard = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{CHILDS[0]}</li>
                                    <li style={use.item}>{CHILDS[1]}</li>
                                    <li style={use.item}>{CHILDS[2]}</li>
                                    <li style={use.item}>{CHILDS[3]}</li>
                                    <li style={use.item}>{CHILDS[4]}</li>
                                    <li style={use.item}>{CHILDS[5]}</li>
                                    <li style={use.item}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{CHILDS[0]}</li>
                                    <li style={use.mditem}>{CHILDS[1]}</li>
                                    <li style={use.mditem}>{CHILDS[2]}</li>
                                    <li style={use.mditem}>{CHILDS[3]}</li>
                                    <li style={use.mditem}>{CHILDS[4]}</li>
                                    <li style={use.mditem}>{CHILDS[5]}</li>
                                    <li style={use.mditem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{CHILDS[0]}</li>
                                    <li style={use.smitem}>{CHILDS[1]}</li>
                                    <li style={use.smitem}>{CHILDS[2]}</li>
                                    <li style={use.smitem}>{CHILDS[3]}</li>
                                    <li style={use.smitem}>{CHILDS[4]}</li>
                                    <li style={use.smitem}>{CHILDS[5]}</li>
                                    <li style={use.smitem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = cardFunction("1", props, state, self)
                styledCard = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div
                        style={use.cardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.imgstyle} />
                        <div style={use.cardcontent}>
                            <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                            <p style={use.cardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div
                        style={use.mdcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.mdimgstyle} />
                        <div style={use.mdcardcontent}>
                            <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                            <p style={use.mdcardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div
                        style={use.smcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.smimgstyle} />
                        <div style={use.smcardcontent}>
                            <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                            <p style={use.smcardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>

                ]
        }
        this.setState({ childs: CHILDS, styledCard: styledCard, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledCard, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("1", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("1", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("2", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("2", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                                    <p style={use.cardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.mdcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={CHILDS[0]}
                                    alt={CHILDS[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{CHILDS[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("3", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{CHILDS[0]}</li>
                                    <li style={use.item}>{CHILDS[1]}</li>
                                    <li style={use.item}>{CHILDS[2]}</li>
                                    <li style={use.item}>{CHILDS[3]}</li>
                                    <li style={use.item}>{CHILDS[4]}</li>
                                    <li style={use.item}>{CHILDS[5]}</li>
                                    <li style={use.item}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{CHILDS[0]}</li>
                                    <li style={use.mditem}>{CHILDS[1]}</li>
                                    <li style={use.mditem}>{CHILDS[2]}</li>
                                    <li style={use.mditem}>{CHILDS[3]}</li>
                                    <li style={use.mditem}>{CHILDS[4]}</li>
                                    <li style={use.mditem}>{CHILDS[5]}</li>
                                    <li style={use.mditem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{CHILDS[0]}</li>
                                    <li style={use.smitem}>{CHILDS[1]}</li>
                                    <li style={use.smitem}>{CHILDS[2]}</li>
                                    <li style={use.smitem}>{CHILDS[3]}</li>
                                    <li style={use.smitem}>{CHILDS[4]}</li>
                                    <li style={use.smitem}>{CHILDS[5]}</li>
                                    <li style={use.smitem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>

                        ]
                    default:
                        use = cardFunction("3", props, state, self)
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{CHILDS[0]}</li>
                                    <li style={use.item}>{CHILDS[1]}</li>
                                    <li style={use.item}>{CHILDS[2]}</li>
                                    <li style={use.item}>{CHILDS[3]}</li>
                                    <li style={use.item}>{CHILDS[4]}</li>
                                    <li style={use.item}>{CHILDS[5]}</li>
                                    <li style={use.item}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{CHILDS[0]}</li>
                                    <li style={use.mditem}>{CHILDS[1]}</li>
                                    <li style={use.mditem}>{CHILDS[2]}</li>
                                    <li style={use.mditem}>{CHILDS[3]}</li>
                                    <li style={use.mditem}>{CHILDS[4]}</li>
                                    <li style={use.mditem}>{CHILDS[5]}</li>
                                    <li style={use.mditem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{CHILDS[0]}</li>
                                    <li style={use.smitem}>{CHILDS[1]}</li>
                                    <li style={use.smitem}>{CHILDS[2]}</li>
                                    <li style={use.smitem}>{CHILDS[3]}</li>
                                    <li style={use.smitem}>{CHILDS[4]}</li>
                                    <li style={use.smitem}>{CHILDS[5]}</li>
                                    <li style={use.smitem}>{CHILDS[6]}</li>
                                </ul>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = cardFunction("1", props, state, self)
                styledCard = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                        style={use.cardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.imgstyle} />
                        <div style={use.cardcontent}>
                            <h5 style={use.cardheading}>{CHILDS[2]}</h5>
                            <p style={use.cardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                        style={use.mdcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.mdimgstyle} />
                        <div style={use.mdcardcontent}>
                            <h5 style={use.mdcardheading}>{CHILDS[2]}</h5>
                            <p style={use.mdcardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                        style={use.smcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={CHILDS[0]}
                            alt={CHILDS[1]}
                            style={use.smimgstyle} />
                        <div style={use.smcardcontent}>
                            <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                            <p style={use.smcardbody}>{CHILDS[3]}</p>
                        </div>
                    </div></MediaQuery>

                ]
        }
        this.setState({ styledCard: styledCard })
    }
    renderStuff() {
        const props = this.props;
        const state = this.state;
        let styledCard, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("1", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.cardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.mdcardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.smcardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = cardFunction("1", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.cardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.mdcardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.smcardbody}>{this.state.childs[3]}</p>
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("2", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.cardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.mdcardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.smcardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("2", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.imgstyle} />
                                <div style={use.cardcontent}>
                                    <h5 style={use.cardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.cardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.mdbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.mdimgstyle} />
                                <div style={use.mdcardcontent}>
                                    <h5 style={use.mdcardheading}>{this.state.childs[2]}</h5>
                                    <p style={use.mdcardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <img
                                    src={this.state.childs[0]}
                                    alt={this.state.childs[1]}
                                    style={use.smimgstyle} />
                                <div style={use.smcardcontent}>
                                    <h5 style={use.smcardheading}>{CHILDS[2]}</h5>
                                    <p style={use.smcardbody}>{this.state.childs[3]}</p>
                                </div>
                                <button style={use.smbtnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = cardFunction("3", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{this.state.childs[0]}</li>
                                    <li style={use.item}>{this.state.childs[1]}</li>
                                    <li style={use.item}>{this.state.childs[2]}</li>
                                    <li style={use.item}>{this.state.childs[3]}</li>
                                    <li style={use.item}>{this.state.childs[4]}</li>
                                    <li style={use.item}>{this.state.childs[5]}</li>
                                    <li style={use.item}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{this.state.childs[0]}</li>
                                    <li style={use.mditem}>{this.state.childs[1]}</li>
                                    <li style={use.mditem}>{this.state.childs[2]}</li>
                                    <li style={use.mditem}>{this.state.childs[3]}</li>
                                    <li style={use.mditem}>{this.state.childs[4]}</li>
                                    <li style={use.mditem}>{this.state.childs[5]}</li>
                                    <li style={use.mditem}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{this.state.childs[0]}</li>
                                    <li style={use.smitem}>{this.state.childs[1]}</li>
                                    <li style={use.smitem}>{this.state.childs[2]}</li>
                                    <li style={use.smitem}>{this.state.childs[3]}</li>
                                    <li style={use.smitem}>{this.state.childs[4]}</li>
                                    <li style={use.smitem}>{this.state.childs[5]}</li>
                                    <li style={use.smitem}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>
                        ]
                    default:
                        use = cardFunction("3", props, state, self, arguments[0])
                        styledCard = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                                style={use.cardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.cardcontent}>
                                    <li style={use.item}>{this.state.childs[0]}</li>
                                    <li style={use.item}>{this.state.childs[1]}</li>
                                    <li style={use.item}>{this.state.childs[2]}</li>
                                    <li style={use.item}>{this.state.childs[3]}</li>
                                    <li style={use.item}>{this.state.childs[4]}</li>
                                    <li style={use.item}>{this.state.childs[5]}</li>
                                    <li style={use.item}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                                style={use.mdcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.mdcardcontent}>
                                    <li style={use.mditem}>{this.state.childs[0]}</li>
                                    <li style={use.mditem}>{this.state.childs[1]}</li>
                                    <li style={use.mditem}>{this.state.childs[2]}</li>
                                    <li style={use.mditem}>{this.state.childs[3]}</li>
                                    <li style={use.mditem}>{this.state.childs[4]}</li>
                                    <li style={use.mditem}>{this.state.childs[5]}</li>
                                    <li style={use.mditem}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                                style={use.smcardstyle}
                                id={this.state.id}
                                className={this.state.className}
                                onMouseEnter={use.changeHover}
                                onMouseLeave={use.changeHoverBack}>
                                <ul style={use.smcardcontent}>
                                    <li style={use.smitem}>{this.state.childs[0]}</li>
                                    <li style={use.smitem}>{this.state.childs[1]}</li>
                                    <li style={use.smitem}>{this.state.childs[2]}</li>
                                    <li style={use.smitem}>{this.state.childs[3]}</li>
                                    <li style={use.smitem}>{this.state.childs[4]}</li>
                                    <li style={use.smitem}>{this.state.childs[5]}</li>
                                    <li style={use.smitem}>{this.state.childs[6]}</li>
                                </ul>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = cardFunction("1", props, state, self, arguments[0])
                styledCard = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div
                        style={use.cardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={this.state.childs[0]}
                            alt={this.state.childs[1]}
                            style={use.imgstyle} />
                        <div style={use.cardcontent}>
                            <h5 style={use.cardheading}>{this.state.childs[2]}</h5>
                            <p style={use.cardbody}>{this.state.childs[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div
                        style={use.mdcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={this.state.childs[0]}
                            alt={this.state.childs[1]}
                            style={use.mdimgstyle} />
                        <div style={use.mdcardcontent}>
                            <h5 style={use.mdcardheading}>{this.state.childs[2]}</h5>
                            <p style={use.mdcardbody}>{this.state.childs[3]}</p>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div
                        style={use.smcardstyle}
                        id={this.state.id}
                        className={this.state.className}
                        onMouseEnter={use.changeHover}
                        onMouseLeave={use.changeHoverBack}>
                        <img
                            src={this.state.childs[0]}
                            alt={this.state.childs[1]}
                            style={use.smimgstyle} />
                        <div style={use.smcardcontent}>
                            <h5 style={use.smcardheading}>{this.state.childs[2]}</h5>
                            <p style={use.smcardbody}>{this.state.childs[3]}</p>
                        </div>
                    </div></MediaQuery>

                ]
        }
        this.setState({ styledCard: styledCard })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledCard}
            </React.Fragment>
        )
    }
}