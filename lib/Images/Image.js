import React from "react"
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
import imageFunction from "./imageFunction/imageFunction";

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className : props.className,
            size: props.size || "sm",
            box: props.box,
            childs: '',
            keys: '',
            styledImage: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        const CHILDS = React.Children.toArray(this.props.children)
        const tempkey = Math.random()
        let styledImage = '';
        if (this.state.box === "1") {
            let use = imageFunction("1", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]
        } else if (this.state.box === "2") {
            let use = imageFunction("2", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]

        } else if (this.state.box === "3") {
            let use = imageFunction("3", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]

        } else if (this.state.box === "4") {
            let use = imageFunction("4", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]

        } else if (this.state.box === "5") {

            let use = imageFunction("5", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]



        } else if (this.state.box === "6") {

            let use = imageFunction("6", this.state.size, props, state)

            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]



        } else if (this.state.box === "7") {

            let use = imageFunction("7", this.state.size, props, state)

            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]


        } else if (this.state.box === "8") {
            let use = imageFunction("8", this.state.size, props, state)

            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]


        } else {
            let use = imageFunction("4", this.state.size, props, state)
            styledImage = [
                <img key={tempkey}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]
        }
        return this.setState({ childs: CHILDS, keys: tempkey, styledImage: styledImage })

    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        const CHILDS = React.Children.toArray(newProps.children)
        let styledImage = '';
        if (this.state.box === "1") {
            let use = imageFunction("1", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]
        } else if (this.state.box === "2") {
            let use = imageFunction("2", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]


        } else if (this.state.box === "3") {
            let use = imageFunction("3", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]

        } else if (this.state.box === "4") {
            let use = imageFunction("4", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]

        } else if (this.state.box === "5") {

            let use = imageFunction("5", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]



        } else if (this.state.box === "6") {

            let use = imageFunction("6", this.state.size, props, state)

            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]



        } else if (this.state.box === "7") {

            let use = imageFunction("7", this.state.size, props, state)

            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]


        } else if (this.state.box === "8") {
            let use = imageFunction("8", this.state.size, props, state)

            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]


        } else {
            let use = imageFunction("4", this.state.size, props, state)
            styledImage = [
                <img key={this.state.keys}
                    style={use.IMAGESTYLES.imageStyles}
                    id={this.state.id}
                    className={this.state.className}
                    src={CHILDS[0]}
                    alt={CHILDS[1]}
                    onMouseEnter={() => this.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow })
                    }
                    onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                    } />]
        }
        return this.setState({ childs: CHILDS, styledImage: styledImage })

    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledImage}
            </React.Fragment>
        )
    }

}
