import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    height: 'calc(100vh - 64px)'
  },
});

const HomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
      <Grid container className={classes.root} alignItems="center">
        <Grid container justify="center" item xs={12}>
          <Typography variant="h6" align="center">Welcome to the Boilerplate of React/Express/Electron Application</Typography>
        </Grid>
      </Grid>
  );
};

export default HomePage;
