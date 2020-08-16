import React from 'react';
import { connect } from 'react-redux';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Inventory } from '../../store/inventory/types';
import { addToCart, removeFromCart } from '../../store/cart/action';

interface propsFromComponent {
    item: Inventory;
    cart?: boolean;
    addToCart: (item: any) => any;
    removeFromCart: (item: any) => any;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: 650,
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
      marginTop: 8,
    },
    actions: {
        marginTop: 'auto',
        marginBottom: 8,
    },
});

const ProductItem: React.FunctionComponent<propsFromComponent> = ({ item, addToCart, cart = false, removeFromCart }) => {
    const classes = useStyles();

    const AddItemToCart = (item: any) => {
        addToCart(item);
    };

    const RemoveItemFromCart = (item: any) => {
        removeFromCart(item);
    };

    return (
        <Card className={classes.root} raised>
            <CardMedia
                component="img"
                alt={item.name}
                height="140"
                className={classes.image}
                image={item.image}
                title={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    {item.name}
                    <Typography variant="h6" component="p">
                        <b>Brand:</b> {item.brand}
                    </Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Grid container justify="center" alignItems="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h5" color="textPrimary" component="p" gutterBottom>
                            <i>$ {parseFloat(item.price).toFixed(2)}</i>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            !cart ? (
                                    <Button size="small" color="primary" variant="contained" onClick={() => AddItemToCart(item)}>
                                        Add To Cart
                                    </Button>
                                )
                            : (
                                <Button size="small" color="primary" variant="contained" onClick={() => RemoveItemFromCart(item)}>
                                    Remove From Cart
                                </Button>
                            )
                        }
                    </Grid>
                </Grid>
            </CardActions>

        </Card>
    );
};

const mapDispatchToProps = {
    addToCart,
    removeFromCart
};

export default connect(null, mapDispatchToProps)(ProductItem);
