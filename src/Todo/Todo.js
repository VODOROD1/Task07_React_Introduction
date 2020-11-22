
import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { addTaskAction, removeTaskAction, changeTaskAction, completeTaskAction, changeFilterAction } from '../.store/actions/actionCreator';
import TodoInput from '../components/todo-input/TodoInput';
import TodoList from '../components/todo-list/TodoList';
import Search from '../components/search/Search.js';
import ChangeModal from '../components/change-modal/ChangeModal.js';
import AddModal from '../components/add-modal/AddModal.js';

import store from '../.store/store';

class Todo extends Component {
// Todo является компонентом-контейнером

  state = this.getCurrentStateFromStore();
////////////////////////////////////////////////////
  // Подключение redux-store
  getCurrentStateFromStore() {
    return {
      newTaskText: '',
      newTaskTitle: '',
      changedTaskText: '',
      changedTaskTitle: '',
      choicedTaskID: '',
      IDofSearchedTask: 0,
      changeModalIsOpen: false,
      addModalIsOpen: false,
      tasks: store.getState().tasksReducer,
      // filter: store.getState().filtersReducer,
    }
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  }
  
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  
  componentWillUnmount() {
    this.unsubscribeStore();
  }
///////////////////////////////////////////////////

  removeTask = (e,id) => {
    if (confirm("Подтверждение удаления")) {
      store.dispatch(removeTaskAction(id))
    } 
    e.stopPropagation();
  };
  completeTask = (id) => store.dispatch(completeTaskAction(id));
  changeFilter = (activeFilter) => store.dispatch(changeFilterAction(activeFilter));

// Далее идут обработчики ввода в поля данных
  handleInputTitleChangeOfNewTaskField = ({ target: { innerText } }) => {
    this.setState({
      newTaskTitle: innerText,
    })
  }

  handleInputTextChangeOfNewTaskField = ({ target: { innerText } }) => {
    this.setState({
      newTaskText: innerText,
    })
  }

  handleInputTitleChangeOfChangedTaskField = ({ target: { innerText } }) => {
    this.setState({
      changedTaskTitle: innerText,
    })
  }

  handleInputTextChangeOfChangedTaskField = ({ target: { innerText } }) => {
    this.setState({
      changedTaskText: innerText,
    })
  }

// Открытие и закрытие модального окна для изменения заметки
  openChangeModal = (id) => {
    // метод, заполняющий поле текстом, выбранной заметки
    let choicenTask = this.state.tasks.filter(task => task.id == id)[0];
    this.setState({
      choicedTaskID: id,
      changedTaskText: choicenTask.text,
      changedTaskTitle: choicenTask.title,
      changeModalIsOpen: true,
    })
  }
  closeChangeModal = () => {
    this.setState({
      changeModalIsOpen: false,
    })
  }
///////////////////////////////////////////////////////////

// Открытие и закрытие модального окна для добавления заметки
openAddModal = () => {
  // метод, заполняющий поле текстом, выбранной заметки
  this.setState({
    addModalIsOpen: true,
  })
}
closeAddModal = () => {
  this.setState({
    addModalIsOpen: false,
  })
}
///////////////////////////////////////////////////////////

  validationModalFields = () => {

  }

  changeTask = () => {
    const { changedTaskTitle, changedTaskText, choicedTaskID } = this.state;
    if(changedTaskText.length > 1 && newTaskTitle.length <=30) {
      store.dispatch(changeTaskAction( choicedTaskID, changedTaskTitle, changedTaskText, false ));
      this.setState({
        choicedTaskID: 0,
        changedTaskTitle: '',
        changedTaskText: '',
      })
      this.setState({
        changeModalIsOpen: false,
      })
    }
  }

  addTask = (flag) => { // { key }
    const { newTaskTitle, newTaskText } = this.state; // из стэйта получаем введенное в input значение
    // валидация задачи  && key === 'Enter'
    if (flag) { // задача добавляется по нажатию на клавишу enter
      store.dispatch(addTaskAction((new Date()).getTime(), newTaskTitle, newTaskText, false ));
      this.setState({
        newTaskTitle: '',
        newTaskText: '',
      })
      this.setState({
        addModalIsOpen: false,
      })
    }
  }

  searchTaskHandler = (e, searchFieldValue) => {
    const {tasks} = this.state;
    let IDofSearchedTask; 
    e.preventDefault();
    if(searchFieldValue.length == 0) {
      IDofSearchedTask = null;
    } else {
      let searchValue = searchFieldValue.replace(/^\s+$/g, "");
      // let IDofSearchedTask = null;
      tasks.forEach(function(task) {
        if(task.text == searchValue) {
          IDofSearchedTask = task.id;
        }
      })
    }
    if(IDofSearchedTask == undefined) {
      IDofSearchedTask = 0;
    }
    this.setState({
      IDofSearchedTask: IDofSearchedTask,
    })
  }

  filterTasks = () => {
    const {tasks, IDofSearchedTask} = this.state;
    if(IDofSearchedTask == null) {
      return [];
    } else if(IDofSearchedTask == 0) { 
      return tasks; 
    } else {
      return tasks.filter(task => task.id == IDofSearchedTask);
    } 
  }

  render() {
    const { changedTaskTitle, changedTaskText, newTaskText, newTaskTitle, tasks, changeModalIsOpen, addModalIsOpen} = this.state;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks();

    console.log(isTasksExist ? 'Вывод' : 'Не вывод');
    return (
      <div className="todo-wrapper">
        
        <Search tasksList={tasks} searchTaskHandler={this.searchTaskHandler} />

        <AddModal 
            clickToAdd={this.addTask} 
            titleOnChange={this.handleInputTitleChangeOfNewTaskField} 
            textOnChange={this.handleInputTextChangeOfNewTaskField}
            valueTitle={newTaskTitle} 
            valueText={newTaskText}
            isOpen={addModalIsOpen}
            close={this.closeAddModal}
            open={this.openAddModal}
        />

        <ChangeModal 
            clickToChange={this.changeTask} 
            textOnChange={this.handleInputTextChangeOfChangedTaskField} 
            titleOnChange={this.handleInputTitleChangeOfChangedTaskField}
            valueTitle={changedTaskTitle} 
            valueText={changedTaskText}
            isOpen={changeModalIsOpen}
            close={this.closeChangeModal}
        />

        {isTasksExist && <TodoList 
            // className='todoList'
            completeTask={this.completeTask} 
            tasksList={filteredTasks} 
            removeTask={this.removeTask} 
            choiceToChange={this.openChangeModal} 
            />
        }
      </div>
    );
  }

}

export default Todo;