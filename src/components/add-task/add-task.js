import React, { Component } from "react";

import "./add-task.css";

export default class AddTask extends Component {
  state = {
    task: "",
    dedline: "no date",
  };

  onTaskChange = (e) => {
    let dedlineDate = document.querySelector('input[type="date"]').value;
    if (dedlineDate === "") dedlineDate = this.state.dedline;
    this.setState({
      task: e.target.value,
      dedline: dedlineDate,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let dedlineDate = document.querySelector('input[type="date"]').value;
    if (!this.state.task) return;
    if (dedlineDate === "") dedlineDate = this.state.dedline;
    this.props.onTaskAdded(this.state.task, dedlineDate);
    this.setState({
      task: "",
      dedline: "",
    });
  };

  render() {
    return (
      <form
        className='d-flex flex-row align-items-center'
        onSubmit={this.onSubmit}
      >
        <div className='add-task d-flex flex-row align-items-center'>
          <input
            type='text'
            className='form-control'
            placeholder='Add new task...'
            value={this.state.task}
            onChange={this.onTaskChange}
          />
          <input type='date' id='date' title='Set deadline' />
        </div>
        <button type='button' className='btn btn-info' onClick={this.onSubmit}>
          Add
        </button>
      </form>
    );
  }
}
