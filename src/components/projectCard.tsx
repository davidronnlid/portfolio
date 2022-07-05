import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

type ProjectCardProps = {
    projectImgSrcUrl: string
    title: string
    description: string
    visitProjectLink: string
    moreDetailsSubtitle: string
    moreDetailsDescription: string
    projectGithubLink: string
}

export default function ProjectCard({
    projectImgSrcUrl,
    title,
    description,
    visitProjectLink,
    moreDetailsSubtitle,
    moreDetailsDescription,
    projectGithubLink,
}: ProjectCardProps) {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Link href={projectGithubLink}>
                        <GitHubIcon />
                    </Link>
                }
                action={
                    <IconButton
                        aria-label="Visit website"
                        href={visitProjectLink}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                }
                title={<Typography variant="h5">{title}</Typography>}
                subheader={description}
            />
            <Link href={visitProjectLink}>
                <CardMedia
                    component="img"
                    image={projectImgSrcUrl}
                    alt="Screenshot image of project site"
                />
            </Link>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="subtitle2">
                        {moreDetailsSubtitle}
                    </Typography>
                    <Typography paragraph>{moreDetailsDescription}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
