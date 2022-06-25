import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/projectCard';
import DRMImage from "../images/DRMScreenshot.png"
import CalcAppImage from "../images/CalcAppScreenshot.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  type PortfolioProps = {
        title: string;
  }

  const Portfolio = ({title}: PortfolioProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1
          }}
          
        children={<>
        
        <Box sx={{width: "80%", mx: "auto"}}>
            <h1>{title}</h1>
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item><ProjectCard visitProjectLink='https://davidronnlidcalculator.netlify.app' title='Calculator developed by David Rönnlid' favIconImgSrcUrl='https://raw.githubusercontent.com/davidronnlid/calculator-app/main/public/favicon.ico' description='Practice project - creating a calculator from scratch with ReactJS.' projectImgSrcUrl={CalcAppImage} moreDetailsSubtitle="Read more about the calculator below" moreDetailsDescription='More info...'/></Item>      
          </Grid>
          <Grid item xs={6}>
            <Item>
                <ProjectCard visitProjectLink='https://davidronnlidmovies.netlify.app' title='David Rönnlid movies' favIconImgSrcUrl='https://raw.githubusercontent.com/davidronnlid/movie-project/master/public/favicon.ico' description='I created this movie selection app for two reasons.
These are 1. for practice, and 2. to show competence with Redux state management as well as handling 3rd-party API data fetching.' projectImgSrcUrl={DRMImage} moreDetailsSubtitle="Read more about DRM below" moreDetailsDescription='More info...'/></Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
      </>}
      />

  export default Portfolio;