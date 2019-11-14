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
                <form onSubmit={this.addItem}>
                    <textarea ref={(a) => this._inputElement = a}
                        placeholder="enter note" rows="10" cols="50">

                    </textarea>
                    <button type="submit">add</button>
                </form>
                <NoteItems entries={this.state.items} 
                           delete={this.deleteItem} />
            </div>
        )
    }
    
}

export default Notepad