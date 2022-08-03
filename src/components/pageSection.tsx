import * as React from 'react'
import { Box } from '@mui/material'

interface PageSectionProps {
    comp: React.ReactElement
}

const PageSection: React.FC<PageSectionProps> = ({
    comp,
}: PageSectionProps): JSX.Element => (
    <Box sx={{ width: '100%', height: '100vh', mb: '15vh' }}>{comp}</Box>
)

export default PageSection
