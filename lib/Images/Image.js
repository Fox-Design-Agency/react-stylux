import React from "react"
import '../css/reset.css'
import '../css/animations.css';
import MediaQuery from "react-responsive";
import imageFunction from "./imageFunction/imageFunction";

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
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
        const num = CHILDS.length;
        let tempkeys = []
        for (let i = 0; i <= num + 3; i++) {
            tempkeys.push(tempkeys[i] = Math.random())
        }
        let styledImage, use = '';
        switch (this.state.box) {
            case "1":
                use = imageFunction("1", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "2":
                use = imageFunction("2", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "3":
                use = imageFunction("3", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "4":
                use = imageFunction("4", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "5":

                use = imageFunction("5", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "6":

                use = imageFunction("6", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;

            case "7":

                use = imageFunction("7", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;
            case "8":
                use = imageFunction("8", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;
            default:
                use = imageFunction("4", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={tempkeys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={tempkeys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
        }
        return this.setState({ childs: CHILDS, keys: tempkeys, styledImage: styledImage })

    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        const CHILDS = React.Children.toArray(newProps.children)
        let styledImage, use = '';
        switch (this.state.box) {
            case "1":
                use = imageFunction("1", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "2":
                use = imageFunction("2", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "3":
                use = imageFunction("3", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "4":
                use = imageFunction("4", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "5":

                use = imageFunction("5", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
                break;
            case "6":

                use = imageFunction("6", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;

            case "7":

                use = imageFunction("7", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;
            case "8":
                use = imageFunction("8", this.state.size, props, state)

                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]

                break;
            default:
                use = imageFunction("4", this.state.size, props, state)
                styledImage = [
                    <MediaQuery key={this.state.keys[0]} minWidth={1224}><img
                        style={use.imageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><img
                        style={use.mdimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}><img
                        style={use.smimageStyles}
                        id={this.state.id}
                        className={this.state.className}
                        src={CHILDS[0]}
                        alt={CHILDS[1]}
                        onMouseEnter={() => this.setState({ boxShadow: use.hoverStyle.boxShadow })
                        }
                        onMouseLeave={() => this.setState({ boxShadow: this.state.boxShadowRev })
                        } /></MediaQuery>]
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
