import React, { Component } from 'react';

export default class ToDoItem extends Component {

    render() {
        let classImportant = this.props.important ? 'list-group-item important' : 'list-group-item';
        return (  
            <li 
                className = {classImportant }         
                >
            <div 
                className='row flex'
                >
                <div               
                    className={this.props.done ? 'item col-9 checked' : 'item col-9'}
                    onClick={this.props.doneItem}
                    >
                    {this.props.label}
                </div>   
                
                <div className="btns col-3">
                    <button 
                        type="button" 
                        className="btn btn-outline-danger"
                        onClick={this.props.removeItem}
                        >                       
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-success"
                        onClick={this.props.importantItem}
                        >
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
            </li>
        )
    }
}
