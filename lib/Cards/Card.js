import React, { Component } from 'react';
import '../css/reset.css'
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
import cardFunction from "./cardFunctions/cardFunctions";
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: props.corners,
            id: props.id,
            className: props.className,
            smDis: props.smDis,
            mdDis: props.mdDis,
            box: props.box,
            styledCard: '',

        }
        this.renderStuff = this.renderStuff.bind(this)
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledCard, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        if (this.state.box === "1") {
            use = cardFunction("1", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = cardFunction("2", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                    <button style={use.CARDSTYLE.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = cardFunction("3", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <ul style={use.CARDSTYLE.cardcontent}>
                        <li style={use.CARDSTYLE.item}>{CHILDS[0]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[1]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[2]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[3]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[4]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[5]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[6]}</li>
                    </ul>
                </div>
            ]
        } else {
            use = cardFunction("custom", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                </div>
            ]
        }
        this.setState({ childs: CHILDS, styledCard: styledCard })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledCard, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = cardFunction("1", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = cardFunction("2", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                    <button style={use.CARDSTYLE.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = cardFunction("3", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <ul style={use.CARDSTYLE.cardcontent}>
                        <li style={use.CARDSTYLE.item}>{CHILDS[0]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[1]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[2]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[3]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[4]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[5]}</li>
                        <li style={use.CARDSTYLE.item}>{CHILDS[6]}</li>
                    </ul>
                </div>
            ]
        } else {
            use = cardFunction("custom", props, state, self)
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{CHILDS[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{CHILDS[3]}</p>
                    </div>
                </div>
            ]
        }
        return this.setState({ childs: CHILDS, styledCard: styledCard })
    }
    renderStuff() {
        const props = this.props;
        const state = this.state;
        let styledCard, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        if (this.state.box === "1") {
            use = cardFunction("1", props, state, self, arguments[0])
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={this.state.childs[0]}
                        alt={this.state.childs[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{this.state.childs[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{this.state.childs[3]}</p>
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = cardFunction("2", props, state, self, arguments[0])
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={this.state.childs[0]}
                        alt={this.state.childs[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{this.state.childs[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{this.state.childs[3]}</p>
                    </div>
                    <button style={use.CARDSTYLE.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = cardFunction("3", props, state, self, arguments[0])
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <ul style={use.CARDSTYLE.cardcontent}>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[0]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[1]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[2]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[3]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[4]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[5]}</li>
                        <li style={use.CARDSTYLE.item}>{this.state.childs[6]}</li>
                    </ul>
                </div>
            ]
        } else {
            use = cardFunction("custom", props, state, self, arguments[0])
            styledCard = [
                <div key={Math.random()}
                    style={use.CARDSTYLE.cardstyle}
                    id={this.state.id}
                    className={this.state.className}
                    onMouseEnter={use.changeHover}
                    onMouseLeave={use.changeHoverBack}>
                    <img
                        src={this.state.childs[0]}
                        alt={this.state.childs[1]}
                        style={use.CARDSTYLE.imgstyle} />
                    <div style={use.CARDSTYLE.cardcontent}>
                        <h5 style={use.CARDSTYLE.cardheading}>{this.state.childs[2]}</h5>
                        <p style={use.CARDSTYLE.cardbody}>{this.state.childs[3]}</p>
                    </div>
                </div>
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