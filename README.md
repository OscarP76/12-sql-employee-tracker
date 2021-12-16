# 12-sql-employee-tracker
repo for my week 12 sql employee tracker homework
## Languages Used
MySql <br>
NodeJS

## Summary
This is an app I created using MySql which takes a users input and puts it into an sql database

## Code Snippet
```
function manageRoles() {

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

    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log('\n')
        console.table(result)
        selectQuestion()
    })
}
```

## Links
<a href="https://youtu.be/0iSxZk2v6Fg">DemoVideo</a>
[GitHub](https://github.com/OscarP76/12-sql-employee-tracker)
