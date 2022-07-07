import * as React from 'react'
import { Box } from '@mui/material'

interface PageSectionProps {
    comp: React.ReactElement
}

const PageSection = ({ comp }: PageSectionProps): JSX.Element => (
    <Box sx={{ width: '100%', height: '100vh' }}>{comp}</Box>
)

export default PageSection
