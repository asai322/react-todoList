import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Inputs = styled.input`
 padding: 1px 3px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  width: 100%;
  box-sizing: border-box;
  font-size: 26px;
  box-shadow: inset 0 -2px 40px rgba(0, 0, 0, 0.03);
  margin-bottom: 6px;
  font-style: italic;
`

const Input = ({ value, onChange, onKeyPress }) => (
    <Inputs
      className="input"
      placeholder="Name todo"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
);

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default Input;
