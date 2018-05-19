// import React from 'react';
// import '../css/reset.css'
// import '../css/animations.css';
// import '../css/SuperStyleSheet.css';
// import MediaQuery from "react-responsive";
// /* Start of Figure Blocks */
// export default class Figure extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             size: props.size || 'sm',
//             figid: props.figid,
//             figCapid: props.figCapid,
//             figClassName: props.figClassName,
//             figCapClassName: props.figCapClassName,
//             childs: '',
//             smdis: props.smDis || 'flex',
//             mddis: props.mdDis || 'flex',
//             margin: props.margin || '5px',
//             padding: props.padding,
//             boxShadow: props.shadow,
//             boxShadowRev: props.shadow,
//             hoverShadow: props.hovShadow,
//         }
//     }
//     componentDidMount() {
//         const CHILDS = React.Children.toArray(this.props.children)
//         this.setState({ childs: CHILDS })
//     }
//     componentWillReceiveProps(newProps) {
//         const CHILDS = React.Children.toArray(newProps.children)
//         return this.setState({ childs: CHILDS })
//     }
//     render() {
//        let caption = {
//             padding: '10px',
//             color: 'gray',
//             textAlign: 'center',
//         }
//         let smcaption = {
//             display: this.state.smDis,
//             fontSize: '6em'
//         }
//         let mdcaption = {
//             display: this.state.mdDis,
//             fontSize: '6em'
//         }
//         return (
//             <React.Fragment>
//                 <figure id={this.state.figid} className={this.state.figClassName}>
//                     {this.state.childs[0]}
//                     <figcaption style={caption} id={this.state.figCapid} className={this.state.figCapClassName}>
//                         {this.state.childs[1]}
//                     </figcaption>
//                 </figure>
//             </React.Fragment>
//         )
//     }
// }
"use strict";