import * as React from 'react'
import { Typography } from '@mui/material'

interface PageSectionProps {
    title?: string
    comp: React.ReactElement
}

const PageSection = ({ title, comp }: PageSectionProps): JSX.Element => (
    <>
        <Typography variant="h4" align="left" sx={{ my: 2 }}>
            {title}
        </Typography>
        {comp}
    </>
)

export default PageSection
