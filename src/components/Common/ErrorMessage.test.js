import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  it('renders the error message', () => {
    render(<ErrorMessage message="An error occurred" />);
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });
});
