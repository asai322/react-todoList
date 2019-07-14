import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

import Input from '../../components/input/input'
import {connect} from "react-redux";
import {editTask} from "../../actions/actionCreator";

class ToDoItem extends Component {

    state = {
        isEdit: true,
        editName: this.props.name,
        editText: this.props.text,
    }

    edit = () => {
        const {isEdit, editName, editText} = this.state;
        const { id, editTask } = this.props

        if (!isEdit) {
            this.setState({
                isEdit: !isEdit
            })
            editTask(id, editName, editText);
        } else {
            this.setState({
                isEdit: !isEdit
            })
        }
    }

    onChangeHandle = (e) => {
        this.setState({
            editName: e.target.value
        })
    }

    onChangeHandleText = (e) => {
        this.setState({
            editText: e.target.value
        })
    }

    render() {
        const { text, name, isCompleted, removeTask, id, completeTask } = this.props
        const {isEdit, editName, editText} = this.state


        return (
            <li className="todo-item">
                <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
                {isEdit ?
                    <div className={'taskText'}>
                        <span className={isCompleted ? 'completed text' : 'text'}>{name}</span>
                        <span className={isCompleted ? 'completed text small' : 'text small'}>{text}</span>
                    </div> :

                    <div className={'taskText'}>
                        <Input onChange={this.onChangeHandle} value={editName}/>
                        <Input onChange={this.onChangeHandleText} value={editText}/>
                    </div>
                }

                <i onClick={this.edit}  className={isEdit ? "fas edit-times" : 'fas edit'} />
                <i onClick={() => removeTask(id)} className="fas fa-times" />
            </li>
        )
    }
}


ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0,
}

export default connect(({ tasks }) => ({
    tasks,
}), { editTask }) (ToDoItem);
