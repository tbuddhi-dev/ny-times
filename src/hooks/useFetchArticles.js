import { useState, useCallback } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; 
const URL = process.env.REACT_APP_API_URL; 

const useFetchArticles = (timeFrame) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError('');
    const API_URL = `${URL}/${timeFrame}.json?api-key=${API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      setArticles(response.data.results);
    } catch (err) {
      setError('Failed to fetch articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [timeFrame]); // Refetch when timeFrame changes

  return { articles, loading, error, fetchArticles };
};

export default useFetchArticles;
