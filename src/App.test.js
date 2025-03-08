import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NY Times heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(headingElement).toBeInTheDocument();
});