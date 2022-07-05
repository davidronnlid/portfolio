import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type PageSectionProps = {
    title?: string
    comp: React.ReactElement
}

const PageSection = ({ title, comp }: PageSectionProps): JSX.Element => (
    <Box sx={{ width: '80%', my: 1, mx: 'auto' }}>
        <Typography variant="h4" align="left" sx={{ my: 2 }}>
            {title}
        </Typography>
        {comp}
    </Box>
)

export default PageSection
