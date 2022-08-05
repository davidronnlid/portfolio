import Button from '@mui/material/Button'
import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { IconContext } from 'react-icons'
import TooltipLink from './tooltip'
import Box from '@mui/material/Box'
import { Icon } from '@mui/material'

const MainCTA: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 5,
                right: 7,
                padding: 0,
                border: 'none',
                margin: 0,
                zIndex: 100,
            }}
            role="MUIBox"
            aria-label="MainCTA"
        >
            <TooltipLink
                icon={
                    <IconContext.Provider
                        value={{
                            color: 'var(--button-color)',
                            size: '2.5rem',
                            style: {
                                backgroundColor: 'var(--secondary-color)',
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
