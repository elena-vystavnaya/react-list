import React, { Component } from 'react';

import './list.scss';
import ToDoItem from './ToDoItem';


export default class ToDoList extends Component{

    render() {
        let removeItem = this.props.removeItem;
        let importantItem = this.props.importantItem;
        let doneItem = this.props.doneItem;
        
        return (       
            this.props.items.map(function(item, index){
            return (
                    <ToDoItem 
                            label={item.label} 
                            important={item.important}
                            show={item.show}
                            done={item.done}
                            key={index}
                            removeItem={() => removeItem(index)}
                            importantItem={() => importantItem(index)}
                            doneItem={() => doneItem(index)}
                    />              
                )
            })           
        )
    }
}
