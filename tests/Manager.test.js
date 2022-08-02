const Manager = require("../lib/Manager");


test("Create Manager Object", () => {
  const manager = new Manager("Adrian", 10, "adrianstrozzi@gmail.com", 10)

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("GetRole() === 'Manager'", () => {
  const manager = new Manager("Adrian", 10, "adrianstrozzi@gmail.com", 10)

  expect(manager.getRole()).toEqual("Manager");
});