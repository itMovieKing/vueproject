import React,{Component} from "react";
import ReactDom from "react-dom";
import Login from "./login.js";
import "./test.css"
export default class Test extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:"please login"
    }
  }
  render(){
    return (
      <div>
          <span>{this.state.msg}</span>
          <Login ref="login"/>
      </div>

    )
  }
}
{/*渲染多个组件*/}

  const numbers=[1,2,3,4,5];
  const listItems=numbers.map((number)=><li key={number.toString()}>{number}</li>);
{/*受控组件，处理表单提交的函数*/}
class NameForm extends Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      tvalue:"please"
    }
  }
  handlechange=(e)=>{
    this.setState({
      value:event.target.value
    });
  }
  handlesubmit=(e)=>{
    alert('a name was submitted:'+this.state.value);
    e.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handlesubmit}>
         <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handlechange} />
         </label>
         <input type="submit" value="submit"/>
         <textarea value={this.state.tvalue} onChange={this.handlechange}></textarea>
      </form>
    )
  }
}
{/*公用状态数据找一个共享的父组件*/}
function BoilingVerdict(props){
  if(props.celsius>=100){
    return <p>水会烧开</p>
  }
}
ReactDom.render(
  <NameForm/>,
  document.getElementById("test")
)


{/*
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <Welcome name="Sara" />;
  function App(){
    return(
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="HHHH" />
      </div>
    )
  }
  ReactDom.render(
    <App/>,
    document.getElementById("test")
  );*/}

{/*
  export default class Welcome extends Component{
  render(){
    return <h2>hello,{this.props.name}</h2>
  }
  }
  ReactDom.render(
  <Welcome/>,
  document.getElementById("test")
  )*/}

{/*计时器*/}
{/*
  function tick(){
    const element=(
      <div>
         <h1>hello,world</h1>
         <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDom.render(element,document.getElementById("test"));
  }
  setInterval(tick,1000);
  */}
