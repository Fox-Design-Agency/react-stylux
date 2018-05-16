import React from "react";
import MediaQuery from "react-responsive";
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
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            position: props.position || "relative",
            zIndex: props.zIndex || "100",
            styledSubnavbar: '',
            box: props.box,
            vars: props.vars,
            keys: ''

        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledSubnavbar, use, NAVBAR, subnavbar_navbar_li, smsubnavbar_navbar_li, mdsubnavbar_navbar_li = '';
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
                        subnavbar_navbar_li = {
                            display: 'flex',
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        smsubnavbar_navbar_li = {
                            display: this.state.smdis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,

                        }
                        mdsubnavbar_navbar_li = {
                            display: this.state.mddis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        NAVBAR = CHILDS.map((x, i) => {
                            return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                        })
                        use = subnavbarFunction("1", props, state, self)
                        styledSubnavbar = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>

                        ]
                    default:
                        subnavbar_navbar_li = {
                            display: 'flex',
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        smsubnavbar_navbar_li = {
                            display: this.state.smdis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,

                        }
                        mdsubnavbar_navbar_li = {
                            display: this.state.mddis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        NAVBAR = CHILDS.map((x, i) => {
                            return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                        })
                        use = subnavbarFunction("1", props, state, self)
                        styledSubnavbar = [
                            <MediaQuery key={tempkeys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={tempkeys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>

                        ]
                }
                break;


            // } else if (this.state.box === "2") {
            //     const SUBNAVBAR_NAVBAR_LI = {
            //         display: 'flex',
            //         flex: 1,
            //         fontSize: this.state.fontSize,
            //         fontWeight: this.state.fontWeight,
            //         justifyContent: 'center',
            //         margin: this.state.itemSpaceing,
            //         background: this.state.itemBackground,
            //         fontVariant: this.state.fontVariant,
            //     };
            //     const CHILDS = React.Children.toArray(this.props.children)
            //     const NAVBAR = CHILDS.map((x, i) => {
            //         return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
            //     })
            //     use = subnavbarFuntion("2", props, state, self)
            //     styledSubnavbar = [
            //         <nav style={use.SUBNAVBAR} className="subnavbar2 socialness">
            //         <Holder>
            //             <ul style={use.SUBNAVBAR_NAVBAR1} id={this.state.navid} className={`subnavbar2-navbar1 ${this.state.navClassName}`}>
            //                 {NAVBAR[0]}
            //                 {NAVBAR[1]}
            //             </ul>
            //             <Holder
            //                 alignBlock1="flex-end"
            //                 alignBlock2="flex-start">
            //                 <div id={this.state.leftItemsid} className={`subnavbar2-globalSearch ${this.state.leftItemsClassName}`}>
            //                     <p>Search Holder</p>
            //                 </div>
            //                 <ul style={use.SUBNAVBAR_NAVBAR2} id={this.state.rightItemsid} className={`subnavbar2-navbar2 ${this.state.rightItemsClassName}`}>
            //                     {NAVBAR}
            //                 </ul>
            //             </Holder>
            //         </Holder>
            //     </nav>
            //     ]


            default:
                let subnavbar_navbar_li = {
                    display: 'flex',
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                }
                let smsubnavbar_navbar_li = {
                    display: this.state.smdis,
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,

                }
                let mdsubnavbar_navbar_li = {
                    display: this.state.mddis,
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                }
                NAVBAR = CHILDS.map((x, i) => {
                    return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                })
                use = subnavbarFunction("1", props, state, self)
                styledSubnavbar = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>

                ]
        }

        this.setState({ childs: NAVBAR, keys: tempkeys, styledSubnavbar: styledSubnavbar })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledSubnavbar, use, NAVBAR, subnavbar_navbar_li, smsubnavbar_navbar_li, mdsubnavbar_navbar_li = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        subnavbar_navbar_li = {
                            display: 'flex',
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        smsubnavbar_navbar_li = {
                            display: this.state.smdis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,

                        }
                        mdsubnavbar_navbar_li = {
                            display: this.state.mddis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        NAVBAR = CHILDS.map((x, i) => {
                            return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                        })
                        use = subnavbarFunction("1", props, state, self)
                        styledSubnavbar = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>

                        ]
                    default:
                        subnavbar_navbar_li = {
                            display: 'flex',
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        smsubnavbar_navbar_li = {
                            display: this.state.smdis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,

                        }
                        mdsubnavbar_navbar_li = {
                            display: this.state.mddis,
                            flex: "1",
                            fontSize: this.state.fontSize,
                            fontWeight: this.state.fontWeight,
                            justifyContent: 'center',
                            margin: this.state.itemSpaceing,
                            background: this.state.itemBackground,
                            fontVariant: this.state.fontVariant,
                        }
                        NAVBAR = CHILDS.map((x, i) => {
                            return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                        })
                        use = subnavbarFunction("1", props, state, self)
                        styledSubnavbar = [
                            <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                                <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                                    {NAVBAR}
                                </ul>
                            </nav></MediaQuery>

                        ]
                }
                break;
            default:
                subnavbar_navbar_li = {
                    display: 'flex',
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                }
                smsubnavbar_navbar_li = {
                    display: this.state.smdis,
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,

                }
                mdsubnavbar_navbar_li = {
                    display: this.state.mddis,
                    flex: "1",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                }
                NAVBAR = CHILDS.map((x, i) => {
                    return <li key={i} style={subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                })
                use = subnavbarFunction("1", props, state, self)
                styledSubnavbar = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><nav style={use.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><nav style={use.mdsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.mdsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><nav style={use.smsubnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                        <ul style={use.smsubnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                            {NAVBAR}
                        </ul>
                    </nav></MediaQuery>

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
