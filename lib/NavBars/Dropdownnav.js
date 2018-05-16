import React from "react";
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import dropdownnavFunction from "./navbarFunctions/dropdownnavFunctions";
export default class Dropdownnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 0 5px 5px',
            offset: props.offset,
            color: props.color || 'black',
            textAlign: props.textAlign || 'left',
            margin: props.margin,
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'bounceInDown',
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode || 'both',
            childs: [],
            first: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            keys: '',
            box: props.box,
            vars: props.vars,
            styledDropdown: ''
        }
        this.enter = this.enter.bind(this);
        this.left = this.left.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use, NAVBAR, FIRST, DropDown_NavBar_Li = '';
        const self = this;
        let tempkeys = []
        for (let i = 0; i <= 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }

        const CHILDS = React.Children.toArray(this.props.children)


        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = dropdownnavFunction("1", props, state, self)
                        DropDown_NavBar_Li = {
                            color: this.state.color,
                        }
                        NAVBAR = CHILDS.map((x, i, arr) => {
                            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                        })
                        FIRST = CHILDS[0];
                        styledDropdown = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                    default:
                        use = dropdownnavFunction("1", props, state, self)
                        DropDown_NavBar_Li = {
                            color: this.state.color,
                        }
                        NAVBAR = CHILDS.map((x, i, arr) => {
                            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                        })
                        FIRST = CHILDS[0];
                        styledDropdown = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                }
                break;

            default:
                use = dropdownnavFunction("1", props, state, self)
                DropDown_NavBar_Li = {
                    color: this.state.color,
                }
                NAVBAR = CHILDS.map((x, i, arr) => {
                    return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                })
                FIRST = CHILDS[0];
                styledDropdown = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>
                ]

        }
        this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledDropdown, use, NAVBAR, FIRST, DropDown_NavBar_Li = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = dropdownnavFunction("1", props, state, self)
                        DropDown_NavBar_Li = {
                            color: this.state.color,
                        }
                        NAVBAR = CHILDS.map((x, i, arr) => {
                            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                        })
                        FIRST = CHILDS[0];
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                    default:
                        use = dropdownnavFunction("1", props, state, self)
                        DropDown_NavBar_Li = {
                            color: this.state.color,
                        }
                        NAVBAR = CHILDS.map((x, i, arr) => {
                            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                        })
                        FIRST = CHILDS[0];
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {FIRST}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {NAVBAR}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                }
                break;

            default:
                use = dropdownnavFunction("1", props, state, self)
                DropDown_NavBar_Li = {
                    color: this.state.color,
                }
                NAVBAR = CHILDS.map((x, i, arr) => {
                    return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
                })
                FIRST = CHILDS[0];
                styledDropdown = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {FIRST}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {NAVBAR}
                            </ul>
                        </li>
                    </nav></MediaQuery>
                ]

        }
        this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown, })
    }

    enter() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use, show = '';
        const self = this;
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        show = "visible"
                        use = dropdownnavFunction("1", props, state, self, show)
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                    default:
                        show = "visible"
                        use = dropdownnavFunction("1", props, state, self, show)
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                }
                break;
            default:
                show = "visible"
                use = dropdownnavFunction("1", props, state, self, show)
                styledDropdown = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>
                ]

        }
        this.setState({
            styledDropdown: styledDropdown
        });
    }
    left() {
        const props = this.props;
        const state = this.state;
        let styledDropdown, use, show = '';
        const self = this;
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        show = "hidden"
                        use = dropdownnavFunction("1", props, state, self, show)
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                    default:
                        show = "hidden"
                        use = dropdownnavFunction("1", props, state, self, show)
                        styledDropdown = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                                    onMouseOver={() => this.enter()}
                                    onMouseOut={() => this.left()}>
                                    {this.state.first}
                                    <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                        {this.state.childs}
                                    </ul>
                                </li>
                            </nav></MediaQuery>
                        ]
                }
                break;
            default:
                show = "hidden"
                use = dropdownnavFunction("1", props, state, self, show)
                styledDropdown = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                        <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={use.HASCHILDS}
                            onMouseOver={() => this.enter()}
                            onMouseOut={() => this.left()}>
                            {this.state.first}
                            <ul style={use.DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                                {this.state.childs}
                            </ul>
                        </li>
                    </nav></MediaQuery>
                ]                
        }
        this.setState({
            styledDropdown: styledDropdown
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledDropdown}
            </React.Fragment>
        )
    }
}