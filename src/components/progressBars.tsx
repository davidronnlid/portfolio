import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProgBar, { ProgBarProps } from './progressBar'
import * as React from 'react'

type ProgBarPropsTypes = ProgBarProps

interface ProgBarsProps {
    progBarsData: ProgBarPropsTypes[]
}

const ProgBars = ({ progBarsData }: ProgBarsProps): JSX.Element => (
    <Box sx={{ my: 1 }}>
        <>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: 'column',
                }}
            >
                {progBarsData.map(
                    (progBarData: ProgBarProps) =>
                        (
                            <ProgBar
                                title={progBarData.title}
                                percentage={progBarData.percentage}
                                icon={progBarData.icon}
                                link={progBarData.link}
                            />
                        ) as JSX.Element
                )}
            </Box>
        </>
    </Box>
)

export default ProgBars
