import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar';
import React from 'react';

// Render component
function Welcome(props){
  return <h1> Hello,{props.name}</h1>
}
const element = <Welcome name="Sara"/>
ReactDOM.render(
  element,
  document.getElementById('root')
);
// tao app render ra welcome nhieu lan
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
function App(){
  return(
    <div>
<Welcome name="Sara" />
<Welcome name ="Cahal"/>
<Welcome name = "Edite"/>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// 1 component chua duoc phan tach
function Comment(props){
  return(
<div className="Comment">
<div className="UserInfor">
<img className="Avatar"
src={props.author.avatarUrl}
alt={props.author.name}
/>
<div className="UserInfo-name">
  {props.author.name}
</div>
</div>
<div className="Comment-text">
  {props.text}
</div>
<div className="Comment-date">
  {formatDate(props.date)}
</div>
</div>
);
}
//chia thanh cac component con
//Avatar
function Avatar(props){
  return(
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
    />
  );
}
// don gian hoa Comment
function Comment(props){
  return(
    <div className="Comment">
    <div className="UserInfo">
      <Avatar user={props.author}/>
      <div className="UserInfo-name">
        {props.author.name}
        </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
    </div>
  );
}
// UserInfo
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
// chung ta co the don gian hoa commment hon nua
function Commment(){
  return(
    <div className="Coment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
// props chi dung de doc
function sum(a,b){
  return a +b;
}
// impure=> vi no thay doi gia tri cua tham so dau vao
function withdraw(account, amount){
  account.total -= amount;
}
//update ui vi du dong ho tich tac
function tick(){
  const element = (
    <div>
<h1>Hello,world!</h1>
<h2> It is {new Date().toLocaleTimeString()}.</h2>
</div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick,1000);
// dong goi clock va tu cap nhat moi giay
function Clock(props){
  return(
    <div>
<h1>Hello, world</h1>
<h2>It is {props.date.toLocaleTimeString()}.</h2>
</div>
  )
}
function tick(){
  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
}
setInterval(tick,1000);

function App() {
  return (
    <div className="App">
     <h1>Hello, world</h1>
     <Avatar />
    </div>
  );
}

export default App;
/// Dinh nghia mot class la clock de thay doi gio cua no mot cach tu dong
class Clock extends React.Component{
  contructor(props){
    supper(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
