import React, { Component } from 'react'

class Notepad extends Component {
    constructor(props) {
        super(props);


        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        console.log("fired");
    }



    render() {
        return (
            <div className="notepad">
                {/* when form is submitted, addItem method will be called */}
                <form onSubmit={this.addItem}>
                    <textarea placeholder="enter note" rows="10" cols="50">

                    </textarea>
                    <button type="submit">add</button>
                </form>
                

                
            </div>
        )
    }
    
}

export default Notepad