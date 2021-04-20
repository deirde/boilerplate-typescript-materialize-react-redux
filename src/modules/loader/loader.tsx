import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '25%',
      right: '50%',
      transform: 'translateY(-50%)',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export const InitialLoader: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}

export const FullPageLoader: React.FunctionComponent = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        FullPageLoader
      </div>
    );
}

export const InPageLoader: React.FunctionComponent = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        InPageLoader
      </div>
    );
}