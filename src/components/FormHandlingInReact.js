import React, { Component } from 'react';

class FormHandlingInReact extends Component {

    constructor(props) {
        super(props);
        
        this.state = {userName:'', comments:'', topic:'angular'}
    }
    handleUserNameChange = (event) => {
        this.setState(
            {
                userName: event.target.value
            }
        )
    }
    handleCommentsChange = (event) => {
        this.setState(
            {
                comments: event.target.value
            }
        )
    }
    handleSelectChange = (event) => {
        this.setState(
            {
                topic: event.target.value
            }
        )
    }
    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();// this will prevent the default behaviour of form submission. i.e, remvoing va;ues from form field
    }
    render() {
        const { userName, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                 <div>
                     <label>UserName</label>
                     <input type='text' value={userName} onChange={this.handleUserNameChange} />
                 </div>
                 <div>
                     <label>Comments</label>
                     <textarea value={comments} onChange={this.handleCommentsChange} />
                 </div>
                 <div>
                     <label>Topics</label>
                     <select value={this.state.topic} onChange={this.handleSelectChange} >
                         <option value="react">React</option>
                         <option value="angular">Angular</option>
                         <option value="vue">Vue</option>
                     </select>
                 </div>
                 <button type='submit'>Submit</button> 
                 {/* type='submit' will give the same onSubmit faeture of submitting the user input if Form tage is not used */}

            </form>
        );
    }
}

export default FormHandlingInReact;