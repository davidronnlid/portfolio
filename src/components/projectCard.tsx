import * as React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import iPhone from '../homePage/images/iPhone.png'
import Mac from '../homePage/images/Mac.png'
import './projectCard.scss'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'

interface ProjectCardProps {
    imgSrcUrl: string
    containerImg: 'Mobile' | 'Desktop'
    title: string
    description: string
    visitProjectLink: string
    projectGithubLink: string
    dataCy: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrcUrl,
    containerImg,
    title,
    description,
    visitProjectLink,
    projectGithubLink,
    dataCy,
}: ProjectCardProps) => {
    return (
        <Grid item md={containerImg === 'Desktop' ? 8 : 4} sx={{ mb: '15vh' }}>
            {containerImg === 'Mobile' ? (
                <>
                    <ProjectDescription
                        title={title}
                        description={description}
                        projectGithubLink={projectGithubLink}
                    />
                    <Box className="projectContainer mobileProjectContainer">
                        <Link href={visitProjectLink} data-cy={dataCy}>
                            <img
                                alt={'Davids ' + title + ' project.'}
                                src={imgSrcUrl}
                                className="mobileProjectImg"
                                loading="lazy"
                            />
                            <img
                                alt={
                                    containerImg +
                                    ' screen displays Davids ' +
                                    title.toLowerCase() +
                                    ' project.'
                                }
                                loading="lazy"
                                src={iPhone}
                                className="mobileContainerImg"
                            />{' '}
                        </Link>
                    </Box>
                </>
            ) : (
                <>
                    <ProjectDescription
                        title={title}
                        description={description}
                        projectGithubLink={projectGithubLink}
                    />
                    <Box className="projectContainer">
                        <Link href={visitProjectLink} data-cy={dataCy}>
                            <img
                                src={imgSrcUrl}
                                className="desktopProjectImg"
                                alt={'Davids ' + title + ' project.'}
                            />
                            <img
                                alt={
                                    containerImg +
                                    ' screen displays Davids ' +
                                    title.toLowerCase() +
                                    ' project.'
                                }
                                src={Mac}
                                className="desktopContainerImg"
                            />{' '}
                        </Link>
                    </Box>
                </>
            )}
        </Grid>
    )
}

export default ProjectCard

interface ProjectDescriptionProps {
    title: string
    description: string
    projectGithubLink: string
}

const ProjectDescription = ({
    title,
    description,
    projectGithubLink,
}: ProjectDescriptionProps) => {
    return (
        <>
            <Typography
                variant="h4"
                className="projectTitle"
                sx={{
                    mb: 'var(--std-mb)',
                    fontFamily: "'Magra', sans-serif",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                className="projectDescription"
                sx={{
                    mb: 'var(--std-mb)',
                    fontFamily: "'Magra', sans-serif",
                }}
            >
                {description}
            </Typography>
            <Button variant="contained" sx={{ mb: '3rem' }}>
                <a href={projectGithubLink} style={{ textDecoration: 'none' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "'Magra', sans-serif",
                        }}
                    >
                        View project code
                    </Typography>
                </a>
            </Button>
        </>
    )
}
