// Assign an employee variable to an object containing name and streetAddress keys
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function that takes an employee object, a key, and a value, and returns a new object with the updated value without mutating the original
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function that takes an employee object, a key, and a value, and mutates the original object with the updated value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function that takes an employee object and a key, and returns a new object without the identified key-value pair without mutating the original
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function that takes an employee object and a key, and mutates the original object by deleting the identified key-value pair
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}