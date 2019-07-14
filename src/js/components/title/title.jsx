import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Titles = styled.h1`
  font-size: 80px;
  text-align: center;
  font-weight: 900;
  color: black;
  margin-bottom: 20px;
`

const Title = ({ title }) => (
  <Titles >{title}</Titles>
);

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'Simple title',
}

export default Title;
