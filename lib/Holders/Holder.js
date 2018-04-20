import React, { Component } from 'react';
import '../Components 1.0.0/reset.css';
import StyleSheet from 'nestingstyles';
import holderSwitch1 from './holderFunctions/holderSwitch0_5';
import holderSwitch2 from './holderFunctions/holderSwitch6_10';
import holderSwitch3 from './holderFunctions/holderSwitch11_15';
import holderSwitch4 from './holderFunctions/holderSwitch16_20';

/* Start of Holder 1 Component */
export default class Holder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            height: props.height,
            maxHeight: props.maxHeight,
            width: props.width || "100%",
            maxWidth: props.maxWidth,
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || props.direction,
            mdflexDir: props.mdflexDir || props.direction,
            childs: [],
            className: props.className,
            id: props.id,
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20 = '';
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = holderSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}</div>
            ]
        } else if (num === 2) {
            let use = holderSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}</div>
            ]
        } else if (num === 3) {
            let use = holderSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}</div>
            ]
        } else if (num === 4) {
            let use = holderSwitch1(4, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</div>
            ]
        } else if (num === 5) {
            let use = holderSwitch1(5, props, state)

            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</div>
            ]
        } else if (num === 6) {
            let use = holderSwitch2(6, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</div>
            ]
        } else if (num === 7) {
            let use = holderSwitch2(7, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</div>
            ]
        } else if (num === 8) {
            let use = holderSwitch2(8, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</div>
            ]
        } else if (num === 9) {
            let use = holderSwitch2(9, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</div>
            ]
        } else if (num === 10) {
            let use = holderSwitch2(10, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</div>
            ]
        } else if (num === 11) {
            let use = holderSwitch3(11, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</div>
            ]
        } else if (num === 12) {
            let use = holderSwitch3(12, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</div>
            ]
        } else if (num === 13) {
            let use = holderSwitch3(13, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</div>
            ]
        } else if (num === 14) {
            let use = holderSwitch3(14, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</div>
            ]
        } else if (num === 15) {
            let use = holderSwitch3(15, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</div>
            ]
        } else if (num === 16) {
            let use = holderSwitch4(16, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</div>
            ]
        } else if (num === 17) {
            let use = holderSwitch4(17, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</div>
            ]
        } else if (num === 18) {
            let use = holderSwitch4(18, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</div>
            ]
        } else if (num === 19) {
            let use = holderSwitch4(19, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</div>
            ]
        } else if (num === 20) {
            let use = holderSwitch4(20, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</div>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder})

    }
    //below is not done and will most likely not render correctly
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20 = '';
        const CHILDS = React.Children.toArray(newProps.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = holderSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}</div>
            ]
        } else if (num === 2) {
            let use = holderSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}</div>
            ]
        } else if (num === 3) {
            let use = holderSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}</div>
            ]
        } else if (num === 4) {
            let use = holderSwitch1(4, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</div>
            ]
        } else if (num === 5) {
            let use = holderSwitch1(5, props, state)

            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</div>
            ]
        } else if (num === 6) {
            let use = holderSwitch2(6, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</div>
            ]
        } else if (num === 7) {
            let use = holderSwitch2(7, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</div>
            ]
        } else if (num === 8) {
            let use = holderSwitch2(8, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</div>
            ]
        } else if (num === 9) {
            let use = holderSwitch2(9, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</div>
            ]
        } else if (num === 10) {
            let use = holderSwitch2(10, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</div>
            ]
        } else if (num === 11) {
            let use = holderSwitch3(11, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</div>
            ]
        } else if (num === 12) {
            let use = holderSwitch3(12, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</div>
            ]
        } else if (num === 13) {
            let use = holderSwitch3(13, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</div>
            ]
        } else if (num === 14) {
            let use = holderSwitch3(14, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</div>
            ]
        } else if (num === 15) {
            let use = holderSwitch3(15, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</div>
            ]
        } else if (num === 16) {
            let use = holderSwitch4(16, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</div>
            ]
        } else if (num === 17) {
            let use = holderSwitch4(17, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</div>
            ]
        } else if (num === 18) {
            let use = holderSwitch4(18, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</div>
            ]
        } else if (num === 19) {
            let use = holderSwitch4(19, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</div>
            ]
        } else if (num === 20) {
            let use = holderSwitch4(20, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</div>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder })
    }
    render() {
        const HOLDING = {
            width: '100%',
        }
        return (
            <React.Fragment>
                {this.state.childs}
            </React.Fragment>
        )
    }
}
/* End of Holder Component */