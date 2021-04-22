import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IInitialAppStateType } from './../../types';
import { actionInitPollConfig } from './../../store/configActionsReducer';
import {
  actionLoaderAddChunk,
  actionLoaderRemoveChunk,
} from '../../store/loaderActionsReducer';
import IndexLayout from './indexLayout';

const mapStateToProps = (state: IInitialAppStateType) => ({
  loader: state.loader,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IInitialAppStateType, void, AnyAction>
) => {
  return {
    actionInitPollConfig: () => dispatch(actionInitPollConfig()),
    actionLoaderRemoveChunk: (payload: string) =>
      dispatch(actionLoaderRemoveChunk(payload)),
    actionLoaderAddChunk: (payload: string) =>
      dispatch(actionLoaderAddChunk(payload)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IndexProps = ConnectedProps<typeof connector>;
export default connector(IndexLayout);
