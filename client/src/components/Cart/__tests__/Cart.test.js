import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import Cart from '../Cart';

describe('Test Cart Component', () => {
    it('can render with products', () => {
        render(<Cart />);
        expect(screen.getByText('Test 1')).toBeInTheDocument();
    });

    it('can render without products', () => {
        render(<Cart />, { initialState: { cart: { data: { items: [] }} } });
        expect(screen.getByText('You don\'t have any products in the Cart')).toBeInTheDocument();
    });

    it('can remove from cart', () => {
        render(<Cart />);
        expect(screen.getAllByRole('button')).toHaveLength(1);

        fireEvent.click(screen.getAllByText('Remove From Cart')[0]);

        expect(screen.getByText('You don\'t have any products in the Cart')).toBeInTheDocument();
    });
})
