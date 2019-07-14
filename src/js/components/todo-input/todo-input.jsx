import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const TodoInputWrapper = styled.div`
    position: relative;
`

const Plus = styled.i`
    position: absolute;
    font-size: 24px;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
`

const TodoInput = styled.input`
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    width: 100%;
    box-sizing: border-box;
    font-size: 28px;
    font-style: italic;
`

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <TodoInputWrapper>
        <Plus className="fas fa-plus"/>
        <TodoInput
            className="todo-input"
            placeholder="Name todo"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </TodoInputWrapper>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

ToDoInput.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}

export default ToDoInput;
