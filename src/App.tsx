import React from 'react';
import BaseLayout from './components/baseLayout/index';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(233, 29, 61, 1)',
        },
        background: {
            default: '#F7F9FA',
        },
    },
    typography: {
        button: {
            fontSize: 15,
        },
    },
    overrides: {
        MuiToolbar: {
            root: {
                height: 80,
            }
        },
        MuiButton: {
            root: {
                height: 55,
                borderRadius: 28,
            }
        },
    }
});

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <BaseLayout />
        </Router>
      </ThemeProvider>
  );
};

export default App;
