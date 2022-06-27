import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
      
  type WhoIamProps = {
        title?: string;
        id: string;
      };

  const WhoIam = ({title, id}: WhoIamProps):JSX.Element => <Box
        id={id}
        sx={{ display: { xs: 'flex', md: 'flex' },my: 1,
          }}
        children={
          <Box sx={{width: "80%", mx: "auto"}}>
            
            {title ? <Typography variant="h5">{title}</Typography> : ""}
            I am a 
<Typography variant="body1">Frontend web developer (React, Redux, TypeScript, MaterialUI). Long term vision: I want to help people understand and enhance their conscious experience with medtech.
/Tech stack info...
/Connect with me in your preferred way below</Typography>
            <br/>

<Typography variant="body1">In 2019, I and two senior full-stack developers co-founded Nootralize. I developed the company's main product <Link href="https://nootralize.com">nootralize.com</Link> from 0 to finished product over the course of 1.5 years with one of the senior full-stack developers. This was a great learning experience for me, specifically when it comes to project management and web app development. From general to specific, I got to learn how to plan development, prototype UI and UX, develop minimum viable products and eventually iterate upon feedback from users.</Typography>        
            </Box>
          }      />

  export default WhoIam;