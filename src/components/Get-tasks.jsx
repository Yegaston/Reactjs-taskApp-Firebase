import React, { Component } from 'react'
import db from '../FirestoreConfig';


export default class GetTasks extends Component {

    state = {
        items: []
    }

    componentDidMount(){
        db.collection('tasks').get()
          .then(snapShots => {
            this.setState({
              tasks: snapShots.docs.map(doc => {
                console.log(doc.data());
              })
            })
          })
    }
  render() {
    return (
      <div>
        <h1>XD</h1>
      </div>
    )
  }
}
