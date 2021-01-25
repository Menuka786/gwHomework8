// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// BRING IN A REFERENCE TO THE EMPLOYEE CLASS

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }
}


const newManager = new Manager("Menuka", 1, "a@b.com", 25);
newManager.name  // --> "Menuka"
newManager.id    // --> 1
newManager.getName()  // --> "Menuka"
newManager.getRole()  // --> "Manager"