import React, { Component } from 'react'

export default class formNewTask extends Component {
    render() {
        return (
            <form >
                <div className="input-field">
                    <input name="taskTitle" type="text" className="validate" onChange={this.inputHandler} />
                    <label htmlFor="taskTitle">Task Title</label>
                </div>
                <div className="input-field">
                    <textarea name="taskDescription" className="materialize-textarea" onChange={this.inputHandler}></textarea>
                    <label htmlFor="taskDescription">Task description</label>
                </div>
                <button id="submitButton" onClick={this.submitTask} type="submit" className="btn waves-effect waves-light">
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}
