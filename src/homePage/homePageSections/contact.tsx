import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { IconContext } from 'react-icons'
import React from 'react'

interface TooltipLinkProps {
    icon: JSX.Element
    link: string
    title: string
}

const TooltipLink = ({ icon, link, title }: TooltipLinkProps): JSX.Element => (
    <Tooltip title={title}>
        <IconButton>
            <Link href={link}>
                <IconContext.Provider
                    value={{
                        color: 'var(--secondary-color)',
                        className: 'global-class-name',
                    }}
                >
                    {icon}
                </IconContext.Provider>
            </Link>
        </IconButton>
    </Tooltip>
)

export default TooltipLink
