import React from 'react';
import Paper from "@material-ui/core/Paper";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from '../inputs/TextField';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
        },
        paper: {
            height: 478,
            padding: '20px 32px 38px 32px',
            textAlign: 'center',
            boxShadow: theme.shadows[1],
        },
        title: {
            marginTop: 20,
            marginBottom: 20,
            lineHeight: '33px',
        },
        textFieldWidth: {
            width: '100%',
        },
        textFieldMargin: {
            marginTop: 20,
            marginBottom: 20,
        },
        button: {
            margin: '30px auto 30px auto',
            width: 228,
            height: 65,
            backgroundColor: 'rgba(233, 29, 61, 0.05)',
            border: '1px solid rgba(233, 29, 61, 1)',
            color: 'rgba(233, 29, 61, 1)',
            '&:hover': {
                backgroundColor: 'rgba(233, 29, 61, 0.3)',
            }
        }
    }),
);

export default function Login() {
    const classes = useStyles();
    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid xs={10} sm={8} md={6} lg={4} item>
                <Paper className={classes.paper}>
                    <Typography variant="subtitle1" className={classes.title}>
                        Connecter-vous à votre compte
                    </Typography>
                    <TextField
                        label="Email"
                        variant="filled"
                        className={classNames(classes.textFieldWidth, classes.textFieldMargin)}
                    />
                    <TextField
                        label="Password"
                        variant="filled"
                        type="password"
                        className={classes.textFieldWidth}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        s'inscrire
                    </Button>
                    <div>
                        <Link href="javascript:;">
                            Mot de passe oublier ?
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}