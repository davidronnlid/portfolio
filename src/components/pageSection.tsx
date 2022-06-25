import * as React from 'react';
import Box from '@mui/material/Box';
      
  type PageSectionProps = {
        title: string;
        comp: React.ReactElement;
      };

  const PageSection = ({title, comp}: PageSectionProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1,
        }}
        children={<Box sx={{width: "100%" }}><h1>{title}</h1>
        {comp}</Box>}
      />

  export default PageSection;