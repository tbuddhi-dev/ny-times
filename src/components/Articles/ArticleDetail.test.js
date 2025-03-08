import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetail from './ArticleDetail';

describe('ArticleDetail component', () => {
  const mockArticle = {
    title: 'Sample Article',
    byline: 'Author Name',
    abstract: 'This is a sample article.',
  };

  it('renders article details correctly', () => {
    render(<ArticleDetail article={mockArticle} />);
    expect(screen.getByText('Sample Article')).toBeInTheDocument();
    expect(screen.getByText('Author Name')).toBeInTheDocument();
    expect(screen.getByText('This is a sample article.')).toBeInTheDocument();
  });

  it('displays a message if no article is selected', () => {
    render(<ArticleDetail article={null} />);
    expect(screen.getByText('Please select an article to view details.')).toBeInTheDocument(); 
  });
});
