import { Reducer } from 'redux';

import { CartActionTypes, cartState } from './types';

export const initialState: cartState = {
    data: {
        id: 0,
        items: []
    },
    errors: undefined,
    loading: false
};

const reducer: Reducer<cartState> = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            return {
                errors: state.errors,
                loading: state.loading,
                data: {
                    ...state.data,
                    id: state.data.id,
                    items: [...state.data.items.filter(item => item.id !== action.payload.id), action.payload]
                }
            };
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            return {
                errors: state.errors,
                loading: state.loading,
                data: {
                    ...state.data,
                    id: state.data.id,
                    items: state.data.items.filter(item => item.id !== action.payload.id)
                }
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as cartReducer };