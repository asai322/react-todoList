import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const TodoWrapper = styled.div`
  position: relative;
`

const TodoTextArea = styled.textarea`
    padding: 16px 16px 16px 16px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    width: 600px;
    height: 104px;
    box-sizing: border-box;
    resize: none;
    font-size: 24px;
    font-style: italic;
    box-shadow: inset 0 -2px 40px rgba(0,0,0,0.03);
`

const TodoArea = ({ value, onChange, onKeyPress }) => (
  <TodoWrapper >
    <TodoTextArea
      placeholder="Text todo"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </TodoWrapper>
);

TodoArea.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

TodoArea.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default TodoArea;
