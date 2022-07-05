import PageSection from '../components/pageSection'
import Portfolio from '../homePageSections/portfolio'
import WhoIAm from '../homePageSections/whoIAm'
import Contact from '../homePageSections/contact'
import Box from '@mui/material/Box'
import * as React from 'react'

interface HomePageProps {
    title?: string
}

const HomePage = ({ title }: HomePageProps): JSX.Element => (
    <Box sx={{ width: '80%', my: 1, mx: 'auto' }}>
        {title ? title : ''}{' '}
        <PageSection
            title="Portfolio"
            comp={
                <>
                    <Portfolio id="Portfolio" />
                </>
            }
        />
        <PageSection
            title="Who I Am"
            comp={
                <>
                    <WhoIAm id="Who%20I%20am" />
                </>
            }
        />
        <PageSection
            title="Contact"
            comp={
                <>
                    <Contact id="Contact" />
                </>
            }
        />
    </Box>
)

export default HomePage
