import Box from '@mui/material/Box';
      
  interface ContactFormProps {
        title: string;
      };

  const ContactForm = ({title}: ContactFormProps):JSX.Element => <Box
        >CONTACT FORM COMPONENT{title}
      </Box>

  export default ContactForm;