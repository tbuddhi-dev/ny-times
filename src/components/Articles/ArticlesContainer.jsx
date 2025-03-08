import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import styles from './ArticlesContainer.module.scss';

const ArticlesContainer = ({ articles, selectedArticle, onArticleSelect, loading, error }) => {
  useEffect(() => {
    if (articles && articles.length > 0 && !selectedArticle) {
      onArticleSelect(articles[0]); // Set the first article as the default selected one
    }
  }, [articles, selectedArticle, onArticleSelect]);

  if (loading) {
    return <div data-testid="loader">Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!articles || articles.length === 0) {
    return <p>No articles found</p>;
  }

  return (
    <div className={styles.container}>
      <ArticleList 
        articles={articles} 
        onSelectArticle={onArticleSelect}
        selectedArticle={selectedArticle} // Pass selectedArticle for highlighting
      />
      {selectedArticle && <ArticleDetail article={selectedArticle} />}
    </div>
  );
};

ArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired, // Expect an array of article objects
  selectedArticle: PropTypes.object, // Can be null or an article object
  onArticleSelect: PropTypes.func.isRequired, // Function to handle article selection
  loading: PropTypes.bool.isRequired, // Boolean for loading state
  error: PropTypes.string // Error message (can be null)
};

export default ArticlesContainer;
