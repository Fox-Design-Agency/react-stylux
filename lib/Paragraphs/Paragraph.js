import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
import paragraphFunction from "./paragraphFunctions/paragraphFunctions";
export default class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            paragraphStyle: '',
            box: props.box,
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledParagraph, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        const tempkey = Math.random()
        if (this.state.box === "1") {
            use = paragraphFunction("1", props, state, self)
            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "2") {
            use = paragraphFunction("2", props, state, self)
            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "3") {
            use = paragraphFunction("3", props, state, self)
            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]

        } else if (this.state.box === "4") {
            use = paragraphFunction("4", props, state, self)
            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "5") {
            use = paragraphFunction("5", props, state, self)
            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else {
            use = paragraphFunction("1", props, state, self)

            styledParagraph = [
                <p key={tempkey}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        }
        this.setState({ childs: CHILDS, paragraphStyle: styledParagraph, keys: tempkey })
    }
    componentWillReceiveProps(newProps) {
        const props = this.newProps;
        const state = this.state;
        let styledParagraph, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = paragraphFunction("1", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "2") {
            use = paragraphFunction("2", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "3") {
            use = paragraphFunction("3", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]

        } else if (this.state.box === "4") {
            use = paragraphFunction("4", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else if (this.state.box === "5") {
            use = paragraphFunction("5", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        } else {
            use = paragraphFunction("1", props, state, self)
            styledParagraph = [
                <p key={this.state.keys}
                    style={use.PARAGRAPHSTYLES.paragraph} id={this.state.id} className={this.state.className}
                >{CHILDS}</p>]
        }
        this.setState({ childs: CHILDS, paragraphStyle: styledParagraph })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.paragraphStyle}
            </React.Fragment>
        )
    }
}