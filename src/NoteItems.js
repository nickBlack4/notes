import React, { Component } from 'react';

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
                {listItems}
            </ul>
        );
    }
}

export default NoteItems