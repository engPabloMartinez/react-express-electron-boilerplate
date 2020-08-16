import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import axios from 'axios';
import Shop from '../Shop';

jest.mock('axios');

describe('Test Shop Component', () => {
    it('can render with products', () => {
        render(<Shop />);
        expect(screen.getByText('Test 1')).toBeInTheDocument();
    });

    it('can render without products', () => {
        render(<Shop />, { initialState: { inventory: { data: [] } } });
        expect(screen.getByText('You don\'t have any products in the Shop')).toBeInTheDocument();
    });

    it('can add to cart', () => {
        render(<Shop />);
        expect(screen.getAllByRole('button')).toHaveLength(2);

        fireEvent.click(screen.getAllByText('Add To Cart')[1]);
    });
})
