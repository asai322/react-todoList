import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Select extends PureComponent {
    render() {
        const {element} = this.props;
        return (
            <option value={element.value}>
                {element.label}
            </option>
        );
    }
}

Select.propTypes = {
    element: PropTypes.object.isRequired
};

export default Select;
