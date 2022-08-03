import * as React from 'react'
import './App.scss'
import BackToTop from './components/topScroll'
import HomePage from './homePage/home'
import MainCTA from './components/mainCTA'
import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

const App: React.FunctionComponent = (): JSX.Element => {
    let theme = createTheme()
    theme = responsiveFontSizes(theme)
    return (
        <ThemeProvider theme={theme}>
            <BackToTop children={<></>} />
            <span style={{ display: 'hidden' }} id="back-to-top-anchor"></span>
            <MainCTA />
            <HomePage />
        </ThemeProvider>
    )
}

export default App
