import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/styles';
import { IHomeItemsType, IInternalComponentStateFieldType } from '../../types';
import Item from './item';

interface IPropsType {
  homeItems: IHomeItemsType;
  actionHomeItemsLoad: () => void;
  classes: any;
}

// const useStyles = (theme: any) => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

class HomeLayout extends React.Component<
  IPropsType,
  IInternalComponentStateFieldType
> {
  componentDidMount() {
    this.props.actionHomeItemsLoad();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={3} className={classes.root}>
          {Object.keys(this.props.homeItems).map((i) => (
            <Grid key={i.toString()} item sm={6} md={4} xs={12} lg={3}>
              <Item {...this.props.homeItems[i]} />
            </Grid>
          ))}
          {/* {Object.keys(this.props.homeItems).map((i) => (
            <Grid key={i.toString()} item sm={6} md={4} xs={12} lg={3}>
              <Item {...this.props.homeItems[i]} />
            </Grid>
          ))} */}
        </Grid>
      </Fragment>
    );
  }
}

// export default withStyles(useStyles)(HomeLayout);
export default HomeLayout;
