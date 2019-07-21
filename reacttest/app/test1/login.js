import React,{Component} from "react";
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={

      text:","
    }
  }
  change=(e)=>{
        console.log(e.target.value);
        this.setState({
          text:e.target.value
        })
  }
  submit=(e)=>{
    e.preventDefault();
    console.log(this.state.text);
    return this.state.text;
  }
  render(){
    return (
      <form>
         <input onChange={this.change}/>
         <button onClick={this.submit}>登录</button>
      </form>
    )
  }
}
