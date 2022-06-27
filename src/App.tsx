import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./components/header"
import  PageSection from './components/pageSection';
import  Portfolio from './pageSections/portfolio';
import  WhoIAm from './pageSections/whoIAm';
import  Contact from './pageSections/contact';

const theme = createTheme({
  palette: {
    primary: {      
      main: "#173d52"
      },
    secondary: {      
      main: "#c3d0a3"
      } 
  },
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <PageSection title="Portfolio" comp={<><Portfolio  id="Portfolio" /></>}/>
      <PageSection title="Who I Am" comp={<><WhoIAm  id="Who%20I%20am" /></>}/>
      <PageSection title="Contact" comp={<><Contact  id="Contact"/></>}/>
    </ThemeProvider>
    </div>
  );
}

export default App;