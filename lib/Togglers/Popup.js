import React from 'react';
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import popupFunction from "./togglerFunctions/popupFunctions";
export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: "hidden",
            childs: '',
            keys: '',
            styledPopup: '',
            show: false,
            box: props.box
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledPopup, use = '';
        const self = this;
        let show = !this.state.show
        if (this.state.box === "1") {
            if (!this.state.show) {
                setTimeout(() => this.toggle(), 3000)
            }

            use = popupFunction("1", props, state, self, show)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]

        } else if (this.state.box === "2") {
            use = popupFunction("2", props, state, self, show)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK}
                    onMouseEnter={this.toggle}
                    onMouseLeave={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]
        } else {
            if (!this.state.show) {
                setTimeout(() => this.toggle(), 3000)
            }
            use = popupFunction("1", props, state, self, show)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]

        }
        return this.setState({ visibility: 'visible', styledPopup: styledPopup, show: !this.state.show })

    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledPopup, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = Math.random()
        if (this.state.box === "1") {
            use = popupFunction("1", props, state, self)
            styledPopup = [
                <div key={tempKeys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {CHILDS[1]}
                    <div style={use.POPUPSTYLE}>
                        {CHILDS[0]}
                    </div>
                </div>
            ]

        } else if (this.state.box === "2") {
            use = popupFunction("2", props, state, self)
            styledPopup = [
                <div key={tempKeys} style={use.POPUPCLICK}
                    onMouseEnter={this.toggle}
                    onMouseLeave={this.toggle}>
                    {CHILDS[1]}
                    <div style={use.POPUPSTYLE}>
                        {CHILDS[0]}
                    </div>
                </div>
            ]
        } else {
            use = popupFunction("1", props, state, self)
            styledPopup = [
                <div key={tempKeys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {CHILDS[1]}
                    <div style={use.POPUPSTYLE}>
                        {CHILDS[0]}
                    </div>
                </div>
            ]

        }




        this.setState({ childs: CHILDS, keys: tempKeys, styledPopup: styledPopup })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledPopup, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)

        if (this.state.box === "1") {
            use = popupFunction("1", props, state, self)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]

        } else if (this.state.box === "2") {
            use = popupFunction("2", props, state, self)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK}
                    onMouseEnter={this.toggle}
                    onMouseLeave={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]
        } else {
            use = popupFunction("1", props, state, self)
            styledPopup = [
                <div key={this.state.keys} style={use.POPUPCLICK} onClick={this.toggle}>
                    {this.state.childs[1]}
                    <div style={use.POPUPSTYLE}>
                        {this.state.childs[0]}
                    </div>
                </div>
            ]

        }


        return this.setState({ childs: CHILDS, styledPopup: styledPopup })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledPopup}
            </React.Fragment>
        )
    }
}