import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
							placeholder="Search"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
