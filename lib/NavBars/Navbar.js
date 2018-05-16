import React from "react";
import MediaQuery from "react-responsive";
import '../css/reset.css'
import '../css/animations.css';
import navbarFunction from "./navbarFunctions/navbarFunctions";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: props.top,
            left: props.left,
            right: props.right,
            bottom: props.bottom,
            position: props.position,
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '100%',
            totalHeight: props.height,
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '10px 0',
            mainBackground: props.mainBackground || 'inherit',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '1.333em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            hams: '',
            smdis: props.smDis,
            mddis: props.mdDis || 'flex',
            initialCount: props.count || '0',
            hoverColor: props.hoverColor,
            hamMenuDis: 'none',
            hamShow: false,
            hamTop: props.hamTop || '75px',
            hamLeft: props.hamLeft || '0',
            hamSmDis: props.hamSmDis || 'flex',
            hamMdDis: props.hamMdDis || 'none',
            hamShadow: props.hamShadow || '1px 2px 2px black',
            hamBackground: props.hamBackground || 'white',
            hamPosition: props.hamPosition || 'absolute',
            animationIterationCount: props.aniCount || '1',
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'fadeIn',
            animationDuration: props.aniDur || '0.75s',
            transformOrigin: props.transformOrigin || 'top',
            animationFillMode: props.aniFillMode || 'both',
            keys: '',
            styledNavbar: '',
            box: props.box,
            vars: props.vars
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM, smdis, show = '';
        const self = this;
        if (this.state.box === "1" || this.state.box === "2") {

            smdis = "none"
            show = !this.state.hamShow
            use = navbarFunction("1", props, state, self, smdis, show)
            switch (this.state.box) {
                case "1":
                    switch (this.state.var) {
                        case "1":
                            styledNavbar = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                    style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.HAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.hamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                    style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.mdHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.mdhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                    style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.smHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.smhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>

                            ]
                        default:
                            styledNavbar = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                    style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.HAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.hamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                    style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.mdHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.mdhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                    style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.smHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.smhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>

                            ]
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            styledNavbar = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                    style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.HAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.hamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                    style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.mdHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.mdhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                    style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.smHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.smhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>

                            ]
                        default:
                            styledNavbar = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                    style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.HAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.hamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                    style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.mdHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.mdhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                    style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                    <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                        {this.state.childs}
                                    </ul>
                                    <div style={use.smHAMNAV} onClick={this.toggle}>
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                        <div style={use.HAMLINES} />
                                    </div>
                                    <ul style={use.smhamestnav}>
                                        {this.state.hams}
                                    </ul>
                                </nav></MediaQuery>

                            ]
                    }

            }
            return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow })

        } else {
            smdis = "none"
            show = !this.state.hamShow
            use = navbarFunction("1", props, state, self, smdis, show)
            styledNavbar = [
                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                    style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                    <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                        {this.state.childs}
                    </ul>
                    <div style={use.HAMNAV} onClick={this.toggle}>
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                    </div>
                    <ul style={use.hamestnav}>
                        {this.state.hams}
                    </ul>
                </nav></MediaQuery>,
                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                    style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                    <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                        {this.state.childs}
                    </ul>
                    <div style={use.mdHAMNAV} onClick={this.toggle}>
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                    </div>
                    <ul style={use.mdhamestnav}>
                        {this.state.hams}
                    </ul>
                </nav></MediaQuery>,
                <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                    style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                    <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                        {this.state.childs}
                    </ul>
                    <div style={use.smHAMNAV} onClick={this.toggle}>
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                    </div>
                    <ul style={use.smhamestnav}>
                        {this.state.hams}
                    </ul>
                </nav></MediaQuery>

            ]
            return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow })
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM, navbar_navbar_li, smnavbar_navbar_li, mdnavbar_navbar_li, hoverStyle, ham_navbar_li, smham_navbar_li, mdham_navbar_li, LGDIS, SMDIS, smdis = '';
        const self = this;

        const CHILDS = React.Children.toArray(this.props.children)
        let tempkeys = []
        for (let i = 0; i <= CHILDS.length + 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        if (this.state.box === "1" || this.state.box === "2") {
            navbar_navbar_li = {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            }
            hoverStyle = {
                color: this.state.hoverColor
            }
            smnavbar_navbar_li = {
                display: this.state.smdis,

            }
            mdnavbar_navbar_li = {
                display: this.state.mddis,
            }
            ham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                flex: 1,
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            }
            // hoverStyle= {
            //     color: this.state.hoverColor
            // }
            smham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',

            }
            mdham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
            }
            if (+this.state.initialCount !== 0) {
                LGDIS = []
                SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={ham_navbar_li}>{x}</li>
                })
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                            default:
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                            default:
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                        }

                }
                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                            default:
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                            default:
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                        }
                }
                return this.setState({
                    childs: NAVBARACTUAL,
                    hamMenuDis: 'none',
                    hamShow: false,
                    hamSmDis: 'none',
                    hamMdDis: 'none',
                    keys: tempkeys,
                    styledNavbar: styledNavbar
                })
            }
        } else {
            navbar_navbar_li = {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            }
            hoverStyle = {
                color: this.state.hoverColor
            }
            smnavbar_navbar_li = {
                display: this.state.smdis,

            }
            mdnavbar_navbar_li = {
                display: this.state.mddis,
            }
            ham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                flex: 1,
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            }
            // hoverStyle= {
            //     color: this.state.hoverColor
            // }
            smham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',

            }
            mdham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
            }
            if (+this.state.initialCount !== 0) {
                LGDIS = []
                SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={ham_navbar_li}>{x}</li>
                })
                smdis = "none"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARLG}
                        </ul>
                        <div style={use.HAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.hamestnav}>
                            {NAVBARSM}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARLG}
                        </ul>
                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.mdhamestnav}>
                            {NAVBARSM}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARLG}
                        </ul>
                        <div style={use.smHAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.smhamestnav}>
                            {NAVBARSM}
                        </ul>
                    </nav></MediaQuery>
                ]


                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                let smdis = "flex"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <MediaQuery key={tempkeys[0]} query="(min-width: 1224px)"><nav
                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav
                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav
                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>
                ]
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                keys: tempkeys,
                styledNavbar: styledNavbar
            })

        }
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM, navbar_navbar_li, smnavbar_navbar_li, mdnavbar_navbar_li, hoverStyle, ham_navbar_li, smham_navbar_li, mdham_navbar_li, LGDIS, SMDIS, smdis = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1" || this.state.box === "2") {
            navbar_navbar_li = {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            }
            hoverStyle = {
                color: this.state.hoverColor
            }
            smnavbar_navbar_li = {
                display: this.state.smdis,

            }
            mdnavbar_navbar_li = {
                display: this.state.mddis,
            }
            ham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                fontSize: this.state.fontSize,
                flex: 1,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            }
            // hoverStyle= {
            //     color: this.state.hoverColor
            // }
            smham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',

            }
            mdham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
            }
            if (+ this.state.initialCount !== 0) {
                LGDIS = []
                SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={ham_navbar_li}>{x}</li>
                })
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                            default:
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                            default:
                                smdis = "none"
                                use = navbarFunction("1", props, state, self, smdis)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.HAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.hamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.mdHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.mdhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARLG}
                                        </ul>
                                        <div style={use.smHAMNAV} onClick={this.toggle}>
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                            <div style={use.HAMLINES} />
                                        </div>
                                        <ul style={use.smhamestnav}>
                                            {NAVBARSM}
                                        </ul>
                                    </nav></MediaQuery>

                                ]
                        }

                }
                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                            default:
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                            default:
                                use = navbarFunction("1", props, state, self)
                                styledNavbar = [
                                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>,
                                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                                            {NAVBARACTUAL}
                                        </ul>
                                    </nav></MediaQuery>
                                ]
                        }
                }
                return this.setState({
                    childs: NAVBARACTUAL,
                    hamMenuDis: 'none',
                    hamShow: false,
                    hamSmDis: 'none',
                    hamMdDis: 'none',
                    styledNavbar: styledNavbar
                })
            }
        } else {
            navbar_navbar_li = {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            }
            hoverStyle = {
                color: this.state.hoverColor
            }
            smnavbar_navbar_li = {
                display: this.state.smdis,

            }
            mdnavbar_navbar_li = {
                display: this.state.mddis,
            }
            ham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            }
            // hoverStyle= {
            //     color: this.state.hoverColor
            // }
            smham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',

            }
            mdham_navbar_li = {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
            }
            if (+this.state.initialCount !== 0) {
                LGDIS = []
                SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={ham_navbar_li}>{x}</li>
                })
                smdis = "none"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>
                ]


                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={navbar_navbar_li}>{x}</li>
                })
                smdis = "flex"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><nav
                        style={use.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav
                        style={use.mdnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.mdnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav
                        style={use.smnavbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.smnavbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav></MediaQuery>
                ]
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                styledNavbar: styledNavbar
            })

        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledNavbar}
            </React.Fragment>

        )
    }
}
