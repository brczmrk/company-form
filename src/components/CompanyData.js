import React from "react";

import styles from "./CompanyData.module.css";

const CompanyData = (props) => {
  return (
    <div className={styles.companydata}>
      <h2>Company Data</h2>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.formValidity.name ? styles.error : ""
        }`}
      >
        <label htmlFor="name">Company name:</label>
        <input
          type="text"
          id="name"
          value={props.formData.name}
          onChange={props.onChange}
        />
        {!props.formValidity.name && <p>Please enter a valid company name!</p>}
      </div>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.formValidity.email ? styles.error : ""
        }`}
      >
        <label htmlFor="email">Company email:</label>
        <input
          // type="email"  - no need for email type, because we have own validation
          type="text"
          id="email"
          value={props.formData.email}
          onChange={props.onChange}
        />
        {!props.formValidity.email && (
          <p>Please enter a valid company email!</p>
        )}
      </div>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.formValidity.number ? styles.error : ""
        }`}
      >
        <label htmlFor="number">Number of employees:</label>
        <input
          type="number"
          id="number"
          min="1"
          max="100"
          value={props.formData.number}
          onChange={props.onChange}
        />
        {!props.formValidity.number && (
          <p>Please enter a valid number of employees! (min. 1 and max. 100)</p>
        )}
      </div>
      <div className={styles.formcontrol}>
        <label htmlFor="description">Company description:</label>
        <textarea
          id="description"
          rows="4"
          value={props.formData.description}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default CompanyData;
