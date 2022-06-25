import Box from '@mui/material/Box';
      
  type WhoIamProps = {
        title: string;
      };

  const WhoIam = ({title}: WhoIamProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' },my: 1,
          }}
        children={
          <Box sx={{width: "80%", mx: "auto"}}>{title}</Box>
          }      />

  export default WhoIam;