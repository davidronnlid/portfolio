import Box from '@mui/material/Box'
import * as React from 'react'

type ImageProps = {
    imgSrcUrl: string
    imgAlt: string
}

const MUIImg = ({ imgSrcUrl, imgAlt }: ImageProps): JSX.Element => (
    <Box
        component="img"
        sx={{
            display: { xs: 'flex', md: 'flex' },
            mr: 1,
            my: 1,
            height: 100,
            width: 'auto',
            boxShadow: 3,
        }}
        alt={imgAlt}
        src={imgSrcUrl}
    />
)

export default MUIImg
