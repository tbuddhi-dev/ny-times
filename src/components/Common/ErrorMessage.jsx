import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
