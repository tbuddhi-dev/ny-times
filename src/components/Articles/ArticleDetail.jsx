import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleDetail.module.scss';

const ArticleDetail = ({ article }) => {
  if (!article) {
    return <div className={styles.noSelection}>Please select an article to view details.</div>;
  }

  return (
    <div className={styles.container}>
      <h2>{article.title}</h2>
      <p><strong>By:</strong> {article.byline}</p>
      <p><strong>Published:</strong> {article.published_date}</p>
      <p><strong>Abstract:</strong> {article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    abstract: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default ArticleDetail;