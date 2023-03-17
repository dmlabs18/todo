import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      todoItem: { task, date, done, important },
      onToggleDone,
      onToggleImportant,
      onDeleteItem,
    } = this.props;
    let clazz = 'lead fw-normal mb-0';
    if (done) {
      clazz += ' done';
    }

    if (important) {
      clazz += ' important';
    }

    return (
      <li className='list-group-item d-flex align-items-center border-0 bg-transparent p-0'>
        <div className='todo-item form-check'>
          <input
            className='form-check-input me-0'
            type='checkbox'
            onChange={onToggleDone}
            checked={done}
          />
          <p className={clazz}>{task}</p>
        </div>

        <div className='py-2 d-flex align-items-center'>
          <p className='small mb-0 px-2'>
            <button className='btn p-0' title='Due on date'>
              <i className='fas fa-hourglass-half me-1 text-warning'></i>
            </button>
            {date}
          </p>
          <div className='d-flex flex-row justify-content-end mb-1'>
            <button
              className='btn btn-outline-success float-right mx-1'
              title='Important todo'
              onClick={onToggleImportant}
            >
              <i className='fa-sharp fa-solid fa-circle-exclamation'></i>
            </button>

            <button
              className='btn btn-outline-danger float-right'
              title='Delete todo'
              onClick={onDeleteItem}
            >
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}
