import React, { Component } from 'react';

import './header.scss';

export default class AppHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		}
	}
	render() {
		return (
			<div className="header row">
				<h2>Todo List</h2>
				<p>{this.state.count} more to do, {this.props.length} done</p>
			</div>
		)
	}
}
