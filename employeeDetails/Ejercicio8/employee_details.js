const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
];

// Function to display all employees
const displayAllEmployees = () => {
    const totalEmployees = employees.map(employee =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};

// Function to calculate total salaries
const calculateTotalSalaries = () => {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
};

// Function to display HR employees
const displayHREmployees = () => {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    if (hrEmployees.length > 0) {
        const hrEmployeesDisplay = hrEmployees.map(employee =>
            `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        ).join('');
        document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
    } else {
        document.getElementById('employeesDetails').innerHTML = '<p>No HR employees found.</p>';
    }
};

// Function to find employee by ID
const findEmployeeById = (employeeId) => {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = 
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = '<p>No employee has been found with this ID.</p>';
    }
};

function findEmployeeBySpecialization(specialization) {
    const employeesWithSpecialization = employees.filter(employee => employee.specialization === specialization);
    if (employeesWithSpecialization.length > 0) {
        const employeesDisplay = employeesWithSpecialization.map(employee =>
            `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - Specialization: ${employee.specialization}</p>`
        ).join('');
        document.getElementById('employeesDetails').innerHTML = employeesDisplay;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>No employees found with specialization in ${specialization}.</p>`;
    }
}

// Call to display all employees on page load
displayAllEmployees();
