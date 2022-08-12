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
                pt={5}
                sx={{
                    color: 'var(--tertiary-color)',
                }}
            >
                Portfolio
            </Typography>
            <Grid container direction="column" spacing={3}>
                <ProjectCard
                    visitProjectLink="https://davidronnlidmovies.netlify.app"
                    title="Movie Browser"
                    description="Data fetching from 3rd-party API with the native fetch() API, state management with Redux, and type control with TypeScript."
                    imgSrcUrl={DRMImage}
                    containerImg="Desktop"
                    projectGithubLink="https://github.com/davidronnlid/movie-project"
                    dataCy="movie-browser-project-link"
                />
                <ProjectCard
                    visitProjectLink="https://davidronnlidcalculator.netlify.app"
                    title="Calculator"
                    description="JavaScript algorithm skills showcased. The logic behind the calculator is written in TypeScript and styling is as I usually do done with SCSS and a CSS library. "
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
