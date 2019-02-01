import React, { Component } from 'react';

import AppHeader from './header/AppHeader';
import SearchPanel from './search/SearchPanel';
import ToDoList from './list/ToDoList';
import AddItem from './addItem/AddItem';

let items = [
    {
        label: "Drink Coffee"
    },
    {
        label: "Make Awesome App"
    },
    {
        label: "Have a lunch"
    }
]

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: items,
            value: '',
            filter: ''       
        }
    }

    componentWillMount(){   
        let mas = [];
        items.forEach((item) => {
            mas.push({
                label: item.label, 
                important: false,
                done: false,
                show: true           
            })
        })

        this.setState({
            items: mas
        })
    }

    // Important Item
    importantItem = (index) => {
        const list = this.state.items; //клон items array
        const item = list[index]; // items[item] кликнутый итем
        item.important = !item.important; //меняем текущее значение на противоположное
        list[index] = item; //обновляем клон
        this.setState({
            items: list  
        });
    }

    // Done Item
    doneItem = (index) => {
        const list = this.state.items; 
        const item = list[index]; 
        item.done = !item.done;      
        list[index] = item;      
        this.setState({
            items: list
        });        
    }

    // Remove Item
    removeItem = (value) => {
        let newItem = this.state.items;
        newItem.splice(value, 1);
        this.setState({
            items: newItem
        })
    }

    // Add Item
    addItem = (item) =>{
        let newItem = this.state.items;
        newItem.push(item);
        this.setState({
            items: newItem
        })
    }

    //search
    onSearch(items, value){
        if(value.lenght === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) > -1
        })
    }

    onChangeSearch = (value) => {
        this.setState({
            value: value
        })
    }

    //filters
    onFilters = (items, filter) => {
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({
            filter: filter
        })
    }
       
    render() {
        let visibleItems = this.onFilters(
                this.onSearch(this.state.items, this.state.value), this.state.filter);
        return (
            <div className="container">
                <AppHeader 
                    items={this.state.items}
                />
                <SearchPanel 
                    items={this.state.items}                  
                    filterDone={this.filterDone}
                    filterActive={this.filterActive}
                    allActive={this.allActive}
                    onChangeSearch={this.onChangeSearch}
                    filter={this.state.filter}
                    onFilterChange={this.onFilterChange}
                />
                <ToDoList 
                    items = {visibleItems}
                    removeItem = {this.removeItem}
                    importantItem={this.importantItem}
                    doneItem={this.doneItem}
                    addItem={this.addItem}
                />   
                <AddItem 
                    addItem={this.addItem}
                />       
            </div>     
        )
    }
}

