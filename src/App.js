import React, { Component } from 'react'
import Notepad from './Notepad'
import Menu from './Menu'
import Notes from './Notes'

class App extends Component {
    render() {
        return (
            <div>
                <Notepad />
                <Menu />
                <Notes />
            </div>
        )
    }
}

export default App