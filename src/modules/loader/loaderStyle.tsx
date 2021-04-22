import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    loadingFullScreenCoverBackground: {
      position: 'fixed',
      zIndex: 9999,
      width: '100%',
      height: '100%',
      backgroundColor: '#303030',
    },
    loadingSpinner: {
      display: 'flex',
      zIndex: 99999,
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
  })
);
