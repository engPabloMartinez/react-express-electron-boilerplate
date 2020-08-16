import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Theme, Toolbar, makeStyles, Grid } from '@material-ui/core';

import { ApplicationState } from '../../store';
import { Cart } from '../../store/cart/types';

interface propsFromState {
  data: Cart;
  loading: boolean;
  errors?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: 'white',
    textDecoration: 'none',
  },
  centered: {
    textAlign: 'center',
  },
  activeLink: {
    color: 'darkblue',
  },
}));

const Navbar: React.FunctionComponent<propsFromState> = ({ data, loading, errors, children }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={2} lg={1} sm={2}>
                <NavLink exact className={classes.item} activeClassName={classes.activeLink} to="/">Home</NavLink>
              </Grid>
              <Grid item xs={9} lg={10} sm={9}>
                <NavLink className={classes.item} activeClassName={classes.activeLink} to="/shop">Shop</NavLink>
              </Grid>
              <Grid item xs={1} container justify="center">
                <NavLink className={classes.item} activeClassName={classes.activeLink} to="/cart">
                  Cart <div className={classes.centered}>{data.items.length}</div>
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  loading: cart.loading,
  errors: cart.errors
});

export default connect(mapStateToProps)(Navbar);
