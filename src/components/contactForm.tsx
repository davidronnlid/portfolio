import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import * as React from 'react'

interface ContactFormProps {
    title?: string
    actionDescription: string
    formEndpoint: string
}

const ContactForm = ({
    title,
    actionDescription,
    formEndpoint,
}: ContactFormProps): JSX.Element => {
    return (
        <form action={formEndpoint} method="post" target="_blank">
            {title ? (
                <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                    {title}
                </Typography>
            ) : null}
            <Grid container direction="column">
                <Grid item width="100%" sx={{ mb: 2 }}>
                    <InputLabel htmlFor="name" sx={{ mb: -1 }}>
                        Your Name
                    </InputLabel>
                    <TextField
                        name="Name"
                        id="name"
                        type="text"
                        required
                        margin="normal"
                    />
                </Grid>
                <Grid item width="100%" sx={{ mb: 2 }}>
                    <InputLabel htmlFor="email" sx={{ mb: -1 }}>
                        Your Email
                    </InputLabel>
                    <TextField
                        name="Email"
                        id="email"
                        type="email"
                        required
                        label="Your Email"
                        defaultValue=""
                        placeholder="david.ronnlid@gmail.com"
                        margin="normal"
                    />
                </Grid>

                <Grid item width="100%" sx={{ mb: 2 }}>
                    <InputLabel htmlFor="message" sx={{ mb: -1 }}>
                        Your Message
                    </InputLabel>
                    <TextField
                        name="Message"
                        id="message"
                        type="message"
                        required
                        label="Your Message"
                        defaultValue=""
                        placeholder="I think your portfolio would be better if... or: We want to work with you... or: Something else..."
                        multiline
                        margin="normal"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Button variant="outlined" color="primary" sx={{ mb: 3 }}>
                    <input
                        type="submit"
                        value={actionDescription}
                        style={{
                            background: 'none',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Button>
            </Grid>
        </form>
    )
}

export default ContactForm
