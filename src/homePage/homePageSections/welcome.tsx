import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { GiEnergyArrow } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { SiReact, SiTypescript } from 'react-icons/si'
import noBGConfidentSmile from '../images/noBGConfidentSmile.png'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import './welcome.scss'
import { Tooltip } from '@mui/material'
import TooltipLink from '../../components/tooltip'

const Welcome = (): JSX.Element => {
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
                Hi, I am David Rönnlid.
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
                <span className="subtitle">
                    React and TypeScript developer.{' '}
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
                        className: 'global-class-name',
                        size: '7vh',
                        style: { position: 'absolute', left: 0, bottom: '5vh' },
                    }}
                >
                    <div>
                        <GiEnergyArrow />
                    </div>
                </IconContext.Provider>
            </Link>
        </Box>
    )
}
export default Welcome
