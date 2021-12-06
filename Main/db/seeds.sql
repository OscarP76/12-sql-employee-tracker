use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Patrice', 'Oneal', 1, NULL),
    ('Dave', 'Chappelle', 2, 1),
    ('Chris', 'Rock', 3, NULL),
    ('Eddie', 'Murphy', 4, 3),
    ('Kenan', 'Thompson', 5, NULL),
    ('Michael', 'Che', 6, 5),
    ('Amy', 'Schumer', 7, NULL),
    ('Daniel', 'Tosh', 8, 7);