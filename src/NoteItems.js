import React, { Component } from 'react';
import FlipMove from "react-flip-move"

class NoteItems extends Component {

    constructor(props) {
        super(props);

        this.createNotes = this.createNotes.bind(this);
    }


    createNotes(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let noteEntries = this.props.entries;
        let listItems = noteEntries.map(this.createNotes);

        return (
            <ul className="theList">
                <FlipMove duration={150} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default NoteItems