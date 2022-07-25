import * as React from 'react'
import Typography from '@mui/material/Typography'
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

export default function ProjectCard({
    imgSrcUrl,
    containerImg,
    title,
    visitProjectLink,
    projectGithubLink,
}: ProjectCardProps) {
    return (
        <Grid item md={containerImg === 'Desktop' ? 8 : 4}>
            <Link href={visitProjectLink}>
                <TooltipLink
                    icon={<BsGithub className="projectGithubIcon" />}
                    title="Project Github Link"
                    link={projectGithubLink}
                />{' '}
                {/* <Box className="imgContainer"> */}
                {containerImg === 'Mobile' ? (
                    <Box className="projectContainer mobileProjectContainer">
                        <img
                            alt={'Davids ' + { title } + ' project.'}
                            src={imgSrcUrl}
                            className="mobileProjectImg"
                            loading="lazy"
                        />
                        <img
                            alt={
                                containerImg +
                                ' screen displays Davids ' +
                                { title }.toString().toLowerCase() +
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
                            alt={'Davids ' + { title } + ' project.'}
                            src={imgSrcUrl}
                            className="desktopProjectImg"
                        />
                        <img
                            alt={
                                containerImg +
                                ' screen displays Davids ' +
                                { title }.toString().toLowerCase() +
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
