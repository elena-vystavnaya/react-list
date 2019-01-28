import React, { Component } from 'react';

import './list.scss';
import ToDoItem from './ToDoItem';


export default class ToDoList extends Component{

    render() {
        let removeItem = this.props.removeItem;
        let importantItem = this.props.importantItem;
        let doneItem = this.props.doneItem;
        
        return (       
            this.props.items.map(function(index, item){

            return (
                    <ToDoItem 
                            label={index.label} 
                            important={index.important}
                            done={index.done}
                            key={item}
                            keys={item}
                            removeItem={removeItem}
                            importantItem={importantItem}
                            doneItem={doneItem}
                    />              
                )
            })           
        )
    }
}
