// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // created an array to hold the employee's information
  const employeesArray = [];
  let addNewEmployee = true;
  // use const on first and last name because it won't change. use let on salary so it can be adjusted as needed in the future.
  while(addNewEmployee) {
    const firstName = prompt('What is the new employees first name?')
    const lastName = prompt('What is the new employees last name?')
    const salary = prompt('What is the new employees salary?')
  }
}
// this creates an employee object that specifies the contents
const employee = {
  firstName: firstName,
  lastName: lastName,
  salary: salary,
}
// this adds/pushes the employee details/content into the array
employeesArray.push(employee);

// acceptance criteria states we need a message afterwards asking if they would like to continue.
// create an object that asks the user if they want to add another user. If yes, repeat adding an employee, if no, end text box. 
const addAnotherEmployee = confirm("Would you like to add another employee?")
if (!addAnotherEmployee){
  addAnotherEmployee = false;
}
return employeesArray;

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  for (let i = 0; i < employeesArray.length; i++){
    sum += employeesArray[i].salary
  }
  let average = sum / employeesArray.length
  // the next line will log the average salary of all the employees
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${average}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployeeGroup = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomEmployeeGroup];
}

//this will log the random employee's name in the console
console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

// this will sort the employees alphebetically by last name.
employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
return employeesArray;

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
