import * as React from 'react'
import * as UI from './components/Common'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/App.scss'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <UI.Container>
                    <Navbar />
                <Home />
            </UI.Container>
            </React.Fragment>
        );
    }
}

export default App