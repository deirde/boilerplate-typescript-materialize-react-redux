import React, { Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ILoaderType } from './../../types';
import useStyles from './loaderStyle';

interface IPropsType {
  loader: ILoaderType;
}

export const Loader: React.FunctionComponent<IPropsType> = (props) => {
  const classes = useStyles();

  const initialLoader = (
    <Fragment>
      <div className={classes.loadingFullScreenCoverBackground} />
      <div className={classes.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    </Fragment>
  );

  const fullPageLoader = (
    <div className={classes.loadingSpinner}>
      <CircularProgress color="secondary" />
    </div>
  );

  const inPageLoader = (
    <div className={classes.loadingSpinner}>
      <CircularProgress color="secondary" />
    </div>
  );

  if (props.loader.enabled) {
    if (props.loader.level === 0) {
      return initialLoader;
    } else if (props.loader.level === 1) {
      return fullPageLoader;
    }
    return inPageLoader;
  }

  return <Fragment />;
};
