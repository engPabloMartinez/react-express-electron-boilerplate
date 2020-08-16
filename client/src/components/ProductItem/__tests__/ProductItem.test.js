import React from 'react';
import { render, screen } from 'test-utils';
import ProductItem from '../ProductItem';

describe('Test ProductItem Component', () => {
    it('can render without crashing inside shop', () => {
        render(<ProductItem item={{ id: 0, name: 'Test' }} />);

        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.queryByText('Remove From Cart')).toBeNull();
        expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    });

    it('can render without crashing inside cart', () => {
        render(<ProductItem item={{ id: 0, name: 'Test' }} cart />);

        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('Remove From Cart')).toBeInTheDocument();
        expect(screen.queryByText('Add To Cart')).toBeNull();
    });
})
