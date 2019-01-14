import React, { Component } from 'react'
import db from '../FirestoreConfig';
import M from 'materialize-css'

export default class formNewTask extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            description: ''

        }
        this.inputHandler = this.inputHandler.bind(this);
        this.formHandler = this.formHandler.bind(this);
    }

    inputHandler(e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    async formHandler(e) {
        // Intentamos añadir la tarea a la bd
        try {
            if (this.state.title !== '' && this.state.description !== '') {
                await db.collection("tasks").add({
                    title: this.state.title,
                    description: this.state.description
                });
                console.log(`task: ${this.state.title}, with description ${this.state.description} is added`);
                M.toast({ html: 'Task added.' });
                e.preventDefault();
            } else {
                M.toast({html: 'Title or description empty'});
                e.preventDefault();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        console.log(this.state.title, this.state.description);
    }
    render() {
        return (
            <form onSubmit={this.formHandler}>
                {/* {console.log(this.state.title, this.state.description)} */}
                <div className="input-field">
                    <input name="title" type="text" className="validate" onChange={this.inputHandler} />
                    <label htmlFor="taskTitle">Task Title</label>
                </div>
                <div className="input-field">
                    <textarea name="description" className="materialize-textarea" onChange={this.inputHandler}></textarea>
                    <label htmlFor="taskDescription">Task description</label>
                </div>
                <button id="submitButton" onClick={this.submitTask} type="submit" className="btn waves-effect waves-light">
                    Send <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}
