import React, { Component } from 'react'
import db from '../FirestoreConfig';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});


export default class GetTasks extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.deleteTask = this.deleteTask.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  deleteTask(id) {
    console.log(id)
    db.collection('tasks').doc(id).delete()
      .then(() => {
        console.log("Task deleted")
        M.toast({html: 'Task deleted'});
      });
    this.fetchTasks();
  }

  fetchTasks() {
    db.collection('tasks').get()
      .then(snapShots => {
        this.setState({
          tasks: snapShots.docs.map(doc => {
            return {
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description
            }
          })
        })
      })
      .catch(err => console.error(err));
  }
  componentDidMount() {

    this.fetchTasks();

  }
  render() {
    return (
      <div>
        <h1>Tasks!</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task => {
              return (

                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td >{task.description}</td>
                  <td>
                    <button className="btn" onClick={() => this.deleteTask(task.id)}><i className="material-icons">delete</i></button>
                    <button className="btn"><i className="material-icons">edit</i></button>
                  </td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}