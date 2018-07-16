import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
    static propTypes = {
        //  Using "function-as-child" pattern:
        children: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
        })).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            selectedItem: null,
            resultsItems: [],
        };
    }

    get renderProps() {
        return {
            ...this.state,
            //  Using "prop getters" pattern:
            getInputProps: (additionalInputProps) => ({
                ...this.inputProps,
                ...additionalInputProps,
            }),
            getResultsItemProps: (additionalResultItemProps) => ({
                ...this.resultItemProps,
                ...additionalResultItemProps,
            }),
        };
    }

    get inputProps() {
        return {
            value: this.state.inputValue,
            onChange: this.handleInputChange,
            'data-lpignore': true,
        };
    }

    get resultItemProps(item) {
        return {
            onClick: this.handleResultItemClick(item),
        };
    }

    handleInputChange = (e) => {
        const inputValue = e.target.value;
        return this.setState(currentState => ({
            inputValue,
            resultsItems: this.props.items.filter(item => {
                const isSelected = currentState.selectedItem && currentState.selectedItem.id === item.id;
                return isSelected && item.label.includes(inputValue);
            }),
        }));
    }

    handleResultItemClick = (id) => () => this.setState(() => ({
        inputValue: '',
        resultsItems: [],
        selectedItem: this.props.items.find(item => item.id === id),
    }));

    render() {
        return this.props.render(this.renderProps);
    };
};

export default Search;
