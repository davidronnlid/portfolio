import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ProjectCard from '../../components/projectCard'
import DRMImage from '../images/dRMScreenshot.png'
import CalcAppImage from '../images/calcAppScreenshot.png'
import { Grid, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

type PortfolioProps = {
    title?: string
}

const Portfolio = ({ title }: PortfolioProps): JSX.Element => (
    <Box id="portfolio">
        <Typography variant="h3" sx={{ pt: '30px' }}>
            {title}
        </Typography>
        <Grid container spacing={3}>
            {' '}
            <ProjectCard
                visitProjectLink="https://davidronnlidmovies.netlify.app"
                title="Movie Browser"
                imgSrcUrl={DRMImage}
                containerImg="Desktop"
                projectGithubLink="https://github.com/davidronnlid/movie-project"
            />{' '}
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
