var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]
// print the employees array
console.log(employees);

// print the number of employees
console.log(`the number of employees is`, employees.length);

// print the number of developers
var developer_count = 0;
for (let developer of employees) {
    if (developer[3] == 'developer') {
        developer_count++;
    }
}
console.log(`the number of developers is`, developer_count);

// print experience of each employee
var experience = []
for (let employee of employees) {
    experience.push(employee[5] - employee[4]);
}
console.log(experience);

// print highest salary
var highest_salary = 0;
for (salary of employees) {
    if (highest_salary < salary[2]) {
        highest_salary = salary[2];
    }
}
console.log(`the highest salary is`, highest_salary);

// print lowest salary
var salary_emp = []
for (let employee of employees) {
    salary_emp.push(employee[2]);
}
var lowest_salary = salary_emp[0]
for (let salary of salary_emp) {
    if (lowest_salary > salary) {
        lowest_salary = salary;
    }
}
console.log(`the lowest salary is `, lowest_salary);

// print the name of developer who is taking highest salary
var hgh_sal_devel = 0;
for (let employee of employees) {
    if (employee[3] == 'developer') {
        hgh_sal_devel = employee[2];
    }
}
for (let hghdevsal of employees) {
    if (hghdevsal[2] == hgh_sal_devel && hghdevsal[3] == 'developer') {
        console.log(hghdevsal[1]);
    }
}

// print the name of employee with highest experience
var experience = []
for (let employee of employees) {
    experience.push(employee[5] - employee[4]);
}
var highest_exp = experience[0]
for (let exp of experience) {
    if (highest_exp < exp) {
        highest_exp = exp;
    }
}
console.log(`highest experience is `, highest_exp);

// // print total sum of salary group by developers
var total_sal = 0;
for (let employee of employees) {
    if (employee[3] == 'developer') {
        total_sal = total_sal + employee[2];
    }
}
console.log(`total sum of salary group by developers is `, total_sal);