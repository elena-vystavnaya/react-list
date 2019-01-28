import React, { Component } from 'react';

export default class ToDoItem extends Component {

    render() {
        return (  
            <li 
                className = {
                    this.props.important ? 'list-group-item important' : 'list-group-item'
                    }         
                >
            <div 
                className='row flex'
                >
                <div               
                    className={this.props.done ? 'item col-9 checked' : 'item col-9'}
                    onClick={() => this.props.doneItem(this.props.keys)}>
                    {this.props.label}
                </div>   
                
                <div className="btns col-3">
                    <button 
                        type="button" 
                        className="btn btn-outline-danger"
                        onClick={() => this.props.removeItem(this.props.keys)}
                        >                       
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-success"
                        onClick={() => this.props.importantItem(this.props.keys)}
                        >
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
            </li>
        )
    }
}
