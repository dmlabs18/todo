import React, { Component } from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

export default class TodoList extends Component {
  render() {
    const { todoData, onToggleDone, onToggleImportant, onDeleteItem } =
      this.props;
    const listItem = todoData.map((item) => {
      return (
        <TodoListItem
          todoItem={item}
          key={item.id}
          onToggleDone={() => onToggleDone(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onDeleteItem={() => onDeleteItem(item.id)}
        />
      );
    });
    return <ul className="list-group rounded-0">{listItem}</ul>;
  }
}
