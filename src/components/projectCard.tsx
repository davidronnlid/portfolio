import * as React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { BsGithub } from 'react-icons/bs'
import TooltipLink from './tooltip'
import iPhone from '../homePage/images/iPhone.png'
import Mac from '../homePage/images/Mac.png'
import './projectCard.scss'
import Grid from '@mui/material/Grid'

interface ProjectCardProps {
    imgSrcUrl: string
    containerImg: 'Mobile' | 'Desktop'
    title: string
    visitProjectLink: string
    projectGithubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrcUrl,
    containerImg,
    title,
    visitProjectLink,
    projectGithubLink,
}: ProjectCardProps) => {
    return (
        <Grid item md={containerImg === 'Desktop' ? 8 : 4}>
            <TooltipLink
                icon={<BsGithub className="projectGithubIcon" />}
                title="Project Tooltip Github Link"
                link={projectGithubLink}
            />{' '}
            <Link href={visitProjectLink}>
                {containerImg === 'Mobile' ? (
                    <Box className="projectContainer mobileProjectContainer">
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
                        />
                    </Box>
                ) : (
                    <Box className="projectContainer">
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
                        />
                    </Box>
                )}
            </Link>
        </Grid>
    )
}

export default ProjectCard
