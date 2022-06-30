import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from '@mui/material/InputLabel';

  interface ContactFormProps {
        title?: string;
        actionDescription: string;
        formEndpoint: string;
      };

  const ContactForm = ({title, actionDescription, formEndpoint}: ContactFormProps):JSX.Element => {
    return (<Box>
      {title?title: null}
  <form action={formEndpoint} method="post" 
        target="_blank"
  
  >
    <Box sx={{mb:2}}>
      <InputLabel htmlFor="name" sx={{mb:-1}}>Your Name</InputLabel>
      <TextField name="Name" id="name" type="text" required margin='normal'/>
    </Box>
  <Box sx={{mb:2}}>
    <InputLabel htmlFor="email" sx={{mb:-1}}>Your Email</InputLabel>
    <TextField name="Email" id="email" type="email" required
    label="Your Email"
          defaultValue=""
          placeholder='david.ronnlid@gmail.com'
          margin='normal'
/>
  </Box>
  
 
  <Box sx={{mb:2}}>
    <InputLabel htmlFor="message" sx={{mb:-1}}>Your Message</InputLabel>
    <TextField name="Message" id="message" type="message" required
    label="Your Message"
          defaultValue=""
          placeholder='I think your portfolio would be better if... or: We want to work with you... or: Something else...'
          multiline
          margin='normal'
/>
  </Box><Button variant="outlined" color="primary" sx={{mb:3}}>
    <input type="submit" value={actionDescription} style={{background: "none", border: "none", width: "100%", height: "100%"}}/>
  </Button>
</form>
{/*  </Box>   <Box><TextField
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
        <Button>unused button</Button>
        {/* <input type="submit" value="Download CTA">{actionDescription}</input> */}
        {/* <input type="submit" value="Download CTA" /> */}
        {/* <Button type="submit" value="Download CTA" variant='outlined' color='primary' sx={{mb: 2}}>{actionDescription}</Button> */}
      {/* </form>     */}
      </Box>);
  }
  
  

  export default ContactForm;