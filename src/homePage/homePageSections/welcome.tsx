import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { GiEnergyArrow } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import noBGConfidentSmile from '../images/noBGConfidentSmile.png'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import './welcome.scss'

interface WelcomeProps {
    title: string
    subTitle: string
}

const Welcome: React.FC<WelcomeProps> = ({
    title,
    subTitle,
}: WelcomeProps): JSX.Element => {
    const theme = useTheme()
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Bebas Neue',
                    position: 'relative',
                    top: '10vh',
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    fontFamily: 'Bebas Neue',
                    color: 'var(--primary-color)',
                    px: 1.5,
                    position: 'relative',
                    top: '10vh',
                }}
            >
                <span className="subtitle">{subTitle}</span>
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
                    <GiEnergyArrow />
                </IconContext.Provider>
            </Link>
        </Box>
    )
}
export default Welcome
