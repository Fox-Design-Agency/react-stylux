import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';

export default class A extends Component{
    constructor(props){
        super(props);
        this.state={
            href: props.to || "#",
            childs: '',
            width: props.width,
            height: props.height,
        }
    }
    componentDidMount(){
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({
            childs: CHILDS
        })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }

    render(){
        const ASTYLE={
            width: this.state.width,
            height: this.state.height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        return(
            <a style={ASTYLE} href={this.state.href}>{this.state.childs}</a>
        )
    }
}