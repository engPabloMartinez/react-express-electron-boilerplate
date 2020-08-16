import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { RouterState } from 'connected-react-router';

import { InventoryReducer } from './inventory/reducer';
import { InventoryState } from './inventory/types';

import { cartReducer } from './cart/reducer';
import { cartState } from './cart/types';

export interface ApplicationState {
    cart: cartState;
    inventory: InventoryState;
    router?: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        cart: cartReducer,
        inventory: InventoryReducer,
        router: connectRouter(history)
    });
