import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const languages = [
	{
		name: 'C',
		year: 1972
	},
	{
		name: 'Elm',
		year: 2012
	}
];

// Teach Autosuggest how to calcuopelate suggestions for any given input value.
const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : languages.filter(lang =>
		lang.name.toLowerCase().slice(0, inputLength) === inputValue
	);
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
	<div>
		{suggestion.name}
	</div>
);

class Autocomplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 1,
			item: '',
			suggestions: []
		};
	};

	handleChange = (event) => {
		if (event.target.name === 'hours' && event.target.value < 24) {
			let value = event.target.value === '' ? 0 : parseInt(event.target.value);
			this.setState({
				hours: value
			});
		} else if (event.target.name === 'item') {
			this.setState({
				item: event.target.value
			});
		}
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	onChange = (event, { newValue }) => {
		this.setState({
			item: newValue
		});
	};

	render() {
		const { item, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input element.
		const inputProps = {
			placeholder: 'Type a programming language',
			value: item,
			onChange: this.onChange
		};

		return <span>
			Today I wasted <input name="hours" className="input-hours" type="number" value={this.state.hours} onChange={this.handleChange} /> { this.state.hours === 1 ? 'hour' : 'hours' } on <input name="item" className="input-item" type="text" value={this.state.item} onChange={this.handleChange} />
			<button className="button button-enabled">Submit</button>

			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		</span>;
	}
}

export default Autocomplete;