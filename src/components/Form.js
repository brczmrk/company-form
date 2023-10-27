import React, { useState } from "react";

import CompanyData from "./CompanyData";
import Employees from "./Employees";

import styles from "./Form.module.css";

const validNumber = (number) => number >= 1 && number <= 100;
const isNotEmpty = (val) => val.trim() !== "";
const validJob = (job) =>
  ["accountant", "software developer", "software tester", "manager"].includes(
    job
  );
const validAge = (age) => age >= 18;
const validEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const defaultEmployeeValidity = {
  name: true,
  email: true,
  job: true,
  age: true,
  cv: true,
};

const defaultFormData = {
  name: "",
  email: "",
  number: "",
  description: "",
  employees: [],
};

const defaultFormValidity = {
  name: true,
  email: true,
  number: true,
  employees: [],
};

const Form = (props) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formValidity, setFormValidity] = useState(defaultFormValidity);

  const companyChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "number" && validNumber(value)) {
      setFormData((prevState) => {
        let employees = [...prevState.employees];
        if (parseInt(value) < employees.length) {
          const newEmployees = employees.slice(0, parseInt(value));
          employees = newEmployees;
        } else {
          for (let i = employees.length; i < parseInt(value); ++i) {
            employees.push({
              id: i,
              name: "",
              email: "",
              job: "",
              age: "",
              cv: "",
            });
          }
        }
        const data = { ...prevState, number: value, employees };
        return data;
      });
      setFormValidity((prevState) => {
        let employees = [...prevState.employees];
        if (parseInt(value) < employees.length) {
          const newEmployees = employees.slice(0, parseInt(value));
          employees = newEmployees;
        } else {
          for (let i = employees.length; i < parseInt(value); ++i) {
            employees.push(defaultEmployeeValidity);
          }
        }
        const data = { ...prevState, number: true, employees };
        return data;
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
      setFormValidity({
        ...formValidity,
        [id]: true,
      });
    }
  };

  const employeeChangeHandler = (id, name, value) => {
    const employees = [...formData.employees];
    employees[id][name] = value;
    setFormData((prevState) => {
      const data = { ...prevState, employees };
      return data;
    });
    setFormValidity((prevState) => {
      const employees = [...prevState.employees];
      employees[id][name] = true;
      const data = { ...prevState, employees };
      return data;
    });
  };

  const resetHandler = () => {
    setFormData(defaultFormData);
    setFormValidity(defaultFormValidity);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isNameValid = isNotEmpty(formData.name);
    const isEmailValid = validEmail(formData.email);
    const isNumberValid = validNumber(formData.number);
    let isEmployeesValid = true;

    const employees = [];

    for (let i = 0; i < formData.employees.length; ++i) {
      const isEmpNameValid = isNotEmpty(formData.employees[i].name);
      const isEmpEmailValid = validEmail(formData.employees[i].email);
      const isEmpJobValid = validJob(formData.employees[i].job);
      const isEmpAgeValid = validAge(formData.employees[i].age);

      isEmployeesValid =
        isEmployeesValid &&
        isEmpNameValid &&
        isEmpEmailValid &&
        isEmpJobValid &&
        isEmpAgeValid;

      employees.push({
        name: isEmpNameValid,
        email: isEmpEmailValid,
        job: isEmpJobValid,
        age: isEmpAgeValid,
        cv: true,
      });
    }

    setFormValidity({
      name: isNameValid,
      email: isEmailValid,
      number: isNumberValid,
      employees,
    });

    const isFormValid =
      isNameValid && isEmailValid && isNumberValid && isEmployeesValid;

    if (isFormValid) {
      //send data to backend
      props.showData(formData);

      resetHandler();
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <CompanyData
        formData={formData}
        formValidity={formValidity}
        onChange={companyChangeHandler}
      />
      <Employees
        employees={formData.employees}
        employeesValidity={formValidity.employees}
        onChange={employeeChangeHandler}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetHandler}>
        Reset
      </button>
    </form>
  );
};

export default Form;
