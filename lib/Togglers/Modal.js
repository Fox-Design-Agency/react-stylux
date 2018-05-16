import React from 'react';
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import modalFunction from "./togglerFunctions/modalFunctions";
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: props.id,
            className: props.className,
            first: '',
            childs: [],
            keys: '',
            styledModal: '',
            box: props.box,
            vars: props.vars
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let first = CHILDS.shift()
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("1", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("1", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("2", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = modalFunction("2", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;

            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("3", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("3", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;

            default:
                use = modalFunction("2", props, state, self, this.state.show)
                styledModal = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>
                ]
        }

        this.setState({ first: first, childs: CHILDS, styledModal: styledModal, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = this.props;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let first = CHILDS.shift()
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("1", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("1", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {CHILDS}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("2", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = modalFunction("2", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {CHILDS}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;

            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("3", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("3", props, state, self, this.state.show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {CHILDS[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {CHILDS[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {CHILDS[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;

            default:
                use = modalFunction("2", props, state, self, this.state.show)
                styledModal = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {CHILDS}
                            </div>
                        </div>
                    </div></MediaQuery>
                ]
        }

        return this.setState({ first: first, childs: CHILDS, styledModal: styledModal })
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        let show = !this.state.show
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("1", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("1", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div id={this.state.id} className={this.state.className}>
                                <div style={use.CLICKBOX} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.BOXSTYLES}>
                                    <button style={use.BTNSTYLE} onClick={this.toggle}>X</button>
                                    {this.state.childs}
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("2", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = modalFunction("2", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                        {this.state.childs}
                                    </div>
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;

            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = modalFunction("3", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                    default:
                        use = modalFunction("3", props, state, self, show)
                        styledModal = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}> <div>
                                <div style={use.OPENERBTN} onClick={this.toggle}>
                                    {this.state.first}
                                </div>
                                <div style={use.MODAL} onClick={this.toggle}>
                                    <div style={use.MODALCONTENT}>
                                        <div style={use.MODALHEADER}>
                                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                            {this.state.childs[0]}
                                        </div>
                                        <div style={use.MODALBODY}>
                                            {this.state.childs[1]}
                                        </div>
                                        <div style={use.MODALFOOTER}>
                                            {this.state.childs[2]}
                                        </div>
                                    </div>
                                </div>
                            </div></MediaQuery>

                        ]
                }
                break;

            default:
                use = modalFunction("2", props, state, self, show)
                styledModal = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {this.state.childs}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {this.state.childs}
                            </div>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div>
                        <div style={use.OPENERBTN} onClick={this.toggle}>
                            {this.state.first}
                        </div>
                        <div style={use.MODAL} onClick={this.toggle}>
                            <div style={use.MODALCONTENT}>
                                <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                                {this.state.childs}
                            </div>
                        </div>
                    </div></MediaQuery>
                ]
        }

        this.setState({
            show: !this.state.show,
            styledModal: styledModal
        })

    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledModal}
            </React.Fragment>
        )
    }
}