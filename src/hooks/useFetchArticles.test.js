import React from 'react'; 
import { render, waitFor } from '@testing-library/react';
import useFetchArticles from './useFetchArticles';
import axios from 'axios';

// Mock axios to prevent real API requests during tests
jest.mock('axios');

// Mock data to be returned from axios
const mockArticles = [
  { title: 'Article 1', abstract: 'Summary 1' },
  { title: 'Article 2', abstract: 'Summary 2' },
];

const TestComponent = () => {
  const { articles, loading, error, fetchArticles } = useFetchArticles('7');
  
  // Automatically fetch articles when component renders
  React.useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {articles.length > 0 && <p>Articles fetched</p>}
    </div>
  );
};

test('fetches articles successfully', async () => {
  // Mock axios to resolve with the mock articles
  axios.get.mockResolvedValueOnce({ data: { results: mockArticles } });

  const { getByText } = render(<TestComponent />);
  
  // Wait for the loading state
  await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());

  // Wait for the articles to be fetched and rendered
  await waitFor(() => expect(getByText('Articles fetched')).toBeInTheDocument());
});
