import Portfolio from './homePageSections/portfolio'
import Welcome from './homePageSections/welcome'
import Box from '@mui/material/Box'

const HomePage: React.FC = (): JSX.Element => (
    <Box>
        <Welcome />
        <Portfolio />
    </Box>
)

export default HomePage
