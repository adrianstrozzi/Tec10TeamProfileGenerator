const Employee = require("../lib/Employee");

test("Employee Class creates Employee object with properties: name (String), id (Number) and email (String)", () => {
  const employee = new Employee("Adrian", 2, "adrianstrozzi@gmail.com")

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("getName() will return this.name", () => {
  const employee = new Employee("Adrian", 2, "adrianstrozzi@gmail.com")

  expect(employee.getName()).toEqual(expect.any(String));
});

test("getId() will return this.id", () => {
  const employee = new Employee("Adrian,", 2, "adrianstrozzi@gmail.com")

  expect(employee.getId()).toEqual(expect.any(Number));
})

test("getEmail() will return this.email", () => {
  const employee = new Employee("Adrian,", 2, "adrianstrozzi@gmail.com")

  expect(employee.getEmail()).toEqual(expect.any(String));
})

test("GetRole() === 'Employee'", () => {
  const employee = new Employee("Adrian", 2, "adrianstrozzi@gmail.com")

  expect(employee.getRole()).toEqual("Employee");
});