import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

  interface ContactFormProps {
        title?: string;
        actionDescription: string;
        FORM_ENDPOINT: string;
      };

  const ContactForm = ({title, actionDescription, FORM_ENDPOINT}: ContactFormProps):JSX.Element => {
    return (<Box>
      {title?title:""}
<form
        action={FORM_ENDPOINT}
        method="POST"
        target="_blank"
      >
<Box>         <TextField
          label="Your Name"
          defaultValue=""
          placeholder='David Rönnlid'
          type="text"
          margin='normal'
        />
     </Box>   <Box><TextField
          required
          label="Your Email"
          defaultValue=""
          placeholder='david.ronnlid@gmail.com'
          type="email"
          margin='normal'

        />
        </Box><Box><TextField
          required
          label="Your Message"
          defaultValue=""
          placeholder='I think your portfolio would be better if... or: We want to work with you... or: Something else...'
          multiline
          type="text"
          margin='normal'
        />
        </Box>
        <Button type="submit" variant='outlined' color='primary' sx={{mb: 2}}>{actionDescription}</Button>
      </form>        
      </Box>);
  }
  
  

  export default ContactForm;