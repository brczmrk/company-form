import React from "react";
import EmployeeData from "./EmployeeData";

import styles from "./Employees.module.css";

const Employees = (props) => {
  return (
    <div className={styles.employees}>
      {props.employees.map((emp) => {
        return (
          <EmployeeData
            key={emp.id}
            data={emp}
            validity={props.employeesValidity[emp.id]}
            onChange={props.onChange}
          />
        );
      })}
    </div>
  );
};

export default Employees;
