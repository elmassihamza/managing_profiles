import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import request from '../../utils/request';

import get from 'lodash/get';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
        },
        paper: {
            height: 478,
            textAlign: 'center',
            paddingLeft: 42,
            paddingRight: 42,
        },
        avatar: {
            width: 150,
            height: 150,
            position: 'relative',
            top: -75,
            margin: 'auto',
            marginBottom: -75,
        },
        divider: {
            margin: '30px auto 30px auto',
            width: 60,
        },
        button: {
            width: 160,
            height: 55,
            backgroundColor: 'rgba(233, 29, 61, 0.05)',
            border: '1px solid rgba(233, 29, 61, 1)',
            color: 'rgba(233, 29, 61, 1)',
        }
    }),
);

interface User {
    firstName?: string,
    lastName?: string,
    city?: string,
    picture?: string,
    age?: string,
}

export default function Profile() {
    const classes = useStyles();
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        city: '',
        picture: '',
        age: '',
    });

    const handleSetUser = (userData: object) => {
        const user = get(userData, ['results', '0']);
        setUser({
            firstName: get(user, ['name', 'first']),
            lastName: get(user, ['name', 'last']),
            city: get(user, ['location', 'city']),
            picture: get(user, ['picture', 'large']),
            age: get(user, ['dob', 'age']),
        });
    };

    useEffect(() => {
        request('https://randomuser.me/api')
            .then((data) => handleSetUser(data));
    }, []); // I passed an empty array as a second argument so this method will be called only once

    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid xs={9} sm={7} md={5} lg={3} item>
                <Paper className={classes.paper}>
                    <Avatar alt="Remy Sharp" src={user.picture} className={classes.avatar} />
                    <div style={{
                        margin: 17.5
                    }}>
                        <Typography variant="subtitle2">
                            {`${user.firstName} ${user.lastName}, ${user.age}`}
                        </Typography>
                        <Typography variant="body1">
                            {user.city}
                        </Typography>
                    </div>
                    <Typography variant="body2">
                        Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.
                    </Typography>
                    <Divider variant="middle" className={classes.divider} />
                    <Button className={classes.button}>
                        voir profile
                    </Button>
                    <div style={{
                        margin: 30,
                    }}>
                        <Link href="javascript:;">
                            Mot de passe oublier ?
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}