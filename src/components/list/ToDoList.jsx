import React, { Component } from 'react';

import './list.scss';
import ToDoItem from './ToDoItem';


export default class ToDoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    // componentWillUpdate

    onDeleted(key) {
    //     console.log( this.state.items );
    //     console.log(key);
    //     this.setState({
    //         items: this.state.items.slice(key, key)
    //     })
        // return this.props.items.slice(key, key);
    }

    render() {
        let remove = this.onDeleted.bind(this);
        return (       
            this.props.items.map(function(index, item){
            return (
                    <ToDoItem 
                            label={index.label} 
                            important={index.important}
                            key={item}
                            keys={item}
                            onDeleted={remove}
                    />              
                )
            })              
        )
    }
}
