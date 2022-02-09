import React from "react";
import './Bank.css'
export default class Bank extends React.Component{
    constructor(props){
        super(props);
        this.state={
            amount:0,
            count:0,
            profit:0,
            part:0,
        }
    }
    calcBMI=(event)=>{
        event.preventDefault();
        let total = parseFloat(this.state.amount)+parseFloat(this.state.amount*(this.state.profit/100))
        this.setState({
            part:(parseFloat(this.state.amount)+parseFloat(this.state.amount*(this.state.profit/100)))/parseFloat(this.state.count)
        })
    }
    render(){
        return <div className="container">
            
                       <div className={'inputs'}>

           <form onSubmit={this.calcBMI}>
                <input className="input1" type={'number'} min={0} required placeholder={'کل وام'} onChange={(e)=>{this.setState({amount:e.target.value})}} />
                <input className="input2" type={'number'} min={0} required placeholder={'تعداد قسط'} onChange={(e)=>{this.setState({count:e.target.value})}} />
                <input className="input3" type={'number'} min={0} required placeholder={'سود بانکی'} onChange={(e)=>{this.setState({profit:e.target.value})}} />
                <button  type='submit' className={'button'}>محاسبه</button>
                </form>
                <p>مبلغ هر قسط : {parseInt(this.state.part,10)}</p>

           </div>
        </div>
    }
}
