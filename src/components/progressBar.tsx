import { styled } from '@mui/material/styles'
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TooltipLink from './tooltip'
import * as React from 'react'

const BorderLinearProg = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: '70%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}))

export interface ProgBarProps {
    title: string
    percentage: number
    icon: JSX.Element
    link: string
}

export default function ProgBar({
    title,
    percentage,
    icon,
    link,
}: ProgBarProps) {
    return (
        <Grid container>
            <Grid item sx={{ width: '20%' }}>
                <Typography align="left" variant="h6">
                    <TooltipLink icon={icon} title={title} link={link} />
                </Typography>
            </Grid>
            <Grid item>
                <BorderLinearProg
                    variant="determinate"
                    value={percentage}
                    sx={{ mb: 3 }}
                />
            </Grid>
        </Grid>
    )
}
