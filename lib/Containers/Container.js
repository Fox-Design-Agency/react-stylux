import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
import containerSwitch1 from './containerFunctions/containerSwitch0_5';
import containerSwitch2 from './containerFunctions/containerSwitch6_10';
import containerSwitch3 from './containerFunctions/containerSwitch11_15';
import containerSwitch4 from './containerFunctions/containerSwitch16_20';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            height: props.height,
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            childs: []
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20 = '';
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = containerSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>,
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}</section>
            ]
        } else if (num === 2) {
            let use = containerSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if(num === 3){
            let use = containerSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        } else if (num === 4) {
            let use = containerSwitch1(4, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</section>
            ]
        } else if (num === 5) {
            let use = containerSwitch1(5, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</section>
            ]
        } else if (num === 6) {
            let use = containerSwitch2(6, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</section>
            ]
        } else if (num === 7) {
            let use = containerSwitch2(7, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</section>
            ]
        } else if (num === 8) {
            let use = containerSwitch2(8, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</section>
            ]
        } else if (num === 9) {
            let use = containerSwitch2(9, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</section>
            ]
        } else if (num === 10) {
            let use = containerSwitch2(10, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</section>
            ]
        } else if (num === 11) {
            let use = containerSwitch3(11, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</section>
            ]
        } else if (num === 12) {
            let use = containerSwitch3(12, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</section>
            ]
        } else if (num === 13) {
            let use = containerSwitch3(13, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</section>
            ]
        } else if (num === 14) {
            let use = containerSwitch3(14, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</section>
            ]
        } else if (num === 15) {
            let use = containerSwitch3(15, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</section>
            ]
        } else if (num === 16) {
            let use = containerSwitch4(16, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</section>
            ]
        } else if (num === 17) {
            let use = containerSwitch4(17, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</section>
            ]
        } else if (num === 18) {
            let use = containerSwitch4(18, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</section>
            ]
        } else if (num === 19) {
            let use = containerSwitch4(19, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</section>
            ]
        } else if (num === 20) {
            let use = containerSwitch4(20, props, state)

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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</section>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder, blocks })

    }
    //below is not done and will most likely not render correctly
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20 = '';
        const CHILDS = React.Children.toArray(newProps.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = containerSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>,
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}</section>
            ]
        } else if (num === 2) {
            let use = containerSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if(num === 3){
            let use = containerSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        } else if (num === 4) {
            let use = containerSwitch1(4, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</section>
            ]
        } else if (num === 5) {
            let use = containerSwitch1(5, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</section>
            ]
        } else if (num === 6) {
            let use = containerSwitch2(6, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</section>
            ]
        } else if (num === 7) {
            let use = containerSwitch2(7, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</section>
            ]
        } else if (num === 8) {
            let use = containerSwitch2(8, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</section>
            ]
        } else if (num === 9) {
            let use = containerSwitch2(9, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</section>
            ]
        } else if (num === 10) {
            let use = containerSwitch2(10, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</section>
            ]
        } else if (num === 11) {
            let use = containerSwitch3(11, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</section>
            ]
        } else if (num === 12) {
            let use = containerSwitch3(12, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</section>
            ]
        } else if (num === 13) {
            let use = containerSwitch3(13, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</section>
            ]
        } else if (num === 14) {
            let use = containerSwitch3(14, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</section>
            ]
        } else if (num === 15) {
            let use = containerSwitch3(15, props, state)
           
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</section>
            ]
        } else if (num === 16) {
            let use = containerSwitch4(16, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</section>
            ]
        } else if (num === 17) {
            let use = containerSwitch4(17, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</section>
            ]
        } else if (num === 18) {
            let use = containerSwitch4(18, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</section>
            ]
        } else if (num === 19) {
            let use = containerSwitch4(19, props, state)
            
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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</section>
            ]
        } else if (num === 20) {
            let use = containerSwitch4(20, props, state)

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
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</section>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder, blocks })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.childs}
            </React.Fragment>
        )
    }
}
/* End of Container Component */