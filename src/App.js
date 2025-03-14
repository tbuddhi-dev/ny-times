import React, { useEffect, useState } from 'react';
import ArticlesContainer from './components/Articles/ArticlesContainer';
import Loader from './components/Common/Loader';
import ErrorMessage from './components/Common/ErrorMessage';
import useFetchArticles from './hooks/useFetchArticles';
import Select from './components/Common/Select';
import styles from './styles/App.module.scss';

function App() {
  const [timeFrame, setTimeFrame] = useState(1); // Default to 'Today' (1 day)
  const { articles, loading, error, fetchArticles } = useFetchArticles(timeFrame);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const timeFrameOptions = [
    { value: 1, label: 'Today' },
    { value: 7, label: 'Last 7 Days' },
    { value: 30, label: 'Last 30 Days' },
  ];

  useEffect(() => {
    fetchArticles(); // Fetch articles when the component mounts or when timeFrame changes
  }, [timeFrame, fetchArticles]);

  useEffect(() => {
    // When articles are fetched, set the first one as the default selected article
    if (articles.length > 0) {
      setSelectedArticle(articles[0]);
    }
  }, [articles]);

  const handleTimeFrameChange = (e) => {
    setTimeFrame(Number(e.target.value)); // Update time frame based on dropdown selection
  };

  const handleArticleSelect = (article) => {
    setSelectedArticle(article); // Update selected article when clicked
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <h1>NY Times Most Popular Articles</h1>
        <div className={styles.timeFrameSelector}>
          <Select
            id="timeFrame"
            value={timeFrame}
            onChange={handleTimeFrameChange}
            options={timeFrameOptions}
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <ArticlesContainer 
            articles={articles} 
            selectedArticle={selectedArticle} 
            onArticleSelect={handleArticleSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;