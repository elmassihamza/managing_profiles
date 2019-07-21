import React from 'react';
import BaseLayout from './components/baseLayout/index';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

const { shadows } = createMuiTheme();
shadows[1] = '0px 3px 10px rgba(165, 175, 186, 0.16)';

const theme = createMuiTheme({
    shadows,
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
        subtitle1: {
            fontSize: '1.5rem',
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
            },
            contained: {
                boxShadow: 'none',
            },
        },
        MuiInputLabel: {
            root: {
                fontSize: '17px',
                lineHeight: '40px'
            }
        },
        MuiTextField: {
            root: {
                height: 80,
            }
        },
        MuiInputBase: {
            input: {
                fontSize: 18,
                height: 80,
            }
        },
        MuiTypography: {
            // @ts-ignore
            // I think this should be reported as an issue missing colorPrimary in TypographyClassKey
            colorPrimary: {
                color: '#F55871',
            },
        },
        MuiLink: {
            underlineHover: {
                textDecoration: 'underline',
            },
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
