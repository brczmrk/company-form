import React from "react";

import styles from "./EmployeeData.module.css";

const EmployeeData = (props) => {
  const valueChangeHandler = (e) => {
    props.onChange(props.data.id, e.target.id, e.target.value);
  };

  return (
    <div className={styles.employeedata}>
      <h3>Employee Data #{props.data.id + 1}</h3>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.validity.name ? styles.error : ""
        }`}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={props.data.name}
          onChange={valueChangeHandler}
        />
        {!props.validity.name && <p>Please enter a valid employee name!</p>}
      </div>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.validity.email ? styles.error : ""
        }`}
      >
        <label htmlFor="email">Email:</label>
        <input
          //   type="email"  - no need for email type, because we have own validation
          type="text"
          id="email"
          value={props.data.email}
          onChange={valueChangeHandler}
        />
        {!props.validity.email && <p>Please enter a valid employee email!</p>}
      </div>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.validity.job ? styles.error : ""
        }`}
      >
        <label htmlFor="job">Job title:</label>
        <select id="job" value={props.data.job} onChange={valueChangeHandler}>
          <option value="" disabled>
            - select a job title -
          </option>
          <option>accountant</option>
          <option>software developer</option>
          <option>software tester</option>
          <option>manager</option>
        </select>
        {!props.validity.job && <p>Please choose a valid job title!</p>}
      </div>
      <div
        className={`${styles.formcontrol} ${styles.required} ${
          !props.validity.age ? styles.error : ""
        }`}
      >
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          min="1"
          value={props.data.age}
          onChange={valueChangeHandler}
        />
        {!props.validity.age && <p>Please enter a valid age! (min. 18)</p>}
      </div>
      <br />
      <div className={styles.formcontrol}>
        <label htmlFor="cv">CV:</label>
        <input
          id="cv"
          type="file"
          accept="application/pdf"
          value={props.data.cv}
          onChange={valueChangeHandler}
        />
      </div>
    </div>
  );
};

export default EmployeeData;
