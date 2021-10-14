import React from "react";
import styles from './GradientText.module.css';
const GradientText = () => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>
        <span className={styles.krypto}>Krypto</span>
        <span className={styles.alert}>Alert</span>
      </h1>
        <div className="font-medium text-center">The Easiest Way to track multiple currencies</div>
    </React.Fragment>
  );
};

export default GradientText;