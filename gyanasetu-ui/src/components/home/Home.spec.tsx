import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home Component', () => {
  test('renders the welcome image', () => {
    render(<Home />);
    const image = screen.getByAltText('Welcome');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://cdni.iconscout.com/illustration/premium/thumb/team-success-4704248-3916212.png');
  });

  test('renders the welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to GyanaSetu/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders the subheading', () => {
    render(<Home />);
    const subheading = screen.getByText('GyanaSetu Empowering Your Career Aspirations');
    expect(subheading).toBeInTheDocument();
  });

  test('renders the "Get Started" button', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toBeInTheDocument();
  });

  test('button has correct styles', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toHaveStyle('background-color: orange');
  });
});
