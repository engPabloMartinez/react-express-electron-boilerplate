import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { CartActionTypes } from './types';
import { Inventory } from '../inventory/types';
import { ApplicationState } from '../index';

export type AppThunk = ThunkAction<
    void,
    ApplicationState,
    null,
    Action<string>
    >;

export const addToCart: ActionCreator<ThunkAction<
    void,
    ApplicationState,
    Inventory,
    Action<string>
    >> = item => {
    return (dispatch: Dispatch): Action => {
        try {
            return dispatch({
                type: CartActionTypes.ADD_TO_CART,
                payload: item
            });
        } catch (e) {
            return dispatch({
                type: CartActionTypes.ADD_TO_CART_FAILURE,
                payload: null
            });
        }
    };
};

export const removeFromCart: ActionCreator<ThunkAction<
    void,
    ApplicationState,
    Inventory,
    Action<string>
    >> = item => {
    return (dispatch: Dispatch): Action => {
        try {
            return dispatch({
                type: CartActionTypes.REMOVE_FROM_CART,
                payload: item
            });
        } catch (e) {
            return dispatch({
                type: CartActionTypes.REMOVE_FROM_CART_FAILURE,
                payload: null
            });
        }
    };
};