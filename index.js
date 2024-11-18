const employee = {
    name: "Ben",
    streetAddress: "8511CatDrive"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
return {
    ...employee,
    [key]: value,
}
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "Sam", "1234DogStreet")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value
    return employee
}

const newDestructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway")

function deleteFromEmployeeByKey(employee, key) {
const updatedEmployee = { ...employee }
delete updatedEmployee[key]
return updatedEmployee
}
const deletedKey = deleteFromEmployeeByKey(employee, employee.name)

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
return employee
}
const destructiveDeletion = destructivelyDeleteFromEmployeeByKey(employee, employee.name)











