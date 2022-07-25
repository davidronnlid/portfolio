import PageSection from '../components/pageSection'
import Portfolio from './homePageSections/portfolio'
import Welcome from './homePageSections/welcome'
import Box from '@mui/material/Box'
import * as React from 'react'

interface HomePageProps {
    title?: string
}

const HomePage = ({ title }: HomePageProps): JSX.Element => (
    <Box sx={{ width: '80%', mx: 'auto' }}>
        {title ? title : ''}
        <PageSection comp={<Welcome />} />
        <PageSection comp={<Portfolio title="Portfolio" />} />
    </Box>
)

export default HomePage
