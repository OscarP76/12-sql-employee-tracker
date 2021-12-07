const inquirer = require("inquirer");
const mysql = require('mysql2');
require('dotenv').config()
require("console.table");
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345pword",
    database: "employees"
})

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
                    manageDepartment();
                    break;
                case 'View All Roles':
                    manageRoles();
                    break;
                case 'View All Employees':
                    manageEmployees();
                    break;
                case 'Add New Department':
                    targetDepartment()
                    break;
                case 'Add New Role':
                    newrole()
                    break;
                case 'Add New Employee':
                    newEmployee()
                    break;
                case 'Update Employee Role':
                    updateExistingRole()
                    break;
                case 'Exit':
                    exit()
                    break;
            }
        })
}

function manageDepartment() {

    db.query('SELECT * FROM department order by id', (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log('\n')
        console.table(result)
        selectQuestion()
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
        selectQuestion()
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
        selectQuestion()
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
                selectQuestion()
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
            db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answer.addNewTitle, answer.addNewSalary, answer.addNewDepartment], (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log('\n')
                console.table(result)
                selectQuestion()
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
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answer.newEmployeeFirstName, answer.newEmployeeLastName, answer.newEmployeeRole, answer.newEmployeeManager], (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log('\n')
                console.table(result)
                selectQuestion()
            })
        })
}

function updateExistingRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'employee_id',
        message: 'which employee id would you like to update the role for'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'what is the role id you would like to choose'
    }]).then(answer => {
        db.query('update employee set role_id = ? where id = ?', [answer.role_id, answer.employee_id], function (err, data) {
            console.log('update an existing role!!')
            selectQuestion()
        })
    })
}

function exit() {
    console.log('goodbye!!')
    return
}

function init() {
    selectQuestion()
}

init()




