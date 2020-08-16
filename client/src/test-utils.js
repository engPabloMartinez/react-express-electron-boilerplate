import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core';

import theme from './theme';
import configureStore from './configureStore';

const initialHistory = createBrowserHistory();

const products = [
    {
        id: 'test1',
        name: 'Test 1',
        description: 'Test Description 1',
        brand: 'Test Brand 1',
        price: 10,
        image: "",
        currentInventory: 1
    },
    {
        id: 'test2',
        name: 'Test 2',
        description: 'Test Description 2',
        brand: 'Test Brand 2',
        price: 20,
        image: "",
        currentInventory: 2
    }
];

const initialStateData = {
    cart: {
        loading: false,
        errors: "",
        data: {
            id: 0,
            items: [products[0]]
        }
    },
    inventory: {
        loading: false,
        errors: "",
        data: products
    }
}

function render(
    ui,
    {
        initialState = initialStateData,
        history = initialHistory,
        store = configureStore(history, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <ConnectedRouter history={history}>
                        {children}
                    </ConnectedRouter>
                </MuiThemeProvider>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }