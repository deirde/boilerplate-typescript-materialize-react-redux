import React, { Fragment } from 'react';
import { InitialLoader } from '../loader/loader';

interface IndexLayoutProps {
  loading: {};
  actionLoaderSetEnabled: any;
}

const IndexLayout: React.FunctionComponent<IndexLayoutProps> = (props) => {
  props.actionLoaderSetEnabled(true);
  return <Fragment>{props.loading ? <InitialLoader /> : 'noloading'}</Fragment>;
};

export default IndexLayout;
