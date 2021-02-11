import * as React from 'react'
import * as UI from './components/Common'
import Header from './components/Header'

import './App.scss'


class App extends React.Component {
    render() {
        return (
            <UI.Container>
                <Header />
            </UI.Container>
        );
    }
}

export default App