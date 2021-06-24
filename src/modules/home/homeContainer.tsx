import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IInitialAppStateType } from '../../types';
import HomeLayout from './homeLayout';
import { actionHomeItemsLoad } from '../../store/homeItemsActionReducer';
import { withStyles } from '@material-ui/styles';
import makeStyles from './homeStyle';

const useStyles = (theme: any) => ({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const mapStateToProps = (state: IInitialAppStateType) => ({
  homeItems: state.homeItems,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IInitialAppStateType, void, AnyAction>
) => {
  return {
    actionHomeItemsLoad: () => dispatch(actionHomeItemsLoad()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HomeProps = ConnectedProps<typeof connector>;
// export default connector(HomeLayout);
export default connector(withStyles(makeStyles)(HomeLayout));
