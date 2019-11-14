import React, { Component } from 'react'

class Notepad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
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
                

                
            </div>
        )
    }
    
}

export default Notepad