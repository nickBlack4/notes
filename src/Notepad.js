import React, { Component } from 'react'
import NoteItems from "./NoteItems";

class Notepad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            // prevState gives state before this moment in time
            // this keeps us from mutating state
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        // once value has been submitted, we are going to clear it out
        this._inputElement.value = "";

        console.log(this.state.items);

        // override form default behavior to reload page
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            
            <div className="notepad">
                
                {/* when form is submitted, addItem method will be called */}
                
                <div className="notes-right">
                    <form onSubmit={this.addItem}>

                    <button onClick={() => console.log(null)}><i className="fas fa-trash-alt"></i></button>
                    <button type="submit"><i className="fas fa-pencil-alt"></i></button>
                    <textarea ref={(a) => this._inputElement = a}
                            rows="20" cols="50">

                    </textarea>

                    </form>
                </div>
                
                <div className="notes-left">
                    <NoteItems entries={this.state.items} 
                           delete={this.deleteItem} />
                </div>
                

            </div>
        )
    }
    
}

export default Notepad