import React, { Component } from 'react';
import './search.scss'
import ItemFilter from '../filter/ItemFilter';

export default class SearchPanel extends Component {
    render() {      
        return (
            <div className="search">
                <input className="form-control" type="search" placeholder='Type here to search'/>
                <ItemFilter/>
            </div>
            
        )
    }
}
