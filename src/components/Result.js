import React from "react";

import styles from "./Result.module.css";

const Result = (props) => {
  return (
    <div className={styles.result}>
      <h3>Previously submitted data: (JSON format)</h3>
      <pre>{props.data}</pre>
    </div>
  );
};

export default Result;
