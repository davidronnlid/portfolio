import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/projectCard';
import DRMImage from "../images/DRMScreenshot.png"
import CalcAppImage from "../images/CalcAppScreenshot.png"
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  type PortfolioProps = {
        title?: string;
        id: string;
  }

  const Portfolio = ({title, id}: PortfolioProps):JSX.Element => <Box
  
  id={id}      
  sx={{ display: { xs: 'flex', md: 'flex' }, my: 1
          }}
        children={<>
        
        <Box sx={{width: "80%", mx: "auto"}}>
        {title ? <Typography variant="h5">{title}</Typography> : ""}
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}
 >
          <Grid item xs={12} md={6} >
            <Item><ProjectCard visitProjectLink='https://davidronnlidcalculator.netlify.app' title='Calculator' description='Do basic arithmetic operations' projectImgSrcUrl={CalcAppImage} moreDetailsSubtitle="Read more about the calculator below" moreDetailsDescription='I created this calculator app for two reasons. These are 1. for practice, and 2. to show competence with React as well as JavaScript for potential employers.' projectGithubLink="https://github.com/davidronnlid/calculator-app"/></Item>      
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
                <ProjectCard visitProjectLink='https://davidronnlidmovies.netlify.app' title='David Rönnlid movies' description='Read about the currently most popular movies' projectImgSrcUrl={DRMImage} moreDetailsSubtitle="Read more about DRM below" moreDetailsDescription='I created this movie browsing app for two reasons.
These are 1. for practice, and 2. to show competence with Redux state management as well as handling 3rd-party API data fetching for potential employers.' projectGithubLink="https://github.com/davidronnlid/movie-project"/></Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
      </>}
      />

  export default Portfolio;