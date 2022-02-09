import React from "react";
import './CurrencyStyle.css'
export default class Currency extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Dollar:27000,
            Rial:1,
            Dinar:20000,
            Euro:30000,
            value:0,
            secondValue:0,
            value1:'Dollar',
            value2:'Dollar',
        }
    }
    handleChange1(event) {
        this.setState({value1: event.target.value});
      }
      handleChange2(event) {
        this.setState({value2: event.target.value});
      }

    render(){
        return <div className="container">
       <select className="button" onChange={this.handleChange1.bind(this)}>     
  <option selected value="Dollar">دلار</option>
  <option value="Rial">ریال</option>
  <option value="Dinar">دینار</option>
  <option value="Euro">یورو</option>
</select>
       <select className="button" onChange={this.handleChange2.bind(this)}>  
  <option selected value="Dollar">دلار</option>
  <option value="Rial">ریال</option>
  <option value="Dinar">دینار</option>
  <option value="Euro">یورو</option>
</select>
<input value={this.state.value} onChange={(e)=>{
    this.setState({value:e.target.value})
}}></input>
<button onClick={(e)=>{
e.preventDefault();

if(this.state.value1=='Dollar'){
if(this.state.value2=='Dollar'){
this.setState({secondValue:this.state.value});
}
if(this.state.value2=='Rial'){
this.setState({secondValue:this.state.Dollar/this.state.Rial});
}
if(this.state.value2=='Dinar'){
    this.setState({secondValue:this.state.Dollar/this.state.Dinar});
}
if(this.state.value2=='Euro'){
    this.setState({secondValue:this.state.Dollar/this.state.Euro});
}
}
if(this.state.value1=='Rial'){
if(this.state.value2=='Rial'){
this.setState({secondValue:this.state.value});
}
if(this.state.value2=='Dollar'){
this.setState({secondValue:this.state.Rial/this.state.Dollar});
}
if(this.state.value2=='Dinar'){
    this.setState({secondValue:this.state.Rial/this.state.Dinar});
}
if(this.state.value2=='Euro'){
    this.setState({secondValue:this.state.Rial/this.state.Euro});
}
if(this.state.value1=='Dinar'){
if(this.state.value2=='Dinar'){
this.setState({secondValue:this.state.value});
}
if(this.state.value2=='Dollar'){
this.setState({secondValue:this.state.Dinar/this.state.Dollar});
}
if(this.state.value2=='Rial'){
    this.setState({secondValue:this.state.Dinar/this.state.Rial});
}
if(this.state.value2=='Euro'){
    this.setState({secondValue:this.state.Dinar/this.state.Euro});
}
}
if(this.state.value1=='Euro'){
if(this.state.value2=='Euro'){
this.setState({secondValue:this.state.value});
}
if(this.state.value2=='Dollar'){
this.setState({secondValue:this.state.Euro/this.state.Dollar});
}
if(this.state.value2=='Rial'){
    this.setState({secondValue:this.state.Euro/this.state.Rial});
}
if(this.state.value2=='Dinar'){
    this.setState({secondValue:this.state.Euro/this.state.Dinar});
}
}


}
}}>محاسبه</button>
<p>{this.state.value*(this.state.secondValue)}</p>
        </div>
    }
}
