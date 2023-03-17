import React, { Component } from "react";

import AddTask from "../add-task/add-task";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import StatusFilter from "../status-filter/status-filter";
import TodoList from "../todo-list/todo-list";

import "./app.css";

export default class App extends Component {
    randId = 1;

    state = {
        todoData: [
            this.creatTodoItem("React"),
            this.creatTodoItem("JS", "2023-06-09"),
            this.creatTodoItem("HTML"),
        ],
        searchWord: "",
        filter: "all",
    };

    creatTodoItem(task, date = "no date") {
        return {
            task,
            date,
            important: false,
            done: false,
            id: this.randId++,
        };
    }

    onToggle(arr, id, propertyItem) {
        const indx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[indx];
        const newItem = { ...oldItem, [propertyItem]: !oldItem[propertyItem] };
        return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.onToggle(todoData, id, "done") };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.onToggle(todoData, id, "important") };
        });
    };

    searchTask(arr, searchEl) {
        if (searchEl.length === 0) return arr;
        return arr.filter(
            (el) => el.task.toLowerCase().indexOf(searchEl.toLowerCase()) > -1
        );
    }

    onSearchChange = (searchWord) => {
        this.setState({
            searchWord,
        });
    };

    onDelete(arr, id) {
        const indx = arr.findIndex((el) => el.id === id);
        return [...arr.slice(0, indx), ...arr.slice(indx + 1)];
    }

    onDeleteItem = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.onDelete(todoData, id) };
        });
    };

    onTaskAdded = (text, date) => {
        this.setState(({ todoData }) => {
            return { todoData: [...todoData, this.creatTodoItem(text, date)] };
        });
    };

    filterTask(arr, filter) {
        switch (filter) {
            case "all":
                return arr;
            case "active":
                return arr.filter((el) => !el.done);
            case "done":
                return arr.filter((el) => el.done);
            default:
                return arr;
        }
    }

    onFilterChange = (filter) => {
        this.setState({
            filter,
        });
    };

    render() {
        const visibilityEl = this.filterTask(
            this.searchTask(this.state.todoData, this.state.searchWord),
            this.state.filter
        );

        return (
            <section className='todo-app vh-100'>
                <div className='container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body'>
                                    <AppHeader />
                                    <AddTask onTaskAdded={this.onTaskAdded} />
                                    <hr className='my-4' />
                                    <div className='d-flex justify-content-end align-items-center mb-2 pt-2 pb-3'>
                                        <SearchPanel
                                            onSearchChange={this.onSearchChange}
                                        />
                                        <StatusFilter
                                            filter={this.state.filter}
                                            onFilterChange={this.onFilterChange}
                                        />
                                    </div>
                                    <TodoList
                                        todoData={visibilityEl}
                                        onToggleDone={this.onToggleDone}
                                        onToggleImportant={
                                            this.onToggleImportant
                                        }
                                        onDeleteItem={this.onDeleteItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
