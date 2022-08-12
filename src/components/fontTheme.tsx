import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

interface FontThemeProps {
    children: JSX.Element | JSX.Element[]
}

const FontTheme: React.FC<FontThemeProps> = ({
    children,
}: FontThemeProps): JSX.Element => {
    let theme = createTheme()
    theme = responsiveFontSizes(theme)

    theme.typography.h1 = {
        fontSize: '16vw',
        '@media (min-width:600px)': {
            fontSize: '9rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '11vw',
        },
    }

    theme.typography.h5 = {
        fontFamily: 'Bebas Neue',
        color: 'var(--primary-color)',
        position: 'relative',
        top: '27.5vh',

        fontSize: '1.7rem',
        padding: '0.5rem',
        maxWidth: '65vw',
        background: 'var(--secondary-color)',
        // Background of welcome page subtitle is of h5 on small screens but span elm on medium+ screens
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.9rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.8vw',
            background: 'none',
        },
    }

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default FontTheme
