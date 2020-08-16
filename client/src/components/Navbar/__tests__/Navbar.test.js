import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import { createBrowserHistory } from 'history';
import Navbar from '../Navbar';

const history = createBrowserHistory();

// mock push function
history.push = jest.fn();

describe('Test Navbar Component', () => {
    it('can render without crashing', () => {
        render(<Navbar />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Cart')).toBeInTheDocument();
    });

    it('can navigate with the navbar to the shop', () => {
        render(<Navbar />, { history: history });

        fireEvent.click(screen.getByText('Shop'));

        // spy on push calls, assert on url (parameter)
        expect(history.push).toHaveBeenCalledWith({ "hash": "", "pathname": "/shop", "search": "", "state": null });
    });

    it('can navigate with the navbar to the cart', () => {
        render(<Navbar />, { history: history });

        fireEvent.click(screen.getByText('Cart'));

        // spy on push calls, assert on url (parameter)
        expect(history.push).toHaveBeenCalledWith({ "hash": "", "pathname": "/cart", "search": "", "state": null });
    });

    it('can navigate with the navbar to home', () => {
        render(<Navbar />, { history: history });

        fireEvent.click(screen.getByText('Home'));

        // spy on push calls, assert on url (parameter)
        expect(history.push).toHaveBeenCalledWith({ "hash": "", "pathname": "/", "search": "", "state": null });
    });
})
