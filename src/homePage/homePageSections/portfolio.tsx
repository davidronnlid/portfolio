import * as React from 'react'
import Box from '@mui/material/Box'
import ProjectCard from '../../components/projectCard'
import DRMImage from '../images/dRMScreenshot.png'
import CalcAppImage from '../images/calcAppScreenshot.png'
import { Grid, Typography } from '@mui/material'

const Portfolio: React.FC = (): JSX.Element => (
    <Box
        id="portfolio"
        sx={{
            backgroundColor: 'var(--secondary-color)',
            width: '100vw',
        }}
    >
        <Box sx={{ width: '80vw', margin: '0 auto' }}>
            <Typography
                variant="h3"
                sx={{
                    color: 'var(--primary-color)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    padding: '3rem 0 1rem ',
                    fontFamily: "'Magra', sans-serif",
                }}
            >
                Portfolio
            </Typography>
            <Grid container direction="column" spacing={3}>
                <ProjectCard
                    visitProjectLink="https://davidronnlidmovies.netlify.app"
                    title="Movie Browser"
                    description="Data fetched from 3rd-party API with the native fetch() API, state management with Redux, and type control with TypeScript."
                    imgSrcUrl={DRMImage}
                    containerImg="Desktop"
                    projectGithubLink="https://github.com/davidronnlid/movie-project"
                    dataCy="movie-browser-project-link"
                />
                <ProjectCard
                    visitProjectLink="https://davidronnlidcalculator.netlify.app"
                    title="Calculator"
                    description="JavaScript algorithm skills showcased. Edge case and error handling is manually managed to demonstrate deep understanding of the underlying principles of good modern JS web apps."
                    imgSrcUrl={CalcAppImage}
                    containerImg="Mobile"
                    projectGithubLink="https://github.com/davidronnlid/calculator-app"
                    dataCy="calculator-project-link"
                />
            </Grid>
        </Box>
    </Box>
)

export default Portfolio
