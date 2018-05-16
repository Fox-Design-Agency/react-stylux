import React from 'react';
import '../../css/reset.css'
import '../../css/animations.css';
import Holder from '../../Holders/Holder';
import MediaQuery from "react-responsive";
import heroFunction from "./heroFunctions/heroFunctions";
export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
            childs: '',
            box: props.box,
            styledHero: '',
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHero, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        let tempkeys = []
        const num = CHILDS.length;
        for (let i = 0; i <= num + 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        switch (this.state.box) {
            case "1":
                use = heroFunction("1", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "2":
                use = heroFunction("2", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>
                ]
                break;
            case "3":
                use = heroFunction("3", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "4":
                use = heroFunction("4", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[0]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[0]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "5":
                use = heroFunction("5", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>
                ]
                break
            default:
                use = heroFunction("1", props, state, self)
                styledHero = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>
                ]
        }
        this.setState({ childs: CHILDS, styledHero: styledHero, keys: tempkeys })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHero, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        switch (this.state.box) {
            case "1":
                use = heroFunction("1", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "2":
                use = heroFunction("2", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.heroid} className={this.state.heroClassName}>
                        <div style={use.HEROSTYLE.bottombackground}>
                            <Holder
                                direction='column'>
                                {CHILDS[0]}
                            </Holder>
                        </div>
                    </div></MediaQuery>
                ]
                break;
            case "3":
                use = heroFunction("3", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "4":
                use = heroFunction("4", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[0]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[0]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder>
                            {CHILDS[2]}
                            {CHILDS[0]}
                        </Holder>
                    </div></MediaQuery>
                ]
                break;
            case "5":
                use = heroFunction("5", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            <Holder>
                                {CHILDS[1]}
                                {CHILDS[2]}
                                {CHILDS[3]}
                            </Holder>
                            <Holder>
                                {CHILDS[4]}
                                {CHILDS[5]}
                                {CHILDS[6]}
                            </Holder>
                        </Holder>
                    </div></MediaQuery>
                ]
                break
            default:
                use = heroFunction("1", props, state, self)
                styledHero = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><div style={use.herostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.mdherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.smherostyle} id={this.state.id} className={this.state.className}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                            {CHILDS[2]}
                            {CHILDS[1]}
                        </Holder>
                    </div></MediaQuery>
                ]
        }
        this.setState({ childs: CHILDS, styledHero: styledHero })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledHero}
            </React.Fragment>
        )
    }
}
