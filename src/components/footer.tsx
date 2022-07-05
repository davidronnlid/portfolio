import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
    const [value, setValue] = React.useState(0)

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, py: 1 }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={
                        <Link href="https://linkedin.com/in/davidronnlid/">
                            <FaLinkedinIn
                                style={{ height: '30px', width: '30px' }}
                            />
                        </Link>
                    }
                />
                <BottomNavigationAction
                    label="GitHub"
                    icon={
                        <Link href="https://github.com/davidronnlid/">
                            <FaGithub
                                style={{ height: '30px', width: '30px' }}
                            />
                        </Link>
                    }
                />
            </BottomNavigation>
        </Paper>
    )
}
