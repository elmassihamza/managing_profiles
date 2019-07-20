import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from './Toolbar';
import AppBar from '@material-ui/core/AppBar';
import LogoHeader from '../../images/LogoHeader.png';
import Button from '@material-ui/core/Button';
import ClassNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        logo: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: 'auto',
        },
        appBar: {
            boxShadow: '0px 3px 10px rgba(165, 175, 186, 0.16)',
        },
        buttonMargin: {
            margin: 16,
        },
        buttonWidth: {
            width: 160,
        },
    }),
);

export default function CustomizedAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.title}>
                        <img src={LogoHeader} width={144} alt="Header logo" className={classes.logo} />
                    </div>
                    <Button className={ClassNames(classes.buttonWidth, classes.buttonMargin)}>
                        s'identifier
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonWidth}>
                        s'inscrire
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
