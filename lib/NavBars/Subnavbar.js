import React from "react";
import StyleSheet from 'nestingstyles';
import '../css/reset.css'
import subnavbarFunction from "./navbarFunctions/subnavbarFunctions"
export default class Subnavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'flex-start',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'black',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'whitesmoke',
            fontSize: props.fontSize || '0.9em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            listid: props.listid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            listClassName: props.listClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            smdis: props.smDis || 'none',
            mddis: props.mdDis || 'flex',
            top: props.top || '-1px',
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            position: props.position || "sticky",
            zIndex: props.zIndex || '200',
            styledSubnavbar: '',
            box: props.box,
            keys: ''

        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledSubnavbar, use, NAVBAR = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = []
        for (let i = 0; i < CHILDS.length; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1") {
            const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                '@media screen and (max-width: 768px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            NAVBAR = CHILDS.map((x, i) => {
                return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
            })
            use = subnavbarFuntion("1", props, state, self)
            styledSubnavbar = [
                <nav key={tempKeys[0]} style={use.SUBNAVBAR.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                    <ul style={use.SUBNAVBAR_NAVBAR.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                        {NAVBAR}
                    </ul>
                </nav>
            ]

        } else {
            const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                '@media screen and (max-width: 768px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            NAVBAR = CHILDS.map((x, i) => {
                return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
            })
            use = subnavbarFuntion("1", props, state, self)
            styledSubnavbar = [
                <nav key={tempKeys[0]} style={use.SUBNAVBAR.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                    <ul style={use.SUBNAVBAR_NAVBAR.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                        {NAVBAR}
                    </ul>
                </nav>
            ]

        }

        this.setState({ childs: NAVBAR, keys: tempKeys, styledSubnavbar: styledSubnavbar })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledSubnavbar, use, NAVBAR = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                '@media screen and (max-width: 768px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            NAVBAR = CHILDS.map((x, i) => {
                return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
            })
            use = subnavbarFuntion("1", props, state, self)
            styledSubnavbar = [
                <nav key={this.state.keys[0]} style={use.SUBNAVBAR.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                    <ul style={use.SUBNAVBAR_NAVBAR.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                        {NAVBAR}
                    </ul>
                </nav>
            ]


        } else {
            const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                },
                '@media screen and (max-width: 768px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis,
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis,
                    }
                },
            })
            NAVBAR = CHILDS.map((x, i) => {
                return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
            })
            use = subnavbarFuntion("1", props, state, self)
            styledSubnavbar = [
                <nav key={this.state.keys[0]} style={use.SUBNAVBAR.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                    <ul style={use.SUBNAVBAR_NAVBAR.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                        {NAVBAR}
                    </ul>
                </nav>
            ]

        }
        this.setState({ childs: NAVBAR, styledSubnavbar: styledSubnavbar })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.styledSubnavbar}
            </React.Fragment>
        )
    }
}
