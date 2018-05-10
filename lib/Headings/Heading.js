import React from "react";
import '../css/reset.css'
import '../css/animations.css';
import heading1Function from "./headingFunctions.js/heading1Functions";
import heading2Function from "./headingFunctions.js/heading2Functions";
import heading3Function from "./headingFunctions.js/heading3Functions";
import heading4Function from "./headingFunctions.js/heading4Functions";
import heading5Function from "./headingFunctions.js/heading5Functions";
import heading6Function from "./headingFunctions.js/heading6Functions";

export default class H extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font,
            fontSize: props.size || '7em',
            smFontSize: props.smSize || '3.939em',
            mdFontSize: props.mdSize || '5.25em',
            fontWeight: props.fontWeight || '900',
            fontVariant: props.variant,
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '1px',
            width: props.width,
            height: props.height,
            maxWidth: props.maxW,
            maxHeight: props.maxH,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            border: props.border,
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor,
            wordWrap: props.wordWrap || "break-word",
            cursor: props.cursor,
            keys: '',
            styledHeading: '',
            box: props.box,
            vars: props.vars

        }
    }
    componentDidMount(nextProps) {
        const props = this.props;
        const state = this.state;
        let styledHeading, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = Math.random()
        let curs = ''
        if (this.state.hoverColor) {
            curs = "pointer"
            this.setState({ cursor: curs })
        }
        if (this.state.box === "1") {
            if (this.state.vars === "1") {
                use = heading1Function("1", props, state, self)
                styledHeading = [
                    <h1 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>

                ]
            } else if (this.state.vars === "2") {
                use = heading1Function("2", props, state, self)
                styledHeading = [
                    <h1 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>

                ]
            } else if (this.state.vars === "3") {
                use = heading1Function("3", props, state, self)
                styledHeading = [
                    <h1 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]

            } else if (this.state.vars === "4") {
                use = heading1Function("4", props, state, self)
                styledHeading = [
                    <h1 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]


            } else {
                use = heading1Function("3", props, state, self)
                styledHeading = [
                    <h1 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]
            }

        } else if (this.state.box === "2") {
            if (this.state.vars === "1") {
                use = heading2Function("1", props, state, self)
                styledHeading = [
                    <h2 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]

            } else if (this.state.vars === "2") {
                use = heading2Function("2", props, state, self)
                styledHeading = [
                    <h2 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]
            } else if (this.state.vars === "3") {
                use = heading2Function("3", props, state, self)
                styledHeading = [
                    <h2 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]

            } else if (this.state.vars === "4") {
                use = heading2Function("4", props, state, self)
                styledHeading = [
                    <h2 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]


            } else {
                use = heading2Function("3", props, state, self)
                styledHeading = [
                    <h2 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]
            }


        } else if (this.state.box === "3") {
            if (this.state.vars === "1") {
                use = heading3Function("1", props, state, self)
                styledHeading = [
                    <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "2") {
                use = heading3Function("2", props, state, self)
                styledHeading = [
                    <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "3") {
                use = heading3Function("3", props, state, self)

                styledHeading = [
                    <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "4") {
                use = heading3Function("4", props, state, self)
                styledHeading = [
                    <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]


            } else {
                use = heading3Function("3", props, state, self)
                styledHeading = [
                    <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>

                ]
            }

        } else if (this.state.box === "4") {

            if (this.state.vars === "1") {
                use = heading4Function("1", props, state, self)
                styledHeading = [
                    <h4 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]

            } else if (this.state.vars === "2") {
                use = heading4Function("2", props, state, self)
                styledHeading = [
                    <h4 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]

            } else if (this.state.vars === "3") {
                use = heading4Function("3", props, state, self)
                styledHeading = [
                    <h4 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]


            } else if (this.state.vars === "4") {
                use = heading4Function("4", props, state, self)
                styledHeading = [
                    <h4 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]


            } else {
                use = heading4Function("3", props, state, self)
                styledHeading = [
                    <h4 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]
            }
        } else if (this.state.box === "5") {
            if (this.state.vars === "1") {
                use = heading5Function("1", props, state, self)
                styledHeading = [
                    <h5 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            } else if (this.state.vars === "2") {
                use = heading5Function("2", props, state, self)
                styledHeading = [
                    <h5 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            } else if (this.state.vars === "3") {
                use = heading5Function("3", props, state, self)
                styledHeading = [
                    <h5 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]

            } else if (this.state.vars === "4") {
                use = heading5Function("4", props, state, self)

                styledHeading = [
                    <h5 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>

                ]

            } else {
                use = heading5Function("3", props, state, self)
                styledHeading = [
                    <h5 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            }

        } else if (this.state.box === "6") {
            if (this.state.vars === "1") {
                use = heading6Function("1", props, state, self)
                styledHeading = [
                    <h6 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>

                ]
            } else if (this.state.vars === "2") {
                use = heading6Function("2", props, state, self)
                styledHeading = [
                    <h6 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]
            } else if (this.state.vars === "3") {
                use = heading6Function("3", props, state, self)
                styledHeading = [
                    <h6 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>

                ]

            } else if (this.state.vars === "4") {
                use = heading6Function("4", props, state, self)

                styledHeading = [
                    <h6 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]

            } else {
                use = heading6Function("3", props, state, self)
                styledHeading = [
                    <h6 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]
            }
        } else {
            use = heading3Function("2", props, state, self)
            styledHeading = [
                <h3 key={tempKeys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                    onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                    onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
            ]
        }


        this.setState({
            childs: CHILDS,
            keys: tempKeys,
            styledHeading: styledHeading
        })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHeading, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        let curs = ''
        if (this.state.hoverColor) {
            curs = "pointer"
            this.setState({ cursor: curs })
        }
        if (this.state.box === "1") {
            if (this.state.vars === "1") {
                use = heading1Function("1", props, state, self)
                styledHeading = [
                    <h1 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>

                ]
            } else if (this.state.vars === "2") {
                use = heading1Function("2", props, state, self)
                styledHeading = [
                    <h1 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>

                ]
            } else if (this.state.vars === "3") {
                use = heading1Function("3", props, state, self)
                styledHeading = [
                    <h1 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]

            } else if (this.state.vars === "4") {
                use = heading1Function("4", props, state, self)
                styledHeading = [
                    <h1 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]


            } else {
                use = heading1Function("3", props, state, self)
                styledHeading = [
                    <h1 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h1>
                ]
            }

        } else if (this.state.box === "2") {
            if (this.state.vars === "1") {
                use = heading2Function("1", props, state, self)
                styledHeading = [
                    <h2 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]

            } else if (this.state.vars === "2") {
                use = heading2Function("2", props, state, self)
                styledHeading = [
                    <h2 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]
            } else if (this.state.vars === "3") {
                use = heading2Function("3", props, state, self)
                styledHeading = [
                    <h2 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]

            } else if (this.state.vars === "4") {
                use = heading2Function("4", props, state, self)
                styledHeading = [
                    <h2 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]


            } else {
                use = heading2Function("3", props, state, self)
                styledHeading = [
                    <h2 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h2>
                ]
            }


        } else if (this.state.box === "3") {
            if (this.state.vars === "1") {
                use = heading3Function("1", props, state, self)
                styledHeading = [
                    <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "2") {
                use = heading3Function("2", props, state, self)
                styledHeading = [
                    <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "3") {
                use = heading3Function("3", props, state, self)

                styledHeading = [
                    <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]
            } else if (this.state.vars === "4") {
                use = heading3Function("4", props, state, self)
                styledHeading = [
                    <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
                ]


            } else {
                use = heading3Function("3", props, state, self)
                styledHeading = [
                    <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>

                ]
            }

        } else if (this.state.box === "4") {

            if (this.state.vars === "1") {
                use = heading4Function("1", props, state, self)
                styledHeading = [
                    <h4 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]

            } else if (this.state.vars === "2") {
                use = heading4Function("2", props, state, self)
                styledHeading = [
                    <h4 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]

            } else if (this.state.vars === "3") {
                use = heading4Function("3", props, state, self)
                styledHeading = [
                    <h4 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]


            } else if (this.state.vars === "4") {
                use = heading4Function("4", props, state, self)
                styledHeading = [
                    <h4 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]


            } else {
                use = heading4Function("3", props, state, self)
                styledHeading = [
                    <h4 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h4>
                ]
            }
        } else if (this.state.box === "5") {
            if (this.state.vars === "1") {
                use = heading5Function("1", props, state, self)
                styledHeading = [
                    <h5 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            } else if (this.state.vars === "2") {
                use = heading5Function("2", props, state, self)
                styledHeading = [
                    <h5 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            } else if (this.state.vars === "3") {
                use = heading5Function("3", props, state, self)
                styledHeading = [
                    <h5 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]

            } else if (this.state.vars === "4") {
                use = heading5Function("4", props, state, self)

                styledHeading = [
                    <h5 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>

                ]

            } else {
                use = heading5Function("3", props, state, self)
                styledHeading = [
                    <h5 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h5>
                ]
            }

        } else if (this.state.box === "6") {
            if (this.state.vars === "1") {
                use = heading6Function("1", props, state, self)
                styledHeading = [
                    <h6 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>

                ]
            } else if (this.state.vars === "2") {
                use = heading6Function("2", props, state, self)
                styledHeading = [
                    <h6 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]
            } else if (this.state.vars === "3") {
                use = heading6Function("3", props, state, self)
                styledHeading = [
                    <h6 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>

                ]

            } else if (this.state.vars === "4") {
                use = heading6Function("4", props, state, self)

                styledHeading = [
                    <h6 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]

            } else {
                use = heading6Function("3", props, state, self)
                styledHeading = [
                    <h6 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                        onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                        onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h6>
                ]
            }
        } else {
            use = heading3Function("2", props, state, self)
            styledHeading = [
                <h3 key={this.state.keys} style={use.HEADING.heading} id={this.state.id} className={this.state.className}
                    onMouseEnter={() => this.setState({ color: use.HEADING.hoverStyle.color })}
                    onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{CHILDS}</h3>
            ]
        }

        return this.setState({ childs: CHILDS, styledHeading: styledHeading })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledHeading}
            </React.Fragment>
        )
    }
}