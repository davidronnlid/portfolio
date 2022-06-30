import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./homePageSections/header"
import HomePage from "./pages/home"
import {Routes, Route, Outlet} from "react-router-dom"
import SuccessPage from './pages/success';

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


function SetConstantHeader() {
  return (
  <><ResponsiveAppBar />
  <Outlet />
  </>)

}

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="/" element={<SetConstantHeader />}>
          <Route path="/" element={<HomePage />} />
          <Route path="contact-success" element={<SuccessPage title="Success!" description="Your email was successfully sent to David."/>} />
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;