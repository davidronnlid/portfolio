import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./pageSections/header"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home"
import SuccessPage from "./pages/success"

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
  return (<ThemeProvider theme={theme}>
    <div className="App">
      <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/success" element={<SuccessPage title="Success!"/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;