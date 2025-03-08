import React, { useEffect } from 'react';
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

export default ArticlesContainer;
