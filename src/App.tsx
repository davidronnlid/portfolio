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
      <PageSection title='Portfolio' comp={<><Portfolio title="This is the Portfolio title" /></>}/>
      <PageSection title='PageSection 2 (will become Who I am section)' comp={<><WhoIAm title="Who I Am" /></>}/>
      <PageSection title='PageSection 3 (will become Contact section)' comp={<><Contact title="Contact" /></>}/>
    </ThemeProvider>
    </div>
  );
}

export default App;