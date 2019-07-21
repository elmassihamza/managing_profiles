import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';


const useStyles = makeStyles(
    createStyles({
        root: {
            paddingLeft: 100,
            paddingRight: 100,
        },
    }),
);

export default function CustomizedToolbar(props: ToolbarProps) {
    const classes = useStyles();

    return (
        <Toolbar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}
