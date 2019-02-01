import React, { Component } from 'react';

import './filter.scss';

export default class ItemFilter extends Component {
    
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]
    render() {   
        const buttons = this.buttons.map(({name, label}, index) => {
            const isActive = this.props.filter === name;
            const active = isActive ? 'btn-info' : 'btn-secondary';
            return(
                <button 
                    type="button"
                    name={name}
                    className={`btn ${active}`}
                    key={index}
                    onClick={() => this.props.onFilterChange(name)}
                >{label}</button>
            )
        }) 
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            {buttons}
        </div>
    )
  }
}

