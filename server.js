const { prompt } = require("inquirer");
const db = require("./db");
const mysql = require('mysql2');
require('dotenv').config()
require("console.table");


function selectQuestion() {
  inquirer
      .prompt([
          {
              type: 'list',
              message: 'What would you like to do?',
              name: 'queryOptions',
              choices: [
                  'View All Departments',
                  'View All Roles',
                  'View All Employees',
                  'Add New Department',
                  'Add New Role',
                  'Add New Employee',
                  'Update Employee Role',
                  'Exit'
              ]
          }
      ])
      .then((answer) => {
          switch (answer.queryOptions) {
              case 'View All Departments':
                  viewAllDepartments();
                  break;
              case 'View All Roles':
                  viewAllRoles();
                  break;
              case 'View All Employees':
                  viewAllEmployees();
                  break;
              case 'Add New Department':
                  addADepartment()
                  break;
              case 'Add New Role':
                  addARole()
                  break;
              case 'Add New Employee':
                  addAnEmployee()
                  break;
              case 'Update An Employee Role':
                  updateAnEmployeeRole()
                  break;
              case 'Exit':
                  exit()
                  break;
          }
      })
}

function manageDepartment() {

  db.query('SELECT * FROM department', (err, result) => {
      if (err) {
          console.log(err)
      }
      console.log('\n')
      console.table(result)
  })
}

function manageRoles() {

  console.log('these are the roles!!')

  db.query('SELECT * FROM role', (err, result) => {
      if (err) {
          console.log(err)
      }
      console.log('\n')
      console.table(result)
  })
}

function manageEmployees() {

  console.log('these are the employees!!')

  db.query('SELECT * FROM employee', (err, result) => {
      if (err) {
          console.log(err)
      }
      console.log('\n')
      console.table(result)
  })
}

function targetDepartment() {
  inquirer
      .prompt([
          {
              type: 'input',
              message: 'What is the name of the department you would like to add?',
              name: 'addDepartment',
          }
      ])
      .then((answer) => {
          db.query(`INSERT INTO department (name) VALUES (?)`, `${answer.addDepartment}`, (err, result) => {
              if (err) {
                  console.log(err)
              }
              console.log('\n')
              console.table(result)
          })
      })
}

function newrole() {
  inquirer
      .prompt([
          {
              type: 'input',
              message: 'What is the title of the role you would like to add?',
              name: 'addNewTitle',
          },
          {
              type: 'input',
              message: 'What is the salary of the role you would like to add?',
              name: 'addNewSalary',
          },
          {
              type: 'input',
              message: 'What is the department of the role you would like to add?',
              name: 'addNewDepartment',
          }
      ])
      .then((answer) => {
          db.query(`INSERT INTO role (title, salary. department_id) VALUES (?, ?, ?)`, `[${answer.addRoleTitle}, ${answer.addRoleSalary}, ${answer.addRoleDepartment}]`, (err, result) => {
              if (err) {
                  console.log(err)
              }
              console.log('\n')
              console.table(result)
          })
      })
}

function newEmployee() {
  inquirer
      .prompt([
          {
              type: 'input',
              message: 'What is the employee first name?',
              name: 'newEmployeeFirstName',
          },
          {
              type: 'input',
              message: 'What is the employee last name?',
              name: 'newEmployeeLastName',
          },
          {
              type: 'input',
              message: 'What is the employee role id?',
              name: 'newEmployeeRole',
          },
          {
              type: 'input',
              message: 'Who is the manager for this employee?',
              name: 'newEmployeeManager',
          }
      ])
      .then((answer) => {
          db.query(`INSERT INTO employee (first_name, last_name. role_id, manager_id) VALUES (?, ?, ?, ?)`, `${answer.addEmployeeFirstName}, ${answer.addEmployeeLastName}, ${answer.addEmployeeRole}, ${answer.addEmployeeManager}`, (err, result) => {
              if (err) {
                  console.log(err)
              }
              console.log('\n')
              console.table(result)
          })
      })
}

function updateExistingRole() {
  console.log('update an existing role!!')
  console.log('\n')
}

function exit() {
  console.log('goodbye!!')
  return
}

function init() {
  selectQuestion()
}

init()




