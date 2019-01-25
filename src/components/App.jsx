import React, { Component } from 'react';

import AppHeader from './header/AppHeader';
import SearchPanel from './search/SearchPanel';
import ToDoList from './list/ToDoList';
import AddItem from './addItem/AddItem';

let items = [
    {
        label: "Drink Coffee",
        important: false
    },
    {
        label: "Make Awesome App",
        important: true
    },
    {
        label: "Have a lunch",
        important: false
    }
]

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: items
    }
  }

  componentWillUpdate(nextProps){
    this.setState({
        items: nextProps.items
    })
} 

    render() {
        return (
            <div className="container">
                <AppHeader length = {this.state.items.length}/>
                <SearchPanel />
                <ToDoList 
                    items={this.state.items}
                />   
                <AddItem />       
            </div>     
        )
    }
}
