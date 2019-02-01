import React, { Component } from 'react';
import './search.scss'
import ItemFilter from '../filter/ItemFilter';

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    onChangeSearch = (e) => {
        let value =  e.target.value;
        this.setState({
            value: value
        })
        this.props.onChangeSearch(value);
    }

    render() {      
        return (
            <div className="search">
                <input 
                        value={this.state.value}
                        className="form-control" 
                        type="search" 
                        placeholder='Type here to search'
                        onChange={this.onChangeSearch}                        
                />
                <ItemFilter
                    items={this.props.items}
                    filterDone={this.props.filterDone}
                    filterActive={this.props.filterActive}
                    allActive={this.props.allActive}
                    filter={this.props.filter}
                    onFilterChange={this.props.onFilterChange}
                />
            </div>
            
        )
    }
}
