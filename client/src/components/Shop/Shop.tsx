import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProductItem from '../ProductItem/ProductItem';
import { ApplicationState } from '../../store';
import { Inventory } from '../../store/inventory/types';
import { fetchRequest } from '../../store/inventory/action';

interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
  fetchRequest: () => any;
}

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    height: 'calc(100vh - 64px)',
    padding: 18,
  },
});

const Shop: React.FunctionComponent<PropsFromState> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  const classes = useStyles();
  return (
      <Grid container className={classes.root} alignItems="center">
          {
            data.length > 0 ?
              data.map(item => {
                return (
                    <Grid key={item.id} container justify="center" item xs={12} lg={4} sm={6} md={6}>
                      <ProductItem item={item} />
                    </Grid>
                )
              })
                : (
                    <Grid container justify="center" item xs={12}>
                      <Typography variant="h6">You don't have any products in the Shop</Typography>
                    </Grid>
                )
          }
      </Grid>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = {
    fetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
