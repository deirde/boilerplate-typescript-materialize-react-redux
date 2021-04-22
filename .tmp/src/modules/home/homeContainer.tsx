import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { logout, requestLogin } from '../../store/authActionsReducer';

import HomeLayout from './homeLayout';
import { IInitialAppStateType } from '../../types';

const mapStateToProps = (state: IInitialAppStateType) => {
  return {
    authenticated: state.authentication.authenticated,
    username: state.authentication.username,
    loading: state.view.loading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IInitialAppStateType, void, AnyAction>
) => {
  return {
    onLogin: (username: string, password: string) => {
      dispatch(requestLogin(username, password));
    },
    onLogout: () => {
      dispatch(logout());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type HomeProps = ConnectedProps<typeof connector>;
// export const Home = connector(HomeLayout)
export default connector(HomeLayout);

// ==> Class component
// class Home extends React.Component {
//     componentDidMount() {
//         console.log('>>>Home>>>componentDidMount', this.props);
//     }

//     render() {
//         return (
//             <div>
//                 asd
//             </div>
//         );
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
