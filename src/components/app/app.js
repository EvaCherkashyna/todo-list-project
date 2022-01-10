import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter:'all'

  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)]
      return {
        todoData: newArray,
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }

    })

  }
  toggleProperty(arr, id, propName) {

    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
  }
  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      }
    })
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      }
    })
  }
  search(items, term) {
    if (term.length == 0) {
      return items;
    }
    return items.filter((el) => { return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1 })
  }
  onSearchChange=(term)=>{
this.setState({term})
  }
  onFilterChange=(filter)=>{
    this.setState({filter})
  }
  filter(items,filter){
switch(filter){
case 'all':return items;
case 'active':return items.filter((el)=>!el.done);
case 'done':return items.filter((el)=>el.done);
// default:return items;
}
  }
  render() {
    const { todoData, term,filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term),filter)
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
  
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>

          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <ItemAddForm onItemAdded={this.addItem} />
        <TodoList todos={visibleItems} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
       
      </div>
    )
  };
};
