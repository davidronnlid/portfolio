import * as React from 'react'
import './App.scss'
import BackToTop from './components/topScroll'
import HomePage from './homePage/home'

function App() {
    return (
        <>
            <BackToTop children={<></>} />
            <span style={{ display: 'hidden' }} id="back-to-top-anchor"></span>

            <HomePage />
        </>
    )
}

export default App
