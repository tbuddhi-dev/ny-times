import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from './ArticleList';

// Mock data for testing
const mockArticles = [
  { id: 1, title: 'Article 1', byline: 'Author 1' },
  { id: 2, title: 'Article 2', byline: 'Author 2' },
];

// Mock function for article selection
const mockOnSelectArticle = jest.fn();

describe('ArticleList component', () => {
  it('renders the article list correctly', () => {
    // Render the component with mock data
    render(<ArticleList articles={mockArticles} onSelectArticle={mockOnSelectArticle} />);
    
    // Check if both article titles are displayed
    const article1 = screen.getByText('Article 1');
    const article2 = screen.getByText('Article 2');
    
    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
  });

  it('calls onSelectArticle when an article is clicked', () => {
    // Render the component with mock data
    render(<ArticleList articles={mockArticles} onSelectArticle={mockOnSelectArticle} />);
    
    // Simulate clicking the first article
    const article1 = screen.getByText('Article 1');
    fireEvent.click(article1);
    
    // Check if the mock function is called with the correct argument
    expect(mockOnSelectArticle).toHaveBeenCalledWith(mockArticles[0]);
  });
});
