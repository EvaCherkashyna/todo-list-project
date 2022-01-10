import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./todo-list-item.css"
export default class TodoListItem extends Component {
  render() {
    const { label,onDeleted ,onToggleDone, onToggleImportant,done, important } = this.props;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if(important){
      classNames += ' important';
    }
    return (
      <span className={classNames}>
        <span onClick={onToggleDone}
          className="todo-list-item-label"
          >
          {label}
        </span>
        <span>
          <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm float-right">
            <i className="fas fa-exclamation" ></i>
          </button>

          <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm float-right">
            <i className="fas fa-trash-alt"></i>
          </button>
        </span>
      </span>
    );
  };
}

