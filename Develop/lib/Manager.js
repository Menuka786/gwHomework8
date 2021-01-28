// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// BRING IN A REFERENCE TO THE EMPLOYEE CLASS

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officeNumber = officenumber;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber(){

        return this.officenumber;
    }
}


module.exports = Manager ;