import Button from '@mui/material/Button'
import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { IconContext } from 'react-icons'
import TooltipLink from './tooltip'
import Box from '@mui/material/Box'
import { Icon } from '@mui/material'

const MainCTA: React.FunctionComponent = (): JSX.Element => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '1vh',
                right: '1vh',
                padding: 0,
                border: 'none',
                margin: 0,
                zIndex: 100,
            }}
        >
            <TooltipLink
                icon={
                    <IconContext.Provider
                        value={{
                            color: 'var(--secondary-color)',
                            size: '3rem',
                            style: {
                                backgroundColor: 'var(--button-color)',
                                border: 'none',
                                borderRadius: '0.6rem',
                                boxShadow: 'var(--std-bs)',
                            },
                        }}
                    >
                        <SiLinkedin />
                    </IconContext.Provider>
                }
                link="https://www.linkedin.com/in/davidronnlid/"
                title="Contact David via LinkedIn"
            />
        </Box>
    )
}

export default MainCTA

{
    /* <IconContext.Provider
value={{
    size: '2vw',
}}
>
<SiLinkedin />
</IconContext.Provider> */
}
