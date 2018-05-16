import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import Image from "../Images/Image"
import MediaQuery from "react-responsive";
import brandFunction from "./brandFunctions/brandFunctions";
export default class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'tn',
            childs: [],
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledBrand: '',
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledBrand, use = '';
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
                        use = brandFunction("1", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.brand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.mdbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.smbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("1", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.brand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.mdbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.smbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("2", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("2", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("3", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("3", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("4", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("4", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("5", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("5", props, state, self)
                        styledBrand = [
                            <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = brandFunction("2", props, state, self)
                styledBrand = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><div style={use.brand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smbrand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                ]
        }
        return this.setState({ childs: CHILDS, styledBrand: styledBrand, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledBrand, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("1", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.brand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.mdbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                                <p style={use.smbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("1", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.brand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.mdbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                                <p style={use.smbrand_name}>{CHILDS[1]}</p>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("2", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("2", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="5"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("3", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("3", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("4", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                                </Image>
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("4", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                <Image
                                    box="4"
                                    size={this.state.size}>
                                    {CHILDS[0]}
                                    logo
                            </Image>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = brandFunction("5", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>
                        ]
                    default:
                        use = brandFunction("5", props, state, self)
                        styledBrand = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                                id={this.state.id}
                                className={this.state.className}>
                                {CHILDS}
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = brandFunction("2", props, state, self)
                styledBrand = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.brand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdbrand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smbrand}
                        id={this.state.id}
                        className={this.state.className}>
                        <Image
                            box="5"
                            size={this.state.size}>
                            {CHILDS[0]}
                            logo
                    </Image>
                    </div></MediaQuery>,
                ]
        }
        return this.setState({ childs: CHILDS, styledBrand: styledBrand })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledBrand}
            </React.Fragment>
        )
    }
}