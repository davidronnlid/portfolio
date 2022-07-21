import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { GiEnergyArrow } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import noBGConfidentSmile from '../images/noBGConfidentSmile.png'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface PortfolioProps {
    title: string
    subTitle: string
}

const Welcome = ({ title, subTitle }: PortfolioProps): JSX.Element => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

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
                <span
                    style={{
                        background: 'var(--secondary-color)',
                        padding: '5px',
                        marginLeft: '-10px',
                    }}
                >
                    {subTitle}
                </span>
            </Typography>

            {matches ? (
                <img
                    src={noBGConfidentSmile}
                    alt={'David, happy as usual'}
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
                        size: '20vh',
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
