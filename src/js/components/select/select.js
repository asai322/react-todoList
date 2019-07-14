import React, {PureComponent} from 'react';
import styled from 'styled-components';
import SelectElement from './SelectElement'
import PropTypes from "prop-types";

const StiledSelect = styled.select`
    font-size: 20px;
    height: 30px;
    width: 150px;
    border: 1px solid #EBEBEB;
    background: rgba(0, 0, 0, 0.003);
    outline: none;
    top: 50%;
    position: relative;
    transform: translateY(50%);
    margin: 0 10px;
`


class Select extends PureComponent {

    state = {
        show: false,
    }

    onChange = (e) => {
        const {onChange} = this.props;
        onChange(e.currentTarget.value);
    }

    render() {
        const {elements, value} = this.props;
        const optionList = elements.map((element) =>
            <SelectElement key={element.value} element={element}/>
        );


        return (
            <StiledSelect onChange={this.onChange} value={value}>

                    {optionList}

            </StiledSelect>
        );
    }

    handleItemList = () => {
        this.setState({
            show: !this.state.show
        })
    }
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    elements:
    PropTypes.array.isRequired,
    placeholder: PropTypes.string,
}


export default Select;
