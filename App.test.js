import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title from Menu', () => {
  render(<App />);
  const brandElement = screen.getByText(/react-bootstrap/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders Add Todo input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add todo/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders Add Todo button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add todo/i);
  expect(buttonElement).toBeInTheDocument();
});
