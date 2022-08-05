import * as React from 'react'

import Typography from '@mui/material/Typography'

interface WhyMeProps {
    title: string
}

const WhyMe: React.FC<WhyMeProps> = ({ title }: WhyMeProps): JSX.Element => {
    return (
        <>
            <Typography variant="h3">{title}</Typography>
            <ul>
                <li style={{ marginBottom: '1rem' }}>
                    <Typography variant="body1">
                        I love to work with people who are driven to learn
                    </Typography>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <Typography variant="body1">
                        I love to create great products with code
                    </Typography>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <Typography variant="body1">
                        I am a passionate junior front-end web developer
                        specialized in React and TypeScript
                    </Typography>
                </li>
            </ul>
        </>
    )
}

export default WhyMe
