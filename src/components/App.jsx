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
            items: items
        }
    }

    importantItem = (index) => {
        const list = this.state.items; //клон items array
        const item = list[index]; // items[item] кликнутый итем
        item.important = !item.important; //меняем текушее значение на противоположное
        list[index] = item; //обновляем клон
        this.setState({
            items: list  
        });
    }

    doneItem = (index) => {
        const list = this.state.items; 
        const item = list[index]; 
        item.done = !item.done; 
        list[index] = item; 
        this.setState({
            items: list  
        });
    }

    removeItem = (value) => {
        items.splice(value, 1);
        this.setState({
            items: items
        })
    }

    addItem = (item) =>{
        items.push(item);
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <div className="container">
                <AppHeader length = {this.state.items.length}/>
                <SearchPanel />
                <ToDoList 
                    items = {this.state.items}
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

