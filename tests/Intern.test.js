const Intern = require("../lib/Intern");

test("Test school creation.", () => {
  const reviewInternSchool = "School Name";
  const newInternCreation = new Intern("Adrian", 1, "adrianstrozzi@gmail.com", reviewInternSchool);
  expect(newInternCreation.school).toBe(reviewInternSchool);
});

test("Return Office Number.", () => {
  const reviewInternSchool = "School Name";
  const newInternCreation = new Intern("Adrian", 1, "adrianstrozzi@gmail.com", reviewInternSchool);
  expect(newInternCreation.getSchool()).toBe(reviewInternSchool);
});

test("Test role === 'Intern'", () => {
  const returnValue = "Intern";
  const newInternCreation = new Intern("Adrian", 1, "adrianstrozzi@gmail.com", "School Name");
  expect(newInternCreation.getRole()).toBe(returnValue);
});