import PageSection from '../components/pageSection'
import Portfolio from './homePageSections/portfolio'
import Welcome from './homePageSections/welcome'
import Box from '@mui/material/Box'

const HomePage = (): JSX.Element => (
    <Box sx={{ width: '80vw', mx: 'auto' }}>
        <PageSection
            comp={
                <Welcome
                    title="Hi, I am David."
                    subTitle="React and TypeScript developer"
                />
            }
        />
        <PageSection comp={<Portfolio title="Portfolio" />} />
    </Box>
)

export default HomePage
