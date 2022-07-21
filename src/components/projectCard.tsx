import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { BsGithub } from 'react-icons/bs'
import TooltipLink from './tooltip'

interface ProjectCardProps {
    imgSrcUrl: string
    imgAlt: string
    title: string
    visitProjectLink: string
    projectGithubLink: string
}

export default function ProjectCard({
    imgSrcUrl,
    imgAlt,
    title,
    visitProjectLink,
    projectGithubLink,
}: ProjectCardProps) {
    return (
        <>
            <Link href={visitProjectLink}>
                <TooltipLink
                    icon={<BsGithub className="projectGithubIcon" />}
                    title="Project Github Link"
                    link={projectGithubLink}
                />
                <Box className="imgContainer">
                    <Box
                        component="img"
                        className="overlayMUIImg"
                        alt={imgAlt}
                        src={imgSrcUrl}
                    />
                    <Box className="textOnImgContainer">
                        <Typography variant="h4">{title}</Typography>
                    </Box>
                </Box>
            </Link>
        </>
    )
}
