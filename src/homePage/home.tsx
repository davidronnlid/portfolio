import PageSection from '../components/pageSection'
import Portfolio from './homePageSections/portfolio'
import Welcome from './homePageSections/welcome'
import Box from '@mui/material/Box'
import WhyMe from './homePageSections/whyMe'

const HomePage = (): JSX.Element => (
    <Box sx={{ width: '80vw', mx: 'auto' }}>
        <PageSection
            comp={
                <Welcome
                    title="Hi, I am David."
                    subTitle="React and TypeScript developer."
                />
            }
        />
        <PageSection comp={<Portfolio title="Portfolio" />} />
        <PageSection comp={<WhyMe title="Why you should hire me" />} />
    </Box>
)

export default HomePage
