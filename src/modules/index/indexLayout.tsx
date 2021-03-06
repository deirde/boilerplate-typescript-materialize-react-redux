import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IInternalComponentStateFieldType, ILoaderType } from '../../types';
import Header from './../header/header';
import { Loader } from './../loader/loaderLayout';
import Home from './../home/homeContainer';
import { LoaderChunks } from '../../store/loaderActionsReducer';

import { genericService } from '../../libs/genericService';

interface IPropsType {
  loader: ILoaderType;
  actionInitPollConfig: () => void;
  actionLoaderRemoveChunk: (payload: string) => void;
  actionLoaderAddChunk: (payload: string) => void;
}

class IndexLayout extends React.Component<
  IPropsType,
  IInternalComponentStateFieldType
> {
  componentDidMount() {
    this.props.actionInitPollConfig();
    this.props.actionLoaderRemoveChunk(LoaderChunks.CHUNK_CONFIG);

    genericService
      .getInstance({
        endpoint: 'https://pcms.123beta.net/config/config.json',
        ttl: 3600,
        forceRefresh: true,
      })
      .getData()
      .then((response: any) => console.log('>>>>>>RESPONSE', response));
  }

  render() {
    return (
      <Fragment>
        <Loader loader={this.props.loader} />
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/404">404</Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default IndexLayout;
