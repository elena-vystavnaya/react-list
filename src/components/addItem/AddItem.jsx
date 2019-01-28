import React, { Component } from 'react';

import './addItem.scss';

export default class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}	

	render() {
		let newItem = {
			label: this.state.value
		}
		return (
			<div className="add-item row">
				<div className="col-9">
					<input
						type="text"
						value={this.state.value}
						className="form-control"
						onChange={this.handleChange}
					/>
				</div>
				<div className="col-3">
					<button
						className="btn"
						onClick={() => this.props.addItem(newItem)}
					>
					Add Item
					</button>
				</div>

			</div>
		)
	}
}
