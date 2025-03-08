import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesContainer from './ArticlesContainer';

// Mock data for articles
const mockArticles = [
  { id: 1, title: 'Test Article 1' },
  { id: 2, title: 'Test Article 2' }
];

// Mock the onArticleSelect function
const mockOnArticleSelect = jest.fn();

describe('ArticlesContainer component', () => {
  it('displays loading indicator when fetching articles', () => {
    render(<ArticlesContainer articles={[]} loading={true} onArticleSelect={mockOnArticleSelect} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('displays error message when there is an error fetching articles', () => {
    render(<ArticlesContainer articles={[]} error="Failed to fetch articles" onArticleSelect={mockOnArticleSelect} />);
    expect(screen.getByText('Failed to fetch articles')).toBeInTheDocument();
  });

  it('renders articles when articles are available', () => {
    render(<ArticlesContainer articles={mockArticles} onArticleSelect={mockOnArticleSelect} />);
    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
  });
});
