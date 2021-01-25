// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return 'Employee'
    }
}

// const bob = new Employee("bob", 5, "bob@company.net");
// const ann = new Employee("ann", 7, "ann@company.net");

//bob.getName(); // --> return "bob"
// bob.getRole(); // --> return 'Employee'
//ann.getName(); // return 'ann';

// REMEMBER we have to make this CLASS avaiable outside of this file!!
// EXPORT THIS CLASS