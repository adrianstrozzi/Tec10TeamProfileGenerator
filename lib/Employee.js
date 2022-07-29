class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.getName = () => {
      return this.name
    };
    this.getId = () => {
      return this.id
    };
    this.getEmail = () => {
      return this.email
    };
    this.getRole = () => {
      return 'Employee'
    };
  }
}

module.exports = Employee;