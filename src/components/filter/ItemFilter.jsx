import React, { Component } from 'react';

import './filter.scss';

export default class ItemFilter extends Component {
  render() {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary btn-active">All</button>
            <button type="button" className="btn btn-secondary">Active</button>
            <button 
                type="button" 
                className="btn btn-secondary"
				onClick={this.props.filterDone}
            >
            Done
            </button>
        </div>
    )
  }
}

