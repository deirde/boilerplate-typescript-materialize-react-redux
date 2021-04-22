import React, { Fragment } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IInitialAppStateType, ILoaderType } from '../../types';
import Header from '../header/header';
import Home from '../src/modules/home/homeContainer';
import { InitialLoader, FullPageLoader, InPageLoader } from '../loader/loader';
import {
  handleActionLoadingSetCategory,
  handleActionLoadingSetCategoryAndChunks,
  handleActionLoadingDecreaseChunks,
} from '../../store/loadingActionsReducer';
import {
  actionLoaderSetEnabled,
  actionLoaderSetChunks,
  actionLoaderRemoveChunk,
} from '../../store/loaderActionsReducer';
import { actionInitPollConfig } from '../../store/configActionsReducer';
import { getFeature, getConfig } from '../../boot/configClient';
import IndexLayout from './indexLayout';

interface OwnProps {}

interface StateProps {
  loading: boolean;
  loader: ILoaderType;
  actionInitPollConfig: () => void;
  handleActionLoadingSetCategory: (category: string) => void;
  handleActionLoadingSetCategoryAndChunks: (
    category: string,
    chunks: number
  ) => void;
  handleActionLoadingDecreaseChunks: () => void;
  actionLoaderSetEnabled: (payload: ILoaderType['enabled']) => void;
  actionLoaderSetChunks: (payload: ILoaderType['chunks']) => void;
  actionLoaderRemoveChunk: (payload: string) => void;
}

interface State {
  internalComponentStateField: string;
}

type Props = StateProps & OwnProps;

class Index extends React.Component<Props, State> {
  componentDidMount() {
    console.log('>>>componentDidMount');
    // this.props.handleActionLoadingSetCategoryAndChunks('inPageLoading', 5)
    // this.props.handleActionLoadingDecreaseChunks();
    // this.props.handleActionLoadingDecreaseChunks();
    // this.props.handleActionLoadingDecreaseChunks();
    // this.props.handleActionLoadingDecreaseChunks();
    // this.props.handleActionLoadingDecreaseChunks();
    //this.props.handleActionLoadingSetCategory('fullPage')
    this.props.actionInitPollConfig();
    this.props.actionLoaderSetEnabled(true);
    this.props.actionLoaderSetChunks(['loadhomeItems', 'pinkopanko22']);
    this.props.actionLoaderRemoveChunk('pinkopanko22');
    this.props.actionLoaderRemoveChunk('pinkopanko22');
    this.props.actionLoaderRemoveChunk('loplop');
    this.props.actionLoaderRemoveChunk('qqq');
    // this.props.actionLoaderSetEnabled(false);

    // console.log('>>>getFeature__darkMode', getFeature('darkMode'));
    // console.log('>>>', getConfig());
  }

  componentDidUpdate() {
    // console.log('>>>componentDidUpdate');
  }

  renderBody() {
    return (
      <Fragment>
        <FullPageLoader />
        <InPageLoader />
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/404"></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.props.loading ? <InitialLoader /> : this.renderBody()}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IInitialAppStateType, void, AnyAction>
) => {
  return {
    actionInitPollConfig: () => dispatch(actionInitPollConfig()),
    handleActionLoadingSetCategory: (category: string) =>
      dispatch(handleActionLoadingSetCategory(category)),
    handleActionLoadingSetCategoryAndChunks: (
      category: string,
      chunks: number
    ) => dispatch(handleActionLoadingSetCategoryAndChunks(category, chunks)),
    handleActionLoadingDecreaseChunks: () =>
      dispatch(handleActionLoadingDecreaseChunks()),

    actionLoaderSetEnabled: (payload: ILoaderType['enabled']) =>
      dispatch(actionLoaderSetEnabled(payload)),

    actionLoaderSetChunks: (payload: ILoaderType['chunks']) =>
      dispatch(actionLoaderSetChunks(payload)),

    actionLoaderRemoveChunk: (payload: string) =>
      dispatch(actionLoaderRemoveChunk(payload)),
  };
};

const mapStateToProps = (state: IInitialAppStateType, ownProps: OwnProps) => ({
  loading: state.app.loading,
  loader: state.loader,
});
const connector = connect(mapStateToProps, mapDispatchToProps);
export type IndexProps = ConnectedProps<typeof connector>;
export default connector(Index);
// export default connect(mapStateToProps)(Init)
