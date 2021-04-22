import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IInitialAppStateType } from '../../types';
import HomeLayout from './homeLayout';

const mapStateToProps = (state: IInitialAppStateType) => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IInitialAppStateType, void, AnyAction>
) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HomeProps = ConnectedProps<typeof connector>;
export default connector(HomeLayout);
