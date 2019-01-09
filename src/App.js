import React, { Component } from 'react';
import './App.css';

// Components
import Nav from './components/Nav'
import FormNewTask from './components/upload-tasks-form';
import GetTasks from './components/Get-tasks'

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      tasks: [],
      taskTitle: '',
      taskDescription: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
  }

  // submitButton(e){
  //   document.getElementById('submitButton').addEventListener("click", (e) => {
  //     e.preventDefault
  //   }, false)
  // }

  inputHandler(e) {
    // Destructuring para obtener el name, y el value
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    console.log(this.state.taskDescription)
    console.log(this.state.taskTitle)
  }


  componentWillMount() {
    console.log(this.state.taskDescription)
    console.log(this.state.taskTitle);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col s4">
              <FormNewTask />
            </div>
            <div className="col s6">
              <GetTasks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
