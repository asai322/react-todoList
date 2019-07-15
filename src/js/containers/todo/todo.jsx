import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, completeTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import TodoArea from '../../components/todo-area/todo-area';
import Select from '../../components/select/select';

import {CHOICE_IMPORTANCE, IMPORTANCE} from '../../config/const';

import styled from "styled-components";
import PropTypes from "prop-types";

const FooterFilter = styled.div`
    height: 60px;
    display: table;
`

const TodoWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
              0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const TodoGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

class ToDo extends Component {

  state = {
    taskText: '',
    taskName: '',
    currentType: '1',
    currentTypeFilter: '1'
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskName: value,
    })
  }

  handleInputChangeText = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTast = ({ key }) => {
    const { taskName, taskText, currentType } = this.state;
    //const realTime = new Date();
    if (taskName.length > 3 && key === 'Enter') {
      const { addTast } = this.props;
      addTast((new Date()).getTime(), taskName, taskText, currentType, false);
      this.setState({
        taskText: '',
        taskName: ''
      });
    }
  }

  changeType = (value) => {
    this.setState({
      currentType: value,
    })
  }

  changeTypeFilter = (value) => {
    this.setState({
      currentTypeFilter: value,
    })
  }

  changeTasksFilter = (tasks, activeFilter) => {
    switch (activeFilter) {
      case '1':
        return tasks.filter(task => task.currentTypeFilter === '1');
      case '2':
        return tasks.filter(task => task.currentTypeFilter === '2');
      case '3':
        return tasks.filter(task => task.currentTypeFilter === '3');
      default:
        return tasks;
    }
  }

  render() {
    const { taskText, taskName, currentType, currentTypeFilter } = this.state;
    const { tasks, removeTask, completeTask,  } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.changeTasksFilter(tasks, currentTypeFilter);

    return (
      <TodoWrapper>
        <TodoGroup>
          <ToDoInput onKeyPress={this.addTast}
                     onChange={this.handleInputChange}
                     value={taskName} />

          <Select name={'role'}
                  onChange={this.changeType}
                  value={currentType}
                  elements={CHOICE_IMPORTANCE.type}/>
        </TodoGroup>

        <TodoArea onKeyPress={this.addTast}
                  onChange={this.handleInputChangeText}
                  value={taskText} />

        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}

        {isTasksExist &&
        <FooterFilter>
          <Select name={'filter'}
                  onChange={this.changeTypeFilter}
                  value={currentTypeFilter}
                  elements={IMPORTANCE.type}/>

        </FooterFilter>
        }

      </TodoWrapper>
    );
  }
}

ToDo.propTypes = {
  tasks: PropTypes.array,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
}

ToDo.defaultProps = {
  tasks: [],
  completeTask: () => {},
  removeTask: () => {},
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTast, removeTask, completeTask })(ToDo);




