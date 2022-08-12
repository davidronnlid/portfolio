import * as React from 'react'
import './App.scss'
import BackToTop from './components/topScroll'
import HomePage from './homePage/home'
import MainCTA from './components/mainCTA'
import FontTheme from './components/fontTheme'

const App: React.FC = (): JSX.Element => {
    return (
        <FontTheme>
            <BackToTop />
            <span style={{ display: 'hidden' }} id="back-to-top-anchor"></span>
            <MainCTA />
            <HomePage />
        </FontTheme>
    )
}

export default App
