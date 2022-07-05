import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import TooltipLink from '../components/tooltip'
import ContactForm from '../components/contactForm'
import * as React from 'react'

const formEndpoint =
    'https://public.herotofu.com/v1/e7f34b80-f718-11ec-bc36-e1ea9ccadd33'

interface ContactProps {
    title?: string
    id: string
}

const Contact = ({ title, id }: ContactProps): JSX.Element => (
    <Grid id={id} container justifyContent="flex-start">
        <Grid item>
            {title ? (
                <Typography variant="h5" align="left">
                    {title}
                </Typography>
            ) : (
                ''
            )}

            <ContactForm
                actionDescription="Send email"
                formEndpoint={formEndpoint}
                title="Send an email to David"
            />
        </Grid>
    </Grid>
)

export default Contact
