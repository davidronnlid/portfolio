import Box from '@mui/material/Box';

      
  type ContactProps = {
        title: string;
      };

  const Contact = ({title}: ContactProps):JSX.Element => <Box
        component="div"
        sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, my: 1,
          height: 100,
          width: "auto",
          boxShadow: 3,
          maxWidth: { xs: 80, md: 80 },
          maxHeight: { xs: 110, md: 110 },
        }}
        children={title}
      />

  export default Contact;