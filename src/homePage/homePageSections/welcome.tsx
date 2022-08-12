import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { BsArrowDown } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import noBGConfidentSmile from '../images/noBGConfidentSmile.png'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import './welcome.scss'

const Welcome: React.FC = (): JSX.Element => {
    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.up('sm'))
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box
            sx={{
                position: 'relative',
                width: '80vw',
                mx: 'auto',
                minHeight: '100vh',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Bebas Neue',
                    position: 'relative',
                    top: '27.5vh',
                }}
            >
                Hi, I am David.
            </Typography>

            <Typography variant="h5">
                {/* This element is styled in fontTheme.tsx and the span chhild element in welcome.scss */}
                <span
                    className={`subtitle${
                        mediumScreen
                            ? ' extraSubtitleStylesOnMediumScreensUp'
                            : ''
                    }`}
                >
                    I love to code websites in React and TypeScript.
                </span>
            </Typography>
            {mediumScreen ? (
                <img
                    src={noBGConfidentSmile}
                    alt="David, happy as usual"
                    className="noBGImgOfDavid"
                />
            ) : (
                ''
            )}
            <Link href="#portfolio">
                <IconContext.Provider
                    value={{
                        color: 'var(--secondary-color)',
                        size: '7vh',
                        style: {
                            position: 'absolute',
                            left: 0,
                            top: '85vh',
                        },
                    }}
                >
                    <BsArrowDown />
                </IconContext.Provider>
            </Link>
        </Box>
    )
}
export default Welcome
