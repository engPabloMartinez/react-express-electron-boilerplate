import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { InventoryActionTypes } from './types';
import { ApplicationState } from '../index';

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
    >;

export const fetchRequest: AppThunk = () => {
    return (dispatch: Dispatch): any => {
        try {
            dispatch({
                type: InventoryActionTypes.FETCH_REQUEST,
            });

            return axios({
                method: 'GET',
                url: "http://localhost:3001/products",
                responseType: "json"
            }).then((response) =>
                dispatch({
                    type: InventoryActionTypes.FETCH_SUCCESS,
                    payload: response.data,
                })
            )
        } catch (e) {
            return dispatch({
                type: InventoryActionTypes.FETCH_ERROR
            });
        }
    };
};
