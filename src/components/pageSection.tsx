import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
      
  type PageSectionProps = {
        title?: string;
        comp: React.ReactElement;
      };
      

  const PageSection = ({title, comp}: PageSectionProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1,
        }}
        children={<Box sx={{width: "100%" }}>
          
          <Typography variant='h4' sx={{my:2}}>{title}</Typography>

        {comp}
        </Box>}
      />

  export default PageSection;