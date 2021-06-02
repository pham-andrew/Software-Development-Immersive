import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div>
//       <input type="text" />
//       <input type="button" value="submit" />
//       <p>Welcome, ____!</p>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      toDoList: [],
    }
    this.submit = this.submit.bind(this)
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
    this.finish = this.finish.bind(this)
  }

  submit() {
    this.setState({ username: document.getElementById("username").value })
  }

  add() {
    const newList = this.state.toDoList
    newList.push(document.getElementById("todo").value)
    this.setState({ toDoList: newList })
    // return (
    //   <span>{}</span>
    // )
    // .map(num => {<e>num</e> })
  }

  delete(event) {
    console.log(event.target.id)
    const popList = this.state.toDoList;
    popList.splice(event.target.id, 1)
    this.setState({ toDoList: popList })
  }

  finish(){
    this.setState({ toDoList: [] })
  }

  render() {
    return (
      <div>
        <input id="username" type="text" />
        <input type="button" value="submit" onClick={this.submit} />
        <p>Welcome, {this.state.username}!</p>
        <input id="todo" type="text" />
        <input type="button" value="add" onClick={this.add} />
        <ul>{this.state.toDoList.map((item, ind) => <li id={ind} > {item} <input id={ind} type="button" value="Delete" onClick={this.delete} /></li>)}</ul>
        <input type="button" onClick={this.finish} value="Finish All"/>
      </div>
    )
  }

}

// class App extends React.Component {

// }
export default App;
