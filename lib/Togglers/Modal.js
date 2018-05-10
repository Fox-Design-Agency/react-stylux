import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import modalFunction from "./togglerFunctions/modalFunctions";
export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            boxTop: props.boxTop || '40%',
            boxRight: props.boxRight || '45%',
            boxLeft: props.boxLeft,
            boxBottom: props.boxBottom,
            boxPosition: props.boxPosition || 'fixed',
            boxBackground: props.boxBackground || 'white',
            boxHeight: props.boxHeight || '200px',
            boxWidth: props.boxWidth || '200px',
            boxAlign: props.boxAlign || 'center',
            boxJustify: props.boxJustify || 'center',
            buttonText: props.buttonText || 'Modal 1',
            boxShadow: props.boxShadow || '1px 2px 2px black',
            btnBackground: props.btnBackground || 'white',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            boxId: props.boxId,
            titleId: props.titleId,
            backId: props.backId,
            titleClassName: props.titleClassName,
            boxClassName: props.boxClassName,
            backClassName: props.backClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            childs: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            keys: '',
            styledModal: '',
            box: props.box
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempKeys = []
        for (let i = 0; i <= CHILDS; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        if (this.state.box === "1") {
            use = modalFunction("1", props, state, self)
            styledModal = [
                <div key={this.state.keys}>
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.BOXSTYLES} id={this.state.boxId} className={this.state.boxClassName}>
                        <button style={use.BTNSTYLE} id={this.state.btnId} className={this.state.btnClassName} onClick={this.toggle}>X</button>
                        {CHILDS}
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = modalFunction("2", props, state, self)
            styledModal = [
                <div key={tempKeys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.MODAL} onClick={this.toggle}>
                        <div style={use.MODALCONTENT}>
                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                            {CHILDS}
                        </div>
                    </div>
                </div>


            ]


        } else if (this.state.box === "3") {
            use = modalFunction("3", props, state, self)
            styledModal = [
                <div key={tempKeys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
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
                </div>

            ]

        } else {
            use = modalFunction("2", props, state, self)
            styledModal = [
                <div key={tempKeys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.MODAL} onClick={this.toggle}>
                        <div style={use.MODALCONTENT}>
                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                            {CHILDS}
                        </div>
                    </div>
                </div>
            ]
        }

        this.setState({ childs: CHILDS, styledModal: styledModal, keys: tempKeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)




        return this.setState({ childs: CHILDS, styledModal: styledModal })
    }
    toggle() {
        const props = this.props;
        const state = this.state;
        let styledModal, use = '';
        const self = this;
        let show = !this.state.show
        if (this.state.box === "1") {
            use = modalFunction("1", props, state, self, show)
            styledModal = [
                <div key={this.state.keys}>
                    <div style={use.CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.BOXSTYLES} id={this.state.boxId} className={this.state.boxClassName}>
                        <button style={use.BTNSTYLE} id={this.state.btnId} className={this.state.btnClassName} onClick={this.toggle}>X</button>
                        {this.state.childs}
                    </div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = modalFunction("2", props, state, self, show)
            styledModal = [
                <div key={this.state.keys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.MODAL} onClick={this.toggle}>
                        <div style={use.MODALCONTENT}>
                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                            {this.state.childs}
                        </div>
                    </div>
                </div>
            ]



        } else if (this.state.box === "3") {
            use = modalFunction("3", props, state, self, show)
            styledModal = [
                <div key={this.state.keys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
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
                </div>

            ]

        } else {
            use = modalFunction("2", props, state, self, show)
            styledModal = [
                <div key={this.state.keys}>
                    <div style={use.OPENERBTN} onClick={this.toggle}>
                        {this.state.buttonText}
                    </div>
                    <div style={use.MODAL} onClick={this.toggle}>
                        <div style={use.MODALCONTENT}>
                            <span style={use.CLOSEBTN} onClick={this.toggle}>&times;</span>
                            {this.state.childs}
                        </div>
                    </div>
                </div>

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