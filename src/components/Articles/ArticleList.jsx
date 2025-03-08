import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleList.module.scss';

const ArticleList = ({ articles, onSelectArticle, selectedArticle }) => {
  return (
    <div className={styles.container}>
      <h2>Most Popular Articles</h2>
      <ul className={styles.articleList}>
        {articles.map((article) => (
          <li 
            key={article.id} 
            data-testid="article-item"
            className={`${styles.articleItem} ${selectedArticle?.id === article.id ? styles.selected : ''}`}
            onClick={() => onSelectArticle(article)}
          >
            <h3>{article.title}</h3>
            <p>{article.byline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      byline: PropTypes.string,
    })
  ).isRequired,
  onSelectArticle: PropTypes.func.isRequired,
  selectedArticle: PropTypes.object 
};

export default ArticleList;
