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
            box: props.box,
            vars: props.vars
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledPopup, use = '';
        const self = this;
        let show = !this.state.show
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        if (!this.state.show) {
                            setTimeout(() => this.toggle(), 3000)
                        }

                        use = popupFunction("1", props, state, self, show)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        if (!this.state.show) {
                            setTimeout(() => this.toggle(), 3000)
                        }

                        use = popupFunction("1", props, state, self, show)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = popupFunction("2", props, state, self, show)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = popupFunction("2", props, state, self, show)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {this.state.childs[0]}
                                <div style={use.POPUPSTYLE}>
                                    {this.state.childs[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            default:
                if (!this.state.show) {
                    setTimeout(() => this.toggle(), 3000)
                }

                use = popupFunction("1", props, state, self, show)
                styledPopup = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {this.state.childs[0]}
                        <div style={use.POPUPSTYLE}>
                            {this.state.childs[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {this.state.childs[0]}
                        <div style={use.POPUPSTYLE}>
                            {this.state.childs[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {this.state.childs[0]}
                        <div style={use.POPUPSTYLE}>
                            {this.state.childs[1]}
                        </div>
                    </div></MediaQuery>

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
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = popupFunction("1", props, state, self)
                        styledPopup = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = popupFunction("1", props, state, self)
                        styledPopup = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;

            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = popupFunction("2", props, state, self)
                        styledPopup = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                    use = popupFunction("2", props, state, self)
                    styledPopup = [
                        <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>,
                        <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>,
                        <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>

                    ]
                }
                break;
            default:
                use = popupFunction("1", props, state, self)
                styledPopup = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>
                ]

        }

        this.setState({ childs: CHILDS, keys: tempkeys, styledPopup: styledPopup })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledPopup, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)

        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = popupFunction("1", props, state, self)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = popupFunction("1", props, state, self)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;

            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = popupFunction("2", props, state, self)
                        styledPopup = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                                onMouseEnter={this.toggle}
                                onMouseLeave={this.toggle}>
                                {CHILDS[0]}
                                <div style={use.POPUPSTYLE}>
                                    {CHILDS[1]}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                    use = popupFunction("2", props, state, self)
                    styledPopup = [
                        <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>,
                        <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>,
                        <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK}
                            onMouseEnter={this.toggle}
                            onMouseLeave={this.toggle}>
                            {CHILDS[0]}
                            <div style={use.POPUPSTYLE}>
                                {CHILDS[1]}
                            </div>
                        </div></MediaQuery>

                    ]
                }
                break;
            default:
                use = popupFunction("1", props, state, self)
                styledPopup = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.POPUPCLICK} onClick={this.toggle}>
                        {CHILDS[0]}
                        <div style={use.POPUPSTYLE}>
                            {CHILDS[1]}
                        </div>
                    </div></MediaQuery>
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