import React from 'react';
import '../../css/reset.css'
import '../../css/animations.css';
import Holder from '../../Holders/Holder';
import StyleSheet from 'nestingstyles';
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
        const tempkey = Math.random()
        if (this.state.box === "1") {
            use = heroFunction("1", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder
                        direction='column'>
                        {CHILDS[0]}
                        {CHILDS[2]}
                        {CHILDS[1]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = heroFunction("2", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.heroid} className={this.state.heroClassName}>
                    <div style={use.HEROSTYLE.bottombackground}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                        </Holder>
                    </div>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = heroFunction("3", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder>
                        {CHILDS[0]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "4") {
            use = heroFunction("4", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder>
                        {CHILDS[2]}
                        {CHILDS[0]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "5") {
            use = heroFunction("5", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
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
                </div>
            ]
        } else {
            use = heroFunction("1", props, state, self)
            styledHero = [
                <div key={tempkey} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder
                        direction='column'>
                        {CHILDS[0]}
                        {CHILDS[2]}
                        {CHILDS[1]}
                    </Holder>
                </div>
            ]
        }
        this.setState({ childs: CHILDS, styledHero: styledHero, keys: tempkey })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHero, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.type === "1") {
            use = heroFunction("1", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder
                        direction='column'>
                        {CHILDS[0]}
                        {CHILDS[2]}
                        {CHILDS[1]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = heroFunction("2", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.heroid} className={this.state.heroClassName}>
                    <div style={use.HEROSTYLE.bottombackground} id={this.state.bottomid} className={this.state.bottomClassName}>
                        <Holder
                            direction='column'>
                            {CHILDS[0]}
                        </Holder>
                    </div>
                </div>
            ]
        } else if (this.state.box === "3") {
            use = heroFunction("3", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder>
                        {CHILDS[0]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "4") {
            use = heroFunction("4", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder>
                        {CHILDS[2]}
                        {CHILDS[0]}
                    </Holder>
                </div>
            ]
        } else if (this.state.box === "5") {
            use = heroFunction("5", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
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
                </div>
            ]
        } else {
            use = heroFunction("1", props, state, self)
            styledHero = [
                <div key={this.state.keys} style={use.HEROSTYLE.herostyle} id={this.state.id} className={this.state.className}>
                    <Holder
                        direction='column'>
                        {CHILDS[0]}
                        {CHILDS[2]}
                        {CHILDS[1]}
                    </Holder>
                </div>
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
