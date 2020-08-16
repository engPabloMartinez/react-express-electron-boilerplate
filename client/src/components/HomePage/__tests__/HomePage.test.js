import React from 'react';
import { render, screen } from 'test-utils';
import HomePage from '../HomePage';

describe('Test Home Page Component', () => {
    it('can render without crashing', () => {
        render(<HomePage />);
        expect(screen.getByText('Welcome to the Boilerplate of React/Express/Electron Application')).toBeInTheDocument();
    });
});
