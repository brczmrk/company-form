# Company form - React App

*Created by Márk Baricz.*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The form consists of two parts: company data and employee data.

The App is deployed to http://brczmrk.github.io/company-form.

## Components

- App: 
This is the main component, which is rendered in the root. It contains one, eventually two components. First one is the **Form**, and in case of valid form submission there is a **Result** component too.

- Form:
This components job is the handling of the whole form. Here are the states and default values defined. First part that appears in the form is the **CompanyData**, here you can give the details of the company. Second part is **Employees** which collects all the **EmployeeData**. At the bottom of the form you can find the submit button, which submits the data, and a reset button, which resets all the fields to their default values.

- CompanyData:
There are three required fields to fill, the name, email and number of employees. There is a validity checking on the email input (should be a valid email) and on the number of employees (should be a positive number; min. 1 max. 100). The description field is optional.

- Employees:
As mentioned before, here are defined dynamically the **EmployeeData** sections depending on the *number of employees* given in the **CompanyData** part.

- EmployeeData:
There are four required fields to fill, the name, email, job title and age. There is a validity checking on the email input (should be a valid email), job title (should be selected from the given options) and age (should be a positive number; min. 18). The CV file attachment is optional, but there can be uploaded only *.pdf files.

- Result:
If every required field is filled correctly, so all of them are valid, and the form is submitted, below the form appears the (lastly) submitted data in JSON format.

## Styling

The styling is done with vanilla CSS, structured in *.module.css files per component.

## Missing features

The file handling from the **EmployeeData** is missing, so the upload of a file is not even required.

There is no connection to a backend. The submitted data is transformed to JSON, but is not sent to an endpoint.