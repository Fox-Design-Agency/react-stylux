import React from "react";
import StyleSheet from 'nestingstyles';
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
            box: props.box
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM = '';
        const self = this;
        if (this.state.box === "1" || this.state.box === "2") {

            let smdis = "none"
            let show = !this.state.hamShow
            use = navbarFunction("1", props, state, self, smdis, show)
            if (this.state.box === "1") {
                styledNavbar = [
                    <nav key={this.state.keys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {this.state.childs}
                        </ul>
                        <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.HAMESTNAV.hamestnav}>
                            {this.state.hams}
                        </ul>
                    </nav>
                ]
            } else if (this.state.box === "2") {
                styledNavbar = [
                    <nav key={this.state.keys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar`}>
                            {this.state.childs}
                        </ul>
                        <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.HAMESTNAV.hamestnav}>
                            {this.state.hams}
                        </ul>
                    </nav>
                ]
            }
            return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow })

        } else {
            let smdis = "none"
            let show = !this.state.hamShow
            use = navbarFunction("1", props, state, self, smdis, show)
            styledNavbar = [
                <nav key={this.state.keys[0]}
                    style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                    <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                        {this.state.childs}
                    </ul>
                    <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                        <div style={use.HAMLINES} />
                    </div>
                    <ul style={use.HAMESTNAV.hamestnav}>
                        {this.state.hams}
                    </ul>
                </nav>
            ]
            return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow })
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM = '';
        const self = this;

        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1" || this.state.box === "2") {
            const NAVBAR_NAVBAR_LI = StyleSheet.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            const HAM_NAVBAR_LI = StyleSheet.create({
                ham_navbar_li: {
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
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
            })
            if (+this.state.initialCount !== 0) {
                const LGDIS = []
                const SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                const NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                const NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
                })
                if (this.state.box === "1") {
                    let smdis = "none"
                    use = navbarFunction("1", props, state, self, smdis)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                {this.state.childs}
                            </ul>
                            <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                            </div>
                            <ul style={use.HAMESTNAV.hamestnav}>
                                {this.state.hams}
                            </ul>
                        </nav>
                    ]
                } else if (this.state.box === "2") {
                    let smdis = "none"
                    use = navbarFunction("1", props, state, self, smdis)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar `}>
                                {NAVBARLG}
                            </ul>
                            <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                            </div>
                            <ul style={use.HAMESTNAV.hamestnav}>
                                {NAVBARSM}
                            </ul>
                        </nav>
                    ]
                }
                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempKeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                if (this.state.box === "1") {
                    use = navbarFunction("1", props, state, self)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                {NAVBARACTUAL}
                            </ul>
                        </nav>
                    ]
                } else if (this.state.box === "2") {
                    use = navbarFunction("1", props, state, self)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar `}>
                                {NAVBARACTUAL}
                            </ul>
                        </nav>
                    ]
                }
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                keys: tempKeys,
                styledNavbar: styledNavbar
            })
        } else {
            const NAVBAR_NAVBAR_LI = StyleSheet.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            const HAM_NAVBAR_LI = StyleSheet.create({
                ham_navbar_li: {
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
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
            })
            if (+this.state.initialCount !== 0) {
                const LGDIS = []
                const SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
                })
                let smdis = "none"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <nav key={tempKeys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARLG}
                        </ul>
                        <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.HAMESTNAV.hamestnav}>
                            {NAVBARSM}
                        </ul>
                    </nav>
                ]


                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempKeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                let smdis = "flex"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <nav key={tempKeys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav>
                ]
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                keys: tempKeys,
                styledNavbar: styledNavbar
            })

        }
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledNavbar, use, NAVBARACTUAL, NAVBARLG, NAVBARSM = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1" || this.state.box === "2") {
            const NAVBAR_NAVBAR_LI = StyleSheet.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            const HAM_NAVBAR_LI = StyleSheet.create({
                ham_navbar_li: {
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
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
            })
            if (+this.state.initialCount !== 0) {
                const LGDIS = []
                const SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                const NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                const NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
                })
                if (this.state.box === "1") {
                    let smdis = "none"
                    use = navbarFunction("1", props, state, self, smdis)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                {this.state.childs}
                            </ul>
                            <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                            </div>
                            <ul style={use.HAMESTNAV.hamestnav}>
                                {this.state.hams}
                            </ul>
                        </nav>
                    ]
                } else if (this.state.box === "2") {
                    let smdis = "none"
                    use = navbarFunction("1", props, state, self, smdis)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar `}>
                                {NAVBARLG}
                            </ul>
                            <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                                <div style={use.HAMLINES} />
                            </div>
                            <ul style={use.HAMESTNAV.hamestnav}>
                                {NAVBARSM}
                            </ul>
                        </nav>
                    ]
                }
                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempKeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                if (this.state.box === "1") {
                    use = navbarFunction("1", props, state, self)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                                {NAVBARACTUAL}
                            </ul>
                        </nav>
                    ]
                } else if (this.state.box === "2") {
                    use = navbarFunction("1", props, state, self)
                    styledNavbar = [
                        <nav key={tempKeys[0]}
                            style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                            <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar `}>
                                {NAVBARACTUAL}
                            </ul>
                        </nav>
                    ]
                }
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                keys: tempKeys,
                styledNavbar: styledNavbar
            })
        } else {
            const NAVBAR_NAVBAR_LI = StyleSheet.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            const HAM_NAVBAR_LI = StyleSheet.create({
                ham_navbar_li: {
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
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    }
                },
            })
            if (+this.state.initialCount !== 0) {
                const LGDIS = []
                const SMDIS = []
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x])
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i])
                }
                NAVBARLG = LGDIS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                NAVBARSM = SMDIS.map((x, i) => {
                    return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
                })
                let smdis = "none"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <nav key={tempKeys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARLG}
                        </ul>
                        <div style={use.HAMNAV.HAMNAV} onClick={this.toggle}>
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                            <div style={use.HAMLINES} />
                        </div>
                        <ul style={use.HAMESTNAV.hamestnav}>
                            {NAVBARSM}
                        </ul>
                    </nav>
                ]


                return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempKeys, styledNavbar: styledNavbar })
            } else {
                NAVBARACTUAL = CHILDS.map((x, i) => {
                    return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
                })
                let smdis = "flex"
                use = navbarFunction("1", props, state, self, smdis)
                styledNavbar = [
                    <nav key={tempKeys[0]}
                        style={use.NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                        <ul style={use.NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                            {NAVBARACTUAL}
                        </ul>
                    </nav>
                ]
            }
            return this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none',
                keys: tempKeys,
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