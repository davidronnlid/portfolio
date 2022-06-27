import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

  interface ContactProps {
        title?: string;
        id: string;
      };

  const Contact = ({title, id}: ContactProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1,
                  }}
        children={
        <Box sx={{width: "80%", mx: "auto"}} id={id}>


{title ? <Typography variant="h5">{title}</Typography> : ""}
LinkedIn, GitHub, Send email form
        </Box>
        }
      />

  export default Contact;