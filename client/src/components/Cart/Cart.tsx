import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ApplicationState } from '../../store';
import { Cart } from '../../store/cart/types';
import ProductItem from '../ProductItem/ProductItem';

interface propsFromState {
  cartItems: Cart;
}

const useStyles = makeStyles({
    root: {
        overflow: 'auto',
        height: 'calc(100vh - 64px)',
        padding: 18,
    },
});

const CartComponent: React.FunctionComponent<propsFromState> = ({ cartItems }) => {
    const classes = useStyles();
    return (
      <Grid container className={classes.root} alignItems="center">
          {
              cartItems.items.length > 0 ?
                  cartItems.items.map(item => {
                      return (
                          <Grid key={item.id} container justify="center" item xs={12} lg={4} sm={6} md={6}>
                              <ProductItem item={item} cart />
                          </Grid>
                      )
                })
                  : (
                      <Grid container justify="center" item xs={12}>
                        <Typography variant="h6">You don't have any products in the Cart</Typography>
                      </Grid>
                  )
          }
      </Grid>
    );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

export default connect(mapStateToProps)(CartComponent);
