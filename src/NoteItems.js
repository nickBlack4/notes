import React, { Component } from 'react';

class NoteItems extends Component {
    createNotes(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        let noteEntries = this.props.entries;
        var listItems = noteEntries.map(this.createNotes);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default NoteItems