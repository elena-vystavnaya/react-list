import React, { Component } from 'react';

export default class ToDoItem extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            done: false,
            important: props.important,
            // show: true
        };
    }

    onDone = () => {
        this.setState({
            done: !this.state.done
        })
    }

    onImportant = () => {
        this.setState({
            important: !this.state.important          
        })
    };

    // onDeleted = () => {
        // this.setState({
        //     show: false
        // })
    // }


    render() {
        return (  
            <li 
                className = {
                    [this.state.important ? 'list-group-item important' : 'list-group-item', 
                    
                    // this.state.show ? '' : 'hidden'
                    ] 
                    .join(' ')
                    }         
                >
            <div 
                className='row flex'
                >
                <div               
                    className={this.state.done ? 'item col-9 checked' : 'item col-9'}
                    onClick={this.onDone}>
                    {this.props.label}
                </div>   
                
                <div className="btns col-3">
                    <button 
                        type="button" 
                        className="btn btn-outline-danger"
                        onClick={this.props.onDeleted(this.props.keys)}>                       
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-success"
                        onClick={this.onImportant}>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
            </li>
        )
    }
}
