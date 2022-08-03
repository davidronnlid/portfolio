import * as React from 'react'
import Box from '@mui/material/Box'
import ProjectCard from '../../components/projectCard'
import DRMImage from '../images/dRMScreenshot.png'
import CalcAppImage from '../images/calcAppScreenshot.png'
import { Grid, Typography } from '@mui/material'

interface PortfolioProps {
    title?: string
}

const Portfolio: React.FC<PortfolioProps> = ({
    title,
}: PortfolioProps): JSX.Element => (
    <Box id="portfolio">
        <Typography variant="h3" pt={5}>
            {title}
        </Typography>
        <Grid container spacing={3}>
            <ProjectCard
                visitProjectLink="https://davidronnlidmovies.netlify.app"
                title="Movie Browser"
                imgSrcUrl={DRMImage}
                containerImg="Desktop"
                projectGithubLink="https://github.com/davidronnlid/movie-project"
            />
            <ProjectCard
                visitProjectLink="https://davidronnlidcalculator.netlify.app"
                title="Calculator"
                imgSrcUrl={CalcAppImage}
                containerImg="Mobile"
                projectGithubLink="https://github.com/davidronnlid/calculator-app"
            />
        </Grid>
    </Box>
)

export default Portfolio
