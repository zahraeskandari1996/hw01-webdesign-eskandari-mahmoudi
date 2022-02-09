import React,{Component} from 'react';
import {Routes} from 'react-router-dom';

import './../assets/styles/changeColor.css'
export default class ChangeColor extends Component{
    constructor(){
        super();
        this.state={
color:'#000'
        }
    }
    render(){
        return(
            <div style={{backgroundColor:this.state.color}} className={'changeColor'}>
<input type='color' defaultValue={this.state.color} value={this.state.color}  onChange={(e)=>{this.setState({color:e.target.value})}} />
            </div>
        )
    }
}