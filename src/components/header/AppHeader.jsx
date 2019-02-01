import React, { Component } from 'react';

import './header.scss';


export default class AppHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeLenght: this.props.items.filter((item) => !item.done).length,
			doneLenght:  this.props.items.filter((item) => item.done).length
		}
	}

	componentDidUpdate(){
		let activeLenght = this.props.items.filter((item) => !item.done).length;
		let doneLenght = this.props.items.filter((item) => item.done).length;
		if (this.state.activeLenght !== activeLenght ) {
			this.setState({ activeLenght: activeLenght });
		}
		if (this.state.doneLenght !== doneLenght ) {
			this.setState({ doneLenght: doneLenght });
		}
	}

	render() {
		return (
			<div className="header row">
				<h2>Todo List</h2>
				<p> {this.state.activeLenght} more to do, {this.state.doneLenght} done</p>
			</div>
		)
	}
}
